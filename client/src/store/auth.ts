import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  token: String | null
}

type Actions = {
  setToken: (token: string) => void
}
const useAuthStore = create(
  persist<State & Actions>(
    set => ({
      token: null,
      setToken: (token: string) => set(state => ({ token })),
    }),
    { name: 'auth' }
  )
)
