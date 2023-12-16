import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const ProfileDataDesktopStyles = styled.div`

display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;



${({ theme }) => theme.mediaquery.tablet} {

    flex-direction: row;


}


`




export const ProfileDataDesktopElement = ({children}) => {
    const { theme } = useTheme()
  return (
    <ProfileDataDesktopStyles>{children}</ProfileDataDesktopStyles>
  )
}
