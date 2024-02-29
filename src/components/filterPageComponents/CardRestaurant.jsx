import { BookmarkIcon } from "../Bookmark"
import { Link } from "react-router-dom"
export const CardRestaurant = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg w-full ">
      need to fix width
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="w-24 rounded-md overflow-hidden border border-gray_primary"
          >
            {index <= 6 && (
              <img
                src={`https://picsum.photos/200/200?random=${index}`}
                alt={`Image ${index}`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div>
          <Link
            to="/restaurants/filter"
            className="font-semibold gap-2 flex items-baseline"
          >
            <span className="text-xl font-semibold">Restaurants</span>
            <span className="text-gray_secondary text-md font-semibold">
              Lorem
            </span>
          </Link>
          <div className="flex gap-2">
            <span>review rate</span>
            <span> 2 รีวิว</span>
            <span>฿฿฿</span>
            <span>ปิดอยู่</span>
          </div>
          <div>Facility</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="justify-end flex">
            <BookmarkIcon />
          </div>
          <div>4.7 กม.</div>
        </div>
      </div>
    </div>
  )
}
