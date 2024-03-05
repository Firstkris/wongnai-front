import React from "react";
import BookmarkItem from "./BookmarkItem";

export default function BookmarkList({ bookmarks }) {
  //   const [bookmarks, setBookmarks] = useState({});

  //   useEffect(() => {
  //     userApi
  //       .getUserById(userId)
  //       .then((res) => {
  //         setBookmarks(res.data.bookmarks);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div>
      {bookmarks.map((bookmark) => (
        <BookmarkItem key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
}
