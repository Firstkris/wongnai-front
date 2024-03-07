import React from "react";
import BusinessInfo from "../../feature/Restuarant/BusinessInfo";
import { useRenderCheckbox } from "../../hooks/hooks";

function RestaurantRegisterPage() {
  const checkbox = useRenderCheckbox()
  // checkbox()
  return (
    <div className=' max-w-[1024] w-8/12 mx-auto py-8'>

      {/* <checkbox title='test' /> */}
      <BusinessInfo />

    </div>
  );
}

export default RestaurantRegisterPage;
