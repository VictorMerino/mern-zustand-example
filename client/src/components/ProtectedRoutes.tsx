import React, { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isAllowed: boolean
  children?: ReactNode
}
export const ProtectedRoutes = ({ isAllowed, children }: Props) => {
  if (!isAllowed) return <Navigate to="/login" />
  return children ? <>{children}</> : <Outlet />
}
