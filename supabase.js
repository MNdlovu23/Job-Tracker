import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://xderhoeuvdpzfdupuezh.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZXJob2V1dmRwemZkdXB1ZXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMzUxOTYsImV4cCI6MjA5MDYxMTE5Nn0.mWCFHvlqOoUkIfY3fGEDwgoPkeZhit0zcgequYKjqvE"

export const supabase = createClient(supabaseUrl, supabaseKey)


