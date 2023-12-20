import React from "react";
import styled from "@emotion/styled";

const StyledHeaderSmall = styled.div`
  .zonaMobile {
  background-color: rgba(37, 37, 37, 0.582);
  position: absolute;
  top: 12vh;
  width: 100%;
  min-height: 160vh;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  animation: slideInFromLeft .5s ease-in-out;

}
@keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

.imgDark {

  border-radius: 50%;
  width: 50px;
  height: 50px;

}

.navMobile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0px 0px 10px 10px;
  z-index: 10;
  position: relative;
  width: 60vw;
}

.headerSmall {
  background-color: #2a2b2e;
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
 
}
.logoS {
  width: 30%;
  min-width: 200px;
  max-width: 300px;
 
}
.smallUno {
  background-color: #2a2b2e;
width: 100%;
  display: flex;
  
  color: rgb(74, 206, 130);
  justify-content: space-around;
  align-items: center;
  gap: 2vw;
  padding: 0 20px;
  min-height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.267);
}

.hamburguesa {
  background-color: #2a2b2e;
  border: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.hamburguesa span {
  font-size: 50px;
}

.figureNav {
  margin: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(61, 60, 60);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  border-bottom: 2px solid black;
  padding: 0px 20px 5px 5px;
  transition: transform 0.3s ease, color 0.3s ease
}
.figureNav span,
.figureNav a {
  background-color: rgb(78, 77, 77);
  color: rgb(74, 206, 130);
  font-weight: bold;
  text-decoration: none;
  border-radius: 0px 0px 10px 0px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
}
.figureNav:hover {
  background-color: rgb(74, 206, 130);
  color: rgb(78, 77, 77);
  transform: translateX(10px)
}
.figureNav span {
  font-size: 50px;
  width: 50px;
  height: 50px;
  border-radius: 0px 0px 0px 10px;
}
.buttonHeader{
    border-radius: 5px;
    border: 2px solid rgb(74, 206, 130) ;
    font-weight: 600;
    min-width: 60px;
    cursor: pointer;
}
.imgDark:hover{
  color: white;
  background-color: rgb(74, 206, 130);
  cursor: pointer;
}

body.light .zonaMobile{
    background-color: #ffffff60;
 
  }
body.light .figureNav{
    background-color: #d1ddd0;
 
  }
body.light .figureNav:hover{
    background-color: #99d893;
 
  }
body.light .figureNav a{
    background-color: rgb(181, 214, 195);
    color: black;
 
  }
body.light .figureNav span{
    background-color: rgb(181, 214, 195);
    color: black;
 
  }
 
body.light .smallUno {
    background-color: #f0f9f3;
 
  }
body.light .headerSmall{
  
    background-color: #f0f9f3;
 
  }
body.light .hamburguesa{
    
    background-color: #f0f9f3;
 
  }

`;

export const HeaderSmallElement = ({ children }) => {
  return <StyledHeaderSmall>{children}</StyledHeaderSmall>;
};
