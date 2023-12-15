import { useEffect, useState } from "react"
import { getAllComments } from "../../services/comment.service";
import { createRoutesFromChildren } from "react-router-dom";
import { AppCarouselReview } from "../Carousel/ReviewsCarousel";
import { Rating } from "@mui/material";

export const RoomReview = ({roomId}) => {
  // console.log(roomId)
  //! ---------- Estados ----------
  const [res, setRes] = useState();

  //! ---------- Destructuring ----------

  const fetchReviews = async () => {
    setRes(await getAllComments(roomId))
    setRes(await getAllComments(roomId))
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <>
      {res &&
      <div>
          <AppCarouselReview comments = {res?.data}/>
      </div>}
    </>
  )
}