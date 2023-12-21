import styled from "@emotion/styled"


const WarningElementStyled=styled.div`
gap: 8px;
display: flex;
align-items: center;
justify-content: center;
width: 70%;
border: 2px solid red;
border-radius: 10px;
padding: 4px;
font-size: 20px;

& .material-symbols-outlined{
color: red;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

& span{
    font-weight: 600;
}



`

export const WarningElement = ({children}) => {
  return (
    <WarningElementStyled>
        <span className="material-symbols-outlined">
fmd_bad
</span>
        {children}
        </WarningElementStyled>
  )
}
