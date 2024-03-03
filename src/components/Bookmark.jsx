import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { useState } from "react"
export const BookmarkIcon = () => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return isBookmarked ? (
    <FaBookmark onClick={() => setIsBookmarked(!isBookmarked)} />
  ) : (
    <FaRegBookmark onClick={() => setIsBookmarked(!isBookmarked)} />
  )
}
