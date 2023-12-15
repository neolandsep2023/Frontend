import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonStyles = styled.button`
  background-color: ${({variant, theme}) =>
  variant == "normal" 
  ? theme.palette.button.light
: variant == "loading" 
&& theme.palette.button.dark};
  color: ${({variant,theme}) => variant == "loading" && theme.palette.button.mediumGreen };
  border-radius: 5px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  margin: ${({margin, theme})=> margin ? margin :
  theme.spacing(1)};
  height: 38px;
  width: ${({ width }) => width };
      &:hover{
        cursor: pointer;
        transform: scale(1.01)
      };
`;

export const ButtonPrimary = ({ children, width, variant, onClick, margin }) => {
    const theme = useTheme();
  return <ButtonStyles theme={theme} width={width} variant={variant} onClick={onClick} margin={margin}>{children}</ButtonStyles>;
};
