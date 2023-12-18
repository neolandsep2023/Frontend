
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const MiniPostProfileStyles = styled.div`
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;



  background-color: ${({ theme }) => theme.palette.background.main};
  border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main};
  border-radius: ${({ theme }) => theme.spacing(1.5)};
 

  margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1.5))};

  
  & img {
    width: 43%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
    border: ${({ theme }) => theme.spacing(0.5)} solid
      ${({ theme }) => theme.palette.border.main};
  }

& .type{
  color: ${({ theme }) => theme.palette.button.mediumGreen}
}


  & p,
  h3,
  h4 {
    margin: 0;
  }

  & p {
    max-height: 70%;
    max-width: 100%;
    font-size: 16px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* white-space: nowrap; */
    overflow: hidden;
  }
  & h3 {
    height: 30%;
    font-size: 20px;
    align-self: center;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* white-space: nowrap; */
    overflow: hidden;
  }

  ${({ theme }) => theme.mediaquery.bigScreen} {
    width: 48%;
    height: 65%;
    & img {
      width: 25%;
    }

    & p {
      max-height: 70%;
      max-width: 100%;
      font-size: 13px;
    }
    & h3 {
      height: 30%;
      font-size: 15px;
    }

    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
}


  ${({ theme }) => theme.mediaquery.dektop} {
  
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.laptop} {
    height: 75%;

    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.tablet} {
    width: 48%;
    min-height: 45%;
    & img {
      width: 30%;
    }

    & p {
      max-height: 70%;
      max-width: 100%;
      font-size: 13px;
    }
    & h3 {
      height: 30%;
      font-size: 15px;
    }

    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
    width: 90vw;
    height: 60vh;

    & img {
      width: 70%;
    }

    & p {
      max-height: 70%;
      max-width: 100%;
      font-size: 16px;
    }
    & h3 {
      height: 30%;
      font-size: 18px;
    }
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
    width: 90vw;
    height: 80vh;

    & img {
      width: 70%;
    }

    & p {
      max-height: 70%;
      max-width: 100%;
      font-size: 16px;
    }
    & h3 {
      height: 30%;
      font-size: 18px;
    }
  }
`;




export const MiniPostProfileElement = ({children}) => {
    const { theme } = useTheme();


  return (
    <MiniPostProfileStyles theme={theme}>{children}</MiniPostProfileStyles>
  )
}
