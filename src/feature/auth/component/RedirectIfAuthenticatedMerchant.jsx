import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedProfileRoute({ children }) {
  const { user } = useAuth();

  return user ? <Navigate to="/merchant"  /> : children;
}
 