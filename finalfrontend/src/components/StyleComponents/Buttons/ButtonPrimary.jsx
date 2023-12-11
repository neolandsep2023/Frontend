import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonStyles = styled.button`
  background-color: ${({variant, theme}) =>
  variant == "normal" 
  ? theme.palette.button.light
: variant == "loading" 
&& theme.palette.button.dark};
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  margin: ${({theme})=>
  theme.spacing(1)};
  height: 38px;
  width: ${({ width }) => width };
      &:hover{
        cursor: pointer;
      };
`;

export const ButtonPrimary = ({ children, width, variant, onClick }) => {
    const theme = useTheme();
  return <ButtonStyles theme={theme} width={width} variant={variant} onClick={onClick}>{children}</ButtonStyles>;
};
