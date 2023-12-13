import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomById } from "../../services/room.service";
import { FlexDir } from "../../components/StyleComponents";
import { ByIdImageCustom } from "../../components/StyleComponents/Images/ImageById";

export const RoomById = () => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();

  //! ---------- Destructuring ----------
  const { id } = useParams();
  let roomData

  const fetchRoom = async () => {
    setRes(await getRoomById(id))
  }

  useEffect(() => {
    fetchRoom()
  }, [])

  return (
    <>
      {res && 
      <FlexDir minHeight="100vh" direction="column">
        <h1>{res?.data?.title}</h1>
        <FlexDir direction="row">
          <FlexDir width="40vw">
            <ByIdImageCustom src={res?.data?.image} alt={res?.data?.title}/>
          </FlexDir>
          <FlexDir>
            <ul>
              <li>{res?.data?.type}</li>
              <li>{res?.data?.surface}</li>
              <li>{res?.data?.province}, {res?.data?.publicLocation}</li>
              <li>{res?.data?.exterior && "Exterior Room"}</li>
              {/* <li>{res?.data?.}</li> */}
            </ul>
          </FlexDir>
        </FlexDir>
      </FlexDir>
      }
    </>
  )
}