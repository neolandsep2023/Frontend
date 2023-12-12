import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const SearchImageStyle = styled.img`
  width: 15vh;
  aspect-ratio: 6/20;
  border-radius: 50px;
  object-fit: cover;
  margin-top: ${({marginTop}) => marginTop ? marginTop : "auto"};

  ${({ theme }) => theme.mediaquery.tablet} {
    width: 10vw;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    width: 13vw
  }
`

export const SearchImgCustom = ({ src, marginTop }) => {
  const { theme } = useTheme()
  return (
    <SearchImageStyle marginTop = {marginTop} src={src}/>
  )
}