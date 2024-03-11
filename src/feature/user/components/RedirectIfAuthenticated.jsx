import { Navigate } from "react-router-dom"
import { useUser } from "../contexts/UserContext"

export default function RedirectIfAuthenticated({ children }) {
  const { user } = useUser()
  return user ? <Navigate to="/" /> : children
}
