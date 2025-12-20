-- PitchPulse Startup Ratings Migration
-- Run this migration to add support for 1-10 ratings

-- 1. Create startup_ratings table
CREATE TABLE IF NOT EXISTS startup_ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    startup_id UUID REFERENCES startups(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    user_email TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 10),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(startup_id, user_id)
);

-- 2. Enable RLS
ALTER TABLE startup_ratings ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies for startup_ratings
DROP POLICY IF EXISTS "VIT users can submit ratings" ON startup_ratings;
CREATE POLICY "VIT users can submit ratings" ON startup_ratings
    FOR INSERT WITH CHECK (auth.uid() = user_id AND auth.jwt() ->> 'email' LIKE '%@vitbhopal.ac.in');

DROP POLICY IF EXISTS "Users can view own ratings" ON startup_ratings;
CREATE POLICY "Users can view own ratings" ON startup_ratings
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all ratings" ON startup_ratings;
CREATE POLICY "Admins can view all ratings" ON startup_ratings
    FOR SELECT USING (
        auth.jwt() ->> 'email' IN (SELECT email FROM admins)
    );

-- 4. Update startups table phase constraint to include 'rating' phase
-- First drop the existing constraint and add new one
ALTER TABLE startups DROP CONSTRAINT IF EXISTS startups_phase_check;
ALTER TABLE startups ADD CONSTRAINT startups_phase_check 
    CHECK (phase IN ('pending', 'pitching', 'questions', 'rating', 'archived'));

-- 5. Create helper function for average rating calculation
CREATE OR REPLACE FUNCTION get_startup_average_rating(startup_uuid UUID)
RETURNS NUMERIC AS $$
BEGIN
    RETURN (
        SELECT COALESCE(AVG(rating)::NUMERIC(3,1), 0)
        FROM startup_ratings
        WHERE startup_id = startup_uuid
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Create helper function for rating count
CREATE OR REPLACE FUNCTION get_startup_rating_count(startup_uuid UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (
        SELECT COUNT(*)::INTEGER
        FROM startup_ratings
        WHERE startup_id = startup_uuid
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
