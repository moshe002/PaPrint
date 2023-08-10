import { createClient } from '@supabase/supabase-js'

const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
//const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;

const supabase = createClient('https://mzglgldsmcjedhciycas.supabase.co', supabaseKey)

export default supabase