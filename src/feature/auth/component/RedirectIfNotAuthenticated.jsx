import { Navigate } from "react-router-dom"
import { useMerchant } from "../../auth/contexts/MerchantContext"

export default function ProtectedMerchant({ children }) {
  const { merchant } = useMerchant()

  return merchant ? children : <Navigate to={`/merchant/login`} />
}
