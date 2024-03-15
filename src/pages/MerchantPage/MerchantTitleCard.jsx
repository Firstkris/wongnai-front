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
import axios from "../../configs/axios";

export function MerchantTitleCard({
  setOnFetch,
  setSideBar,
  filter,
  restaurantData,
  sideBar,
}) {
  const navigate = useNavigate();
  const { setIsLoading } = useRestaurant();
  const { restaurantId, merchantId } = useParams();
  const [addToggle, setAddToggle] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [closeOrOpen, setCloseOrOpen] = useState("0");
  // const { setRestaurantPage, restaurantData } = useRestaurant();

  const showVerified = restaurantData?.verify && (
    <div className="bg-blue-500 text-white rounded-md px-1.5 gap-1 flex text-xs py-0.5">
      <IconCheckmark /> OFFICIAL
    </div>
  );

  const handleChangeOpen = async () => {
    const data = await axios.patch(`/merchant/toggleOpen/${restaurantId}`);
    console.log(sideBar);
    setSideBar((r) =>
      r.map((item) =>
        item.id == data.data.data.id
          ? { ...item, isOpen: data.data.data.isOpen }
          : item
      )
    );
  };

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
          <select value={restaurantData?.isOpen} onChange={handleChangeOpen}>
            <option className="text-green-600" value={true}>
              เปิดอยู่
            </option>
            <option className="text-red-500" value={false}>
              ปิดอยู่
            </option>
          </select>
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
            setSideBar={setSideBar}
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
          <DeleteImgModal
            filter={filter}
            setSideBar={setSideBar}
            setDeleteToggle={setDeleteToggle}
          />
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
