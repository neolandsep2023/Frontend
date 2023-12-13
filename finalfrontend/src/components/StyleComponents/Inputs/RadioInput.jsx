
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";


const RadioInputStyles = styled.div`
display: flex;
    align-items: center;
    justify-content: space-evenly;
  margin: ${({margin}) => margin ? margin : 0};
  width: 70%;
  gap: 2px;

  & label{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    min-width: ${({minW})=> minW ? minW : "45%"};
    height: 30px;
    font-weight: 500;
    border: 1px solid black;
    background-color: ${({theme}) => theme.palette.form.light};
    border-radius: 3px;
  }
& input[type="radio"]{
    display: none;
  
}
& input[type="radio"]:checked + label{
background-color: ${({theme}) => theme.palette.button.main};
border-radius: ${({theme}) => theme.spacing(1.5)};
border: 2px solid ${({theme}) => theme.palette.button.dark};
}

`




export const RadioInput = ({children, margin, minW}) => {

const { theme } = useTheme()  

  return (
    <RadioInputStyles margin={margin} theme={theme} minW={minW}>{children}</RadioInputStyles>
  )
}
