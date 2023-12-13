import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const ByIdImageStyle = styled.img`
  width: 100%;
  aspect-ratio: 1.5/1;
  border-radius: 7px;
  object-fit: cover;
  margin-top: ${({marginTop}) => marginTop ? marginTop : "auto"};

  ${({ theme }) => theme.mediaquery.tablet} {
    width: 10vw;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    width: 13vw
  }
`

export const ByIdImageCustom = ({ src, marginTop }) => {
  const { theme } = useTheme()
  return (
    <ByIdImageStyle theme={theme} marginTop = {marginTop} src={src}/>
  )
}