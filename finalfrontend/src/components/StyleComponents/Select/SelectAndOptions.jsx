import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const SelectAndOptionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.light};
  border-radius: ${({theme}) => theme.spacing(2.5)};
  width: 70%;
  padding: 20px;

  & label {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: ${({theme}) => theme.spacing(0.5)};
  }

  & select {
    width: 100%;
    box-sizing: border-box;
    height: 30px;
    border-radius: ${({theme}) => theme.spacing(0.5)};
    background-color:${({ theme }) => theme.palette.header};
    font-size: 15px;
  }

  & option {
    width: 100%;
    font-size: 15px;
  }
`;

export const SelectAndOptions = ({ children }) => {
  const { theme } = useTheme();
  return <SelectAndOptionsStyle theme={theme}>{children}</SelectAndOptionsStyle>;
};
