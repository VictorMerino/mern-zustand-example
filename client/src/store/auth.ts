import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  token: String | null
  profile: unknown
}

type Actions = {
  setToken: (token: string) => void
  setProfile: (profile: unknown) => void
}
export const useAuthStore = create(
  persist<State & Actions>(
    set => ({
      token: null,
      setToken: (token: string) => set(state => ({ token })),
      profile: null,
      setProfile: (profile: unknown) => set(state => ({ profile })),
    }),
    { name: 'auth' }
  )
)
