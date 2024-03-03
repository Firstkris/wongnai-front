import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { useState } from "react"
import { userBookmark } from "../apis/user"
export const BookmarkIcon = ({ id }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleClickBookMark = async (e) => {
    try {
      e.stopPropagation()
      const response = await userBookmark(id)
      setIsBookmarked(response.data.bookmark)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div onClick={handleClickBookMark}>
      {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
    </div>
  )
}
