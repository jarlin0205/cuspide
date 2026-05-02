import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mvxzclsilmhlzzzulzlm.supabase.co'
const supabaseAnonKey = 'sb_publishable_cmkS56QTzKGwgECONT9Ytw_ecpYw38_'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testSignup() {
  const email = `admin_${Date.now()}@test.com`
  console.log('Intentando registrar', email)
  const { data, error } = await supabase.auth.signUp({
    email,
    password: 'admin123'
  })

  if (error) {
    console.error('Error signup:', error.message)
  } else {
    console.log('Signup exitoso! User:', data.user?.id)
    console.log('Session:', data.session ? 'Yes' : 'No')
  }
}

testSignup()
