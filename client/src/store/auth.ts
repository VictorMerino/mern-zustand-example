import { create } from 'zustand'

type State = {
  token: String | null
}

type Actions = {
  setToken: (token: string) => void
}
const useAuthStore = create<State & Actions>(set => ({
  token: null,
  setToken: (token: string) => set(state => ({ token })),
}))
