import React from "react";
import { ButtonRestaurantPage } from "../../components/restaurantPageComponents/ButtonRestaurantPage";
import { DeleteIcon, EditInfoIcon, UploadIcon } from "../../icons/icon";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AddImgModal from "./AddImgModal";
import DeleteImgModal from "./DeleteImgModal";
import { Loading } from "../../components/Loading";
import { useRestaurant } from "../../hooks/hooks";

export function MerchantTitleCard({ restaurantData, setOnFetch }) {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useRestaurant();
  const { restaurantId, merchantId } = useParams();
  const [addToggle, setAddToggle] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);

  const showVerified = restaurantData?.verify && (
    <div className="bg-blue-500 text-white rounded-md px-1.5 gap-1 flex text-xs py-0.5">
      <IconCheckmark /> OFFICIAL
    </div>
  );

  return (
    <div className=" w-full bg-white  my-4 rounded-md">
      <div className="p-4 flex flex-col gap-1 ">
        <div className="flex items-baseline gap-3">
          <h1 className="text-4xl">{restaurantData?.restaurantName}</h1>
          <h1 className="text-2xl text-gray-500">{restaurantData?.subtitle}</h1>
          {showVerified}
        </div>
        <div>
          <div className="text-gray-500 text-xs">
            <span>{restaurantData?.reviewPoint} เรตติ้ง </span>
            <span>({restaurantData?.reviewCount} รีวิว)</span>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-xs">
            {restaurantData?.category?.categoryName}
          </p>
        </div>
        <div>
          {restaurantData?.isOpen ? (
            <p className="text-green-500 text-xs">เปิดอยู่</p>
          ) : (
            <p className="text-red-500 text-xs">ปิดอยู่</p>
          )}
        </div>
      </div>
      <div className="px-4 pb-4 flex justify-end gap-2">
        <ButtonRestaurantPage
          onClick={() =>
            navigate(`/merchant/editRestaurant/${merchantId}/${restaurantId}`)
          }
          color="bg-red_primary hover:bg-red_primary_hv"
          textColor="text-white"
        >
          <EditInfoIcon />
          แก้ไขข้อมูล
        </ButtonRestaurantPage>

        {addToggle ? (
          <AddImgModal
            setOnFetch={setOnFetch}
            setIsLoading={setIsLoading}
            setAddToggle={setAddToggle}
          />
        ) : null}

        <ButtonRestaurantPage
          color="bg-gray-200 hover:bg-gray-300"
          textColor=""
          onClick={() => setAddToggle((c) => !c)}
        >
          <UploadIcon />
          เพิ่มรูปภาพ
        </ButtonRestaurantPage>

        {deleteToggle ? (
          <DeleteImgModal setDeleteToggle={setDeleteToggle} />
        ) : null}

        <ButtonRestaurantPage
          color="bg-gray-200 hover:bg-gray-300"
          textColor=""
          onClick={() => setDeleteToggle((c) => !c)}
        >
          <DeleteIcon /> ลบรูปภาพ
        </ButtonRestaurantPage>
      </div>
    </div>
  );
}
