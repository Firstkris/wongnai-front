import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedProfileRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
}
