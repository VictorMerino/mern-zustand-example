import { FormEvent } from 'react'
import { loginRequest, profileRequest } from '../api/auth'
import { useAuthStore } from '../store/auth'

function LoginPage() {
  const setToken = useAuthStore(state => state.setToken)
  const setProfile = useAuthStore(state => state.setProfile)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    console.log(email, password)
    const loginResponse = await loginRequest(email, password)
    setToken(loginResponse.data.token)

    const profileResponse = await profileRequest()
    setProfile(profileResponse.data.user)
    console.log(profileResponse)
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
