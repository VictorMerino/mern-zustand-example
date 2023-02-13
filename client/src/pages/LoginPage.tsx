import { FormEvent } from 'react'
import { loginRequest } from '../api/auth'

function LoginPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    console.log(email, password)
    const response = await loginRequest(email, password)
    console.log(response)
  }
  return (
    <form action="" onSubmit={e => handleSubmit(e)}>
      <input type="email" name="" id="email" placeholder="email@email.com" />
      <input type="password" name="" id="password" placeholder="*****" />
      <button>Login</button>
    </form>
  )
}

export default LoginPage
