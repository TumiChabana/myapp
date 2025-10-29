import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hmrlrrsgooaftrpwetkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtcmxycnNnb29hZnRycHdldGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2Nzk5MjgsImV4cCI6MjA3NzI1NTkyOH0.l0PSVIhbq-Wr6UmCZJFhageGi4Q0QS35BmDp2GAVyio';

export const supabase = createClient(supabaseUrl, supabaseKey);
