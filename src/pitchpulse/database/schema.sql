-- PitchPulse Database Schema

-- 1. Events table
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    event_date TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Startups table
CREATE TABLE IF NOT EXISTS startups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    logo_url TEXT,
    pitch_order INTEGER NOT NULL,
    phase TEXT DEFAULT 'pending' CHECK (phase IN ('pending', 'pitching', 'questions', 'rating', 'archived')),
    is_active BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Survey Questions
CREATE TABLE IF NOT EXISTS survey_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    startup_id UUID REFERENCES startups(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type TEXT DEFAULT 'rating' CHECK (question_type IN ('rating', 'text', 'choice')),
    options JSONB,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Survey Responses
CREATE TABLE IF NOT EXISTS survey_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_id UUID REFERENCES survey_questions(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    user_email TEXT NOT NULL,
    response_value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(question_id, user_id)
);

-- 5. Votes
CREATE TABLE IF NOT EXISTS votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    startup_id UUID REFERENCES startups(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    user_email TEXT NOT NULL,
    vote_type TEXT DEFAULT 'support' CHECK (vote_type IN ('support', 'invest', 'interested')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(startup_id, user_id)
);

-- 6. Admins
CREATE TABLE IF NOT EXISTS admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE startups ENABLE ROW LEVEL SECURITY;
ALTER TABLE survey_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Helper Functions
CREATE OR REPLACE FUNCTION is_vit_email()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if the user's email ends with @vitbhopal.ac.in
  RETURN auth.jwt() ->> 'email' LIKE '%@vitbhopal.ac.in';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if the user's email is in the admins table
  RETURN auth.jwt() ->> 'email' IN (SELECT email FROM admins);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS Policies

-- Events
DROP POLICY IF EXISTS "VIT users can view active events" ON events;
DROP POLICY IF EXISTS "VIT users can view active or completed events" ON events;
CREATE POLICY "VIT users can view active or completed events" ON events
    FOR SELECT USING (status IN ('active', 'completed') AND is_vit_email());

DROP POLICY IF EXISTS "Admins can manage events" ON events;
CREATE POLICY "Admins can manage events" ON events
    FOR ALL USING (is_admin());

-- Startups
DROP POLICY IF EXISTS "VIT users can view startups" ON startups;
CREATE POLICY "VIT users can view startups" ON startups
    FOR SELECT USING (is_vit_email());

DROP POLICY IF EXISTS "Admins can manage startups" ON startups;
CREATE POLICY "Admins can manage startups" ON startups
    FOR ALL USING (is_admin());

-- Survey Questions
DROP POLICY IF EXISTS "VIT users can view questions" ON survey_questions;
CREATE POLICY "VIT users can view questions" ON survey_questions
    FOR SELECT USING (is_vit_email());

DROP POLICY IF EXISTS "Admins can manage questions" ON survey_questions;
CREATE POLICY "Admins can manage questions" ON survey_questions
    FOR ALL USING (is_admin());

-- Survey Responses
DROP POLICY IF EXISTS "VIT users can submit responses" ON survey_responses;
CREATE POLICY "VIT users can submit responses" ON survey_responses
    FOR INSERT WITH CHECK (auth.uid() = user_id AND is_vit_email());

DROP POLICY IF EXISTS "Users can view own responses" ON survey_responses;
CREATE POLICY "Users can view own responses" ON survey_responses
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all responses" ON survey_responses;
CREATE POLICY "Admins can view all responses" ON survey_responses
    FOR SELECT USING (is_admin());

-- Votes
DROP POLICY IF EXISTS "VIT users can vote" ON votes;
CREATE POLICY "VIT users can vote" ON votes
    FOR INSERT WITH CHECK (auth.uid() = user_id AND is_vit_email());

DROP POLICY IF EXISTS "Users can view own votes" ON votes;
CREATE POLICY "Users can view own votes" ON votes
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all votes" ON votes;
CREATE POLICY "Admins can view all votes" ON votes
    FOR SELECT USING (is_admin());

-- Admins table security (Admins manage themselves or manual insert via dashboard originally)
-- For now, allow admins to read the admins table to verify role
DROP POLICY IF EXISTS "Admins can view admins" ON admins;
CREATE POLICY "Admins can view admins" ON admins
    FOR SELECT USING (is_admin());
