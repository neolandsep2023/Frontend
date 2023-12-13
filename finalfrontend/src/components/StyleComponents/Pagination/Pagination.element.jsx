import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"


const PaginacionStyle= styled.button`
color: ${({ theme }) => theme.palette.textColor.main};
border: none;
width: 40px;
height: 40px;
font-size: 16px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
/* border: ${({ theme }) => theme.spacing(0.1)} solid
    ${({ theme }) => theme.palette.border.main}; */
    border-radius: 4px;
background-color: ${({variant, theme}) =>
  variant == "normal" 
  ? theme.palette.form.main :
  variant == "disabled" 
  ? theme.palette.form.main
: variant == "clicked" 
&& theme.palette.button.mediumGreen};

&:hover{
  border: ${({ variant , theme}) => 
  variant == "normal" && `2px solid ${theme.palette.form.light}` }; 
  
/*   */
}



`


export const Pagination = ({children, onClick, variant}) => {
  const { theme } = useTheme();

  return (
    <PaginacionStyle theme={theme} onClick={onClick} variant={variant}>{children}
</PaginacionStyle>

)
}














{/* <ul class="page">
    <li class="page__btn"><span class="material-symbols-outlined">chevron_left</span></li>
    <li class="page__numbers"> 1</li>
    <li class="page__numbers">2</li>
    <li class="page__numbers">3</li>
    <li class="page__numbers">4</li>

    <li class="page__dots">...</li>
    <li class="page__numbers"> 10</li>
    <li class="page__btn"><span class="material-symbols-outlined">
chevron_right
</span></li>
  </ul> */}



    

/* 
ul {
  list-style-type: none;
}


.item {
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--greyDark);
  cursor: pointer;

  span {
    box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
    border-radius: 0.6rem;
    padding: 2rem;
    font-size: 3rem;
    transition: all 0.3s ease;
  }

  &:hover {
    span {
      transform: scale(1.2);
      color: var(--primary);
    }
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: var(--greyLight);
  }
}

  .page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)};
  border-radius: 0.6rem;


  &__numbers,
  &__btn,
  &__dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({ theme }) => theme.spacing(1)};
    font-size: 1.4rem;
    cursor: pointer;
  }

  &__dots {
    width: ${({ theme }) => theme.spacing(3)};
    color: grey;
    cursor: initial;
  }

  &__numbers {
    width: ${({ theme }) => theme.spacing(3)};
    border-radius: 0.4rem;

    &:hover {
      background-color: ${({theme}) => theme.palette.button.mediumGreen};
      width: ${({ theme }) => theme.spacing(3)};
    }

    &.active {
      color: #ffffff;
      background: ${({theme}) => theme.palette.button.mediumGreen};
      font-weight: 600;
      border: 1px solid var(--primary);
    }
  }

  &__btn {
    color: var(--greyLight);
    pointer-events: none;

    &.active {
      color: var(--greyDark);
      pointer-events: initial;

      &:hover {
        color: var(--primary);
      }
    }
  }
 } */

