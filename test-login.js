import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mvxzclsilmhlzzzulzlm.supabase.co'
const supabaseAnonKey = 'sb_publishable_cmkS56QTzKGwgECONT9Ytw_ecpYw38_'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testLogin() {
  console.log('Intentando iniciar sesión con admin@cuspidedigital.co / admin123')
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'admin@cuspidedigital.co',
    password: 'admin123'
  })

  if (error) {
    console.error('Error:', error.message)
  } else {
    console.log('Login exitoso! User ID:', data.user?.id)
  }
}

testLogin()
