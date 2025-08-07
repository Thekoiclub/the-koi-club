import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message); else alert('Logged in (demo)')
  }

  const signup = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message); else alert('Check your email to confirm.')
  }

  return (
    <div className="card space-y-2">
      <h2 className="font-semibold">Login / Sign Up</h2>
      <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <div className="flex gap-2">
        <button className="btn" onClick={login}>Log in</button>
        <button className="btn bg-gray-800" onClick={signup}>Sign up</button>
      </div>
    </div>
  )
}
