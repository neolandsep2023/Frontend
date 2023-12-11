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
  height: 35px;
  width: ${({ size }) =>
    size == "large"
      ? "180px"
      : size == "medium"
      ? "150px"
      : size == "small" && "120px"};
      &:hover{
        cursor: pointer;
      };
`;

export const ButtonPrimary = ({ children, size, variant, onClick }) => {
    const theme = useTheme();
  return <ButtonStyles theme={theme} size={size} variant={variant} onClick={onClick}>{children}</ButtonStyles>;
};
