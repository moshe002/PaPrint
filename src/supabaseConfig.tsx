import { createClient } from '@supabase/supabase-js'

// const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// const supabase = createClient(`${supabaseUrl}`, `${supabaseKey}`)

const supabase = createClient("https://mzglgldsmcjedhciycas.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Z2xnbGRzbWNqZWRoY2l5Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NDg5NTUsImV4cCI6MjAwNzEyNDk1NX0.Mm8vALp1wGPVc58lxnyCpA4sRZhN2QLHD4DBf2JL9Xo")

export default supabase