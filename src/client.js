import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
   'https://ixybpakkzjiovohszeus.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4eWJwYWtremppb3ZvaHN6ZXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0NDU0MDYsImV4cCI6MTk3OTAyMTQwNn0.zYaC3i55TAZGR0zBaaZAVUqWpaG67_GXCzXQnLoo0S8'
)

// const sub = supabase
//    .from('*')
//    .on('*', () => {
//       console.log('Change received!')
//    })
//    .subscribe()