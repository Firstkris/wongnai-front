import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedMerchant({ children }) {
  const { user } = useAuth();
  // console.log({user})
  return user ? children : <Navigate to="/merchant/login"  />;
}
 