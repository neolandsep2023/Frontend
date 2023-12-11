import styled from "@emotion/styled";

const SearchImageStyle = styled.img`
  height: 450px;
  aspect-ratio: 6/20;
  border-radius: 50px;
  /* border: 2px solid #396644; */
  object-fit: cover;
  margin-top: ${({marginTop}) => marginTop ? marginTop : "auto"};
`

export const SearchImgCustom = ({ src, marginTop }) => {

  return (
    <SearchImageStyle marginTop = {marginTop} src={src}/>
  )
}