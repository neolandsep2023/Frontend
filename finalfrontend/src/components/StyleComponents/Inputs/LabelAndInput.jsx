import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const LabelAndInputStyle = styled.div`

display: flex;
    flex-direction: column;
    align-items: ${({alignItems}) => alignItems ? alignItems : "flex-start"} ;
    justify-content: center;
width: ${({parentWidth}) => parentWidth ? parentWidth : '70%'};
& input{
  width: 100%;
}

`


export const LabelAndInput = ({children, alignItems, parentWidth}) => {
  const { theme } = useTheme()
  return (
    <LabelAndInputStyle theme={theme} alignItems={alignItems} parentWidth={parentWidth}>{children}</LabelAndInputStyle>
  )
}
