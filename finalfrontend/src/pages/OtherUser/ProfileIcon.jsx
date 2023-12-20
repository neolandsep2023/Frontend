import { Link } from "react-router-dom"

export const ProfileIcon = ({className, data}) => {
  return (
    <Link to={`/user/${data.username}`}>
    <img className={className} src={data.image} alt={`${data.username} profile icon`}/>
  </Link>
  )
}
