import { rating as ratingConstant } from "../../constants/constant"
import { Link } from "react-router-dom"
export const UserReviewCard = ({ review }) => {
  const dateCreate = review?.createdAt ? review?.createdAt.split("T")[0] : null
  return (
    <div className="flex flex-col p-2 border rounded-lg gap-2 bg-slate-50">
      <div className="flex gap-4">
        <div className="flex rounded-full bg-gray-600 w-12 h-12  overflow-hidden">
          {review?.user?.imgProfile ? (
            <img src={review.user.imgProfile} />
          ) : (
            <img src="https://placehold.co/400" />
          )}
        </div>
        <div>
          <div>{review?.user?.name && review?.user?.name}</div>
          <div className="flex gap-2 text-sm">
            <Link
              to={`/profile/${review?.user?.id}`}
              className="hover:underline text-gray_secondary"
            >
              review count
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-1 h-20 gap-2">
        <div className="flex gap-2 text-xs">
          <div className="flex">
            {review?.star &&
              ratingConstant.find((el) => el.rating === review.star).icon}
          </div>
          <div className="flex items-end">{dateCreate}</div>
        </div>
        <div>{review.description}</div>
      </div>
    </div>
  )
}
