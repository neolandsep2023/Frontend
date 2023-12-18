import { useLocation } from "react-router-dom"

export const useIsAuthor = (user, id, navigate) => {
    const route = useLocation();
    console.log(route)
}