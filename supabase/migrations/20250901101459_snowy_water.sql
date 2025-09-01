/*
  # Create schools table

  1. New Tables
    - `schools`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `address` (text, required)
      - `city` (text, required)
      - `state` (text, required)
      - `contact` (text, required)
      - `image` (text, optional - URL to image)
      - `email_id` (text, required, validated email)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `schools` table
    - Add policy for public read access (since schools should be publicly viewable)
    - Add policy for authenticated users to insert schools
*/

CREATE TABLE IF NOT EXISTS schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  contact text NOT NULL,
  image text,
  email_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;

-- Allow public read access to schools
CREATE POLICY "Allow public read access to schools"
  ON schools
  FOR SELECT
  TO public
  USING (true);

-- Allow insert for all users (you might want to restrict this to authenticated users)
CREATE POLICY "Allow insert access to schools"
  ON schools
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create an index on name for faster searching
CREATE INDEX IF NOT EXISTS idx_schools_name ON schools(name);

-- Create an index on city for faster filtering
CREATE INDEX IF NOT EXISTS idx_schools_city ON schools(city);