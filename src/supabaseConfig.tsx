import { createClient } from '@supabase/supabase-js'

const supabaseKey:string = import.meta.env.VITE_SUPABASE_API_KEY;
const supabaseUrl:string = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase