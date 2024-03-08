import { useContext } from "react";
import { MerchantContext } from "../contexts/MerchantContext";


export default function useMerchantContext() {
    return useContext(MerchantContext)
};
