import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jzylycxvjmxzyfpyhngx.supabase.co';
const supabaseAnonKey = 'sb_publishable__UWn_mjSTzuwONVBSF9oIg_UEg5Jj6c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
