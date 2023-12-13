import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useThemeApp } from "../../../context/themeContext"

const ConnectButtonStyles = styled.button`
  border-radius: 15px;
  border: 2px solid ${({theme}) => theme.palette.border.main};
  width: 100%;
  aspect-ratio: 5/1;
  background-color:  ${({theme}) => theme.palette.button.mediumGreen};
  color: white;
  font-weight: 650;
  font-size: 1.9vw;
  letter-spacing: 1.1px;

  ${({ theme }) => theme.mediaquery.mobile} {
    width: 80%;
    aspect-ratio: 10/1
  }
`

export const ConnectButtonCustom = ({ children, onClick }) => {
  const { theme } = useTheme()

  return <ConnectButtonStyles onClick={onClick} theme = {theme} type="submit">{children}</ConnectButtonStyles>
}