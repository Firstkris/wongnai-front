import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { useState, useEffect } from "react"
import { userBookmark } from "../apis/user"
import { useParams } from "react-router-dom"

export const BookmarkIcon = ({ restaurant }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const { id } = useParams()

  let debounceTimeout
  // second render state be set
  useEffect(() => {
    setIsBookmarked(
      restaurant?.bookmarks
        ? restaurant?.bookmarks?.length == 0
          ? false
          : true
        : false
    )
    return () => {
      clearTimeout(debounceTimeout) //clear timeout
    }
  }, [restaurant?.bookmarks])

  const handleClickBookMark = async (e) => {
    try {
      e.stopPropagation()
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
      debounceTimeout = setTimeout(async () => {
        const restaurantId = restaurant?.id || parseInt(id)
        const response = await userBookmark(restaurantId)
        setIsBookmarked(response.data?.bookmark)
      }, 500)
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
