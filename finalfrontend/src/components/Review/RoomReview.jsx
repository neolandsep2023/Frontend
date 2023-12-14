import { useEffect, useState } from "react"
import { getAllComments } from "../../services/comment.service";

export const RoomReview = () => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();

  //! ---------- Destructuring ----------

  const fetchReviews = async () => {
    setRes(await getAllComments())
  }

  useEffect(() => {
    fetchReviews()

    if (res.status == 200) {
      
    }
  }, [])

  return (
    <>
      {res && 
      <div>
      </div>}
    </>
  )
}