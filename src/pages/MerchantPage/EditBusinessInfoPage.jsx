import React from "react";
import BusinessInfo from "../../feature/Restuarant/BusinessInfo";
import { useRenderCheckbox } from "../../hooks/hooks";
import EditBusinessInfo from "../../feature/Restuarant/EditBusinessInfo";
import useMerchantContext from "../../hooks/useMerchantContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function EditBusinessInfoPage() {

    // console.log(restaurantId);
    return (
        <div className=' max-w-[1024] w-8/12 mx-auto py-8'>

            <EditBusinessInfo />

        </div>
    );
}
export default EditBusinessInfoPage;