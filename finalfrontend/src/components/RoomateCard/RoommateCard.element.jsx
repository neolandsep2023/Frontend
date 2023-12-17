import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const RoommateCardStyles = styled.div`
  
`

export const RoommateCardStyle = ({children}) => {
  const { theme } = useTheme()

  return <RoommateCardStyles theme={theme}>{children}</RoommateCardStyles>
}