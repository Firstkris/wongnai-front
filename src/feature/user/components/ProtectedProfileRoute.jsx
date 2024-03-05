import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedProfileRoute({ children }) {
  const { user } = useUser();

  return user ? children : <Navigate to="/" />;
}
