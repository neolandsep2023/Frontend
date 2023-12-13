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
  height: ${({inputHeight}) => inputHeight ? inputHeight: 'auto'};
  flex-wrap: wrap
}

& textarea{
  width: 100%;
  height: ${({inputHeight}) => inputHeight ? inputHeight: 'auto'};

}

`

export const LabelAndInput = ({children, alignItems, parentWidth, inputHeight}) => {
  const { theme } = useTheme()
  return (
    <LabelAndInputStyle theme={theme} alignItems={alignItems} parentWidth={parentWidth} inputHeight={inputHeight}>{children}</LabelAndInputStyle>
  )
}
