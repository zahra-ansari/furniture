import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://niqbexbgrqvdvqbqefrl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pcWJleGJncnF2ZHZxYnFlZnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5Njc2NTQsImV4cCI6MjAzOTU0MzY1NH0.voQq-mup0yLAg3LoQWhyjG6vfI1mDdZbU_Wz8dro8lk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
