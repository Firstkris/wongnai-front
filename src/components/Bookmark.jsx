import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { useState, useEffect } from "react"
import { userBookmark } from "../apis/user"
export const BookmarkIcon = ({ restaurant }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  console.log(isBookmarked)
  // second render state be set
  useEffect(() => {
    setIsBookmarked(
      restaurant.bookmarks
        ? restaurant.bookmarks?.length == 0
          ? false
          : true
        : false
    )
  }, [restaurant.bookmarks])
  const handleClickBookMark = async (e) => {
    try {
      e.stopPropagation()
      console.log(restaurant.id)
      const response = await userBookmark(restaurant.id)
      setIsBookmarked(response.data?.bookmark)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div onClick={handleClickBookMark}>
      {!isBookmarked ? (
        <>
          {/* //false empty bookmark */}
          <FaRegBookmark />
        </>
      ) : (
        <FaBookmark />
      )}
    </div>
  )
}
