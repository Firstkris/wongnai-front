import { IconCamera } from "./icon-svg/IconCamera";
import { IconMessage } from "./icon-svg/IconMessage";
import { BookmarkIcon } from "./BookmarkIcon";
import { IconCheckmark } from "./icon-svg/IconCheckmark";
import { ButtonRestaurantPage } from "./restaurantPageComponents/ButtonRestaurantPage";
import { priceLength, rating } from "../constants/constant";
import { IconCheckGreen } from "./icon-svg/IconCheckGreen";
import { IconTel } from "./icon-svg/IconTel";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MiniMapGoogle } from "../feature/MimiMapGoogle";
import { BiFoodMenu } from "react-icons/bi";
import { RatingButton } from "../components/restaurantPageComponents/RatingButton";
import { UserReviewCard } from "./restaurantPageComponents/UserReviewCard";
import { useRestaurant } from "../hooks/hooks";
import { ProgressBarStar } from "../components/restaurantPageComponents/ProgressBarStar";

export function TitleRestaurantCard({ restaurantData, bookmarks }) {
  const bookmarkRef = useRef();
  const navigate = useNavigate();
  const showVerified = restaurantData?.verify && (
    <div className="bg-blue-500 text-white rounded-md px-1.5 gap-1 flex text-xs py-0.5">
      <IconCheckmark /> OFFICIAL
    </div>
  );

  const handleClickBookmark = () => {
    bookmarkRef.current.click();
  };

  const handleClickReview = () => {
    navigate(`/review/${restaurantData.id}`); ///${restaurantData?.id}
  };

  return (
    <div className=" w-full bg-white  rounded-md">
      <div className="p-4 flex flex-col gap-1 border-b-2">
        {restaurantData?.restaurantName ? (
          <div className="flex items-baseline gap-3">
            <h1 className="text-4xl">{restaurantData?.restaurantName}</h1>
            <h1 className="text-2xl text-gray-500">
              {restaurantData?.subtitle}
            </h1>
            <span>{showVerified}</span>
          </div>
        ) : (
          <div>ไม่พบข้อมูล</div>
        )}
        <div>
          <div className="text-gray-500 text-xs">
            <span>
              {restaurantData?.reviews
                ? restaurantData.reviews.reduce((acc, el) => el.star + acc, 0)
                : 0}{" "}
              เรตติ้ง{" "}
            </span>
            <span>({restaurantData?.reviews?.length} รีวิว)</span>
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
      <div className="p-4 flex gap-2">
        <ButtonRestaurantPage
          color="bg-blue-500 hover:bg-blue-600"
          textColor="text-white"
          onClick={handleClickReview}
        >
          <IconMessage />
          เขียนรีวิว
        </ButtonRestaurantPage>

        <ButtonRestaurantPage>
          <IconCamera />
          เพิ่มรูป
        </ButtonRestaurantPage>
        <div onClick={handleClickBookmark}>
          <ButtonRestaurantPage>
            <BookmarkIcon ref={bookmarkRef} restaurant={{ bookmarks }} />
            บันทึก
          </ButtonRestaurantPage>
        </div>
      </div>
    </div>
  );
}

export function RestaurantMapCard({ restaurantData }) {
  const handleClickDirection = () => {
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${restaurantData?.lat},${restaurantData?.lng}`;
  };
  console.log(restaurantData);
  return (
    <div className=" w-full bg-white  p-3 rounded-md">
      <div className="flex gap-3">
        <div>
          <div
            className="bg-gray-300 w-48 h-48  object-fill flex rounded-md cursor-pointer overflow-hidden"
            onClick={handleClickDirection}
          >
            {restaurantData && restaurantData?.lat && restaurantData?.lng ? (
              <MiniMapGoogle
                lat={restaurantData?.lat}
                lng={restaurantData?.lng}
              />
            ) : (
              <div className="flex items-center w-full justify-center">
                ไม่พบข้อมูล
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between pb-4 border-b-2 min-h-28 ">
            <p className="text-xsh-30">
              {restaurantData?.address}
              {/* 117 1 ถ. ทองหล่อ แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110 */}
            </p>
            <div className="items-center">
              <ButtonRestaurantPage onClick={handleClickDirection}>
                ดูเส้นทาง
              </ButtonRestaurantPage>
            </div>
          </div>
          <div className="flex justify-between py-2 border-b-2">
            <div className="flex gap-1">
              <p className="font-bold ">เบอร์โทร:</p>
              {restaurantData?.mobile ? (
                <p>{restaurantData?.mobile}</p>
              ) : (
                <p>-</p>
              )}
            </div>
            <IconTel />
          </div>
          <div className="flex justify-between py-2 border-b-2">
            <div className="flex gap-1">
              <p className="font-bold ">เมนูอาหาร</p>
            </div>
            <BiFoodMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RestaurantDetailCard({ restaurantData }) {
  const priceLengthText =
    restaurantData?.priceLength && priceLength
      ? priceLength
          .find((el) => el.id === restaurantData?.priceLength)
          ?.priceLength.slice(4)
      : null;

  return (
    <div className=" w-full bg-white  p-4 rounded-md ">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-md font-bold">เวลาเปิดร้าน</p>
          {restaurantData?.openHours && restaurantData?.openHours.length > 0 ? (
            restaurantData.openHours.map((el) => (
              <div className=" flex" key={el.id}>
                <p className="text-xs w-2/4 text-gray-500">{el.date}</p>
                <p className="text-xs  text-gray-500">
                  {el.openTime.slice(11, 16)}-{el.closeTime.slice(11, 16)}
                </p>
              </div>
            ))
          ) : (
            <div>ไม่พบข้อมูล</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {restaurantData?.facilitiesWithRestaurantId
            ? restaurantData.facilitiesWithRestaurantId.map((el) => (
                <div className="flex gap-2" key={el.id}>
                  <IconCheckGreen />{" "}
                  <div className="flex text-sm">{el.facility.facilityName}</div>
                </div>
              ))
            : null}
        </div>

        <div className="flex flex-col">
          <p className="text-md font-bold">ช่วงราคา</p>
          <div className="flex-grow flex items-baseline gap-1">
            {restaurantData?.priceLength &&
            restaurantData?.priceLength.length > 0 ? (
              <div className="flex-grow flex items-baseline gap-1">
                {restaurantData?.priceLength}
                <p className="text-xs  text-gray-500">
                  ({priceLengthText} บาท){" "}
                </p>{" "}
              </div>
            ) : (
              <div>ไม่พบข้อมูล</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
export function RatingRestaurantCard({ restaurantData }) {
  const { filterByRating, reviewsRating } = useRestaurant();
  const [isSelected, setIsSelected] = useState(false);

  const handleClickFilterRating = (rating) => {
    filterByRating(rating);
    // setIsSelected((prev) => !prev)
  };
  const calRating = (review, number) => {
    if (review && review.length > 0) {
      const percentRating =
        (review.filter((el) => el.star == number).length / review.length) * 100;
      return parseFloat(percentRating).toFixed(0);
    } else {
      return 0;
    }
  };
  const rating1 = calRating(restaurantData?.reviews, 1);
  const rating2 = calRating(restaurantData?.reviews, 2);
  const rating3 = calRating(restaurantData?.reviews, 3);
  const rating4 = calRating(restaurantData?.reviews, 4);
  const rating5 = calRating(restaurantData?.reviews, 5);

  return (
    <div className="w-full bg-white  p-4 rounded-md  ">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="text-md font-semibold">
              {restaurantData?.reviews?.length}
              รีวิว
            </p>
            <p className="text-md font-ทก">
              {restaurantData?.reviews
                ? restaurantData.reviews.reduce((acc, el) => el.star + acc, 0)
                : 0}
              เรตติ้ง
            </p>
          </div>{" "}
          <div className="flex justify-center gap-2">
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="text-4xl font-extrabold">
                {restaurantData?.reviews && restaurantData?.reviews.length > 0
                  ? (
                      restaurantData?.reviews.reduce(
                        (acc, el) => el.star + acc,
                        0
                      ) / restaurantData?.reviews?.length
                    ).toFixed(1)
                  : 0}
              </div>
              <span className="text-xs">จาก 5</span>
            </div>

            <div className="flex justify-center w-1/2  flex-col">
              <ProgressBarStar star={"★★★★★"} progress={rating5} />
              <ProgressBarStar star={"★★★★☆"} progress={rating4} />
              <ProgressBarStar star={"★★★☆☆"} progress={rating3} />
              <ProgressBarStar star={"★★☆☆☆"} progress={rating2} />
              <ProgressBarStar star={"★☆☆☆☆"} progress={rating1} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 lg:gap-10 ">
              <div> ตัวกรอง</div>
              <div className="flex gap-1 text-sm">
                {rating &&
                  rating.map((el) => (
                    <RatingButton
                      key={el.id}
                      onClick={() => handleClickFilterRating(el.rating)}
                    >
                      {el.icon}
                    </RatingButton>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {reviewsRating && reviewsRating.length > 0 ? (
                reviewsRating.map((review) => (
                  <UserReviewCard key={review.id} review={review} />
                ))
              ) : reviewsRating && reviewsRating.length == 0 ? (
                <div className="flex flex-col p-2 border rounded-lg gap-2 bg-slate-50 text-center justify-center w-full">
                  ไม่มีรายการค้นหา
                </div>
              ) : restaurantData?.reviews &&
                restaurantData?.reviews.length > 0 ? (
                restaurantData?.reviews.map((review) => (
                  <UserReviewCard key={review.id} review={review} />
                ))
              ) : (
                <div className="flex flex-col p-2 border rounded-lg gap-2 bg-slate-50 text-center justify-center w-full">
                  ไม่มีรายการค้นหา
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
