import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-items: center;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "no-wrap")};
  gap: ${({ gap, theme }) => (gap ? gap : theme.spacing(1.5))};
  margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  padding: ${({ padding, theme }) => (padding ? padding : theme.spacing(0))};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};

  ${({ theme }) => theme.mediaquery.laptop} {
    /* flex-direction: ${({ mediaqueryDir, direction }) =>
      mediaqueryDir ? mediaqueryDir : direction}; */
  }

  ${({ theme }) => theme.mediaquery.tablet} {
    flex-direction: ${({ mediaqueryDirTablet, direction }) =>
    mediaqueryDirTablet ? mediaqueryDirTablet : direction};
    width: ${({ mediaqueryWidthTablet, width }) =>
    mediaqueryWidthTablet ? mediaqueryWidthTablet : width};
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    flex-direction: ${({ mediaqueryDirMobile, direction }) =>
      mediaqueryDirMobile ? mediaqueryDirMobile : direction};
    width: ${({ mediaqueryWidthMobile, width }) =>
      mediaqueryWidthMobile ? mediaqueryWidthMobile : width};
    margin: ${({mediaqueryMarginMobile, margin}) => mediaqueryMarginMobile ? mediaqueryMarginMobile : margin}
  }
`;

export const FlexDir = ({
  children,
  direction,
  mediaqueryDir,
  gap,
  height,
  width,
  margin,
  padding,
  mediaqueryWidthTablet,
  mediaqueryWidthMobile,
  wrap,
  minHeight,
  mediaqueryDirMobile,
  mediaqueryDirTablet,
  mediaqueryMarginMobile,
}) => {
  const { theme } = useTheme();

  return (
    <FlexStyle
      minHeight={minHeight}
      wrap={wrap}
      theme={theme}
      mediaqueryWidthTablet={mediaqueryWidthTablet}
      mediaqueryWidthMobile={mediaqueryWidthMobile}
      padding={padding}
      width={width}
      height={height}
      gap={gap}
      margin={margin}
      direction={direction}
      mediaqueryDir={mediaqueryDir}
      mediaqueryDirTablet={mediaqueryDirTablet}
      mediaqueryDirMobile={mediaqueryDirMobile}
      mediaqueryMarginMobile={mediaqueryMarginMobile}
    >
      {children}
    </FlexStyle>
  );
};
