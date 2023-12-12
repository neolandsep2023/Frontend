import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const FormStyle = styled.form`
background-color: ${({theme}) => theme.palette.form.main};
color: ${({theme}) => theme.palette.textColor.main};
border-radius:${({theme}) => theme.spacing(3)};
border: ${({theme}) => theme.spacing(0.1)} solid ${({theme}) => theme.palette.border.main};
width: ${({width})=> width};
height: ${({height})=> height ? height : "fit-content"};
& input{
    /* width: 70%; */
    height: ${({theme}) => theme.spacing(3.5)};
}
&textarea {
width: 100%;
}
${({theme}) => theme.mediaquery.mobile}{
    display: flex;
    flex-direction: column;
    width: 95vw;
}


${({theme}) => theme.mediaquery.tablet}{
  width: 60vw;
  height: fit-content;
}
`



export const Form = ({children, width, height, onSubmit}) => {
const { theme } = useTheme()

  return (
    <FormStyle theme={theme} width={width} height={height} onSubmit={onSubmit}>{children}</FormStyle>
  )
}
