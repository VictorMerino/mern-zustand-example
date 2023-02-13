import React from 'react'
import { useAuthStore } from '../store/auth'

export const ProfilePage = () => {
  const profile = useAuthStore(state => state.profile)
  return <div>ProfilePage {JSON.stringify(profile)}</div>
}
