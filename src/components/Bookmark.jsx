import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { useState, useEffect } from "react"
import { userBookmark } from "../apis/user"
export const BookmarkIcon = ({ restaurant }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  console.log(isBookmarked)
  let debounceTimeout
  // second render state be set
  useEffect(() => {
    console.log("click", restaurant.id, restaurant.bookmarks)
    setIsBookmarked(
      restaurant.bookmarks
        ? restaurant.bookmarks?.length == 0
          ? false
          : true
        : false
    )
  }, [restaurant.bookmarks])

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimeout) //clear timeout
    }
  }, [])
  const handleClickBookMark = async (e) => {
    try {
      e.stopPropagation()
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
      debounceTimeout = setTimeout(async () => {
        const response = await userBookmark(restaurant.id)
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
