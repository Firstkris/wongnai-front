import { Navigate } from "react-router-dom";
import { useMerchant } from "../../../feature/auth/contexts/MerchantContext";

export default function ProtectedProfileRoute({ children }) {
  const { merchant } = useMerchant();
  console.log(merchant);
  return merchant ? <Navigate to={`/merchant/${merchant.id}/1`} /> : children;
}
