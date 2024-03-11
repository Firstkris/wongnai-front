import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedProfileRoute({ children }) {
  const { user } = useAuth();
  // console.log({user})
  return user ? <Navigate to="/merchant/:merchantId/:restaurantId"  /> : children;
}
 