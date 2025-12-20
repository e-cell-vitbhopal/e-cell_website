-- PitchPulse RLS Fix Migration
-- Run this to allow audience to view completed events (for leaderboard)

-- Fix Events RLS Policy - allow viewing active AND completed events
DROP POLICY IF EXISTS "VIT users can view active events" ON events;
CREATE POLICY "VIT users can view active or completed events" ON events
    FOR SELECT USING (status IN ('active', 'completed') AND is_vit_email());

-- Fix startup_ratings RLS Policy - allow viewing all ratings for leaderboard
-- This allows the Leaderboard to fetch ratings for completed events
DROP POLICY IF EXISTS "Anyone can view ratings for leaderboard" ON startup_ratings;
CREATE POLICY "Anyone can view ratings for leaderboard" ON startup_ratings
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM startups s 
            JOIN events e ON s.event_id = e.id 
            WHERE s.id = startup_ratings.startup_id 
            AND e.status IN ('active', 'completed')
        )
        OR auth.uid() = user_id
    );
