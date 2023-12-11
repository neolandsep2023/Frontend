import { spacing } from "./utils";

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};

const PALETTE_COLOR_LIGHT = {
  // background: "#fffafa",
  // header: "#fcf6f6" ,
  // enhanced: "#ffffff" ,
  // form: "#ffffff",
  background: "#ffffff",
  header: "#f9f9f9" ,
  enhanced: "#72cc89", //? puesto por mario
  form: "#f5f5f5",
  textColor: "#1e1e1e",
  button: "#8effab",
  secondButton: "#72cc89" ,
  buttonLoading: "#396644" ,
  border: "#f1f1f1",
  shadow: "rgba(43,117,60,0.7)" //? puesto por mario
};

const PALETTE_COLOR_DARK = {
    background: "#202124",
    header: "#2a2b2e" ,
    enhanced: "#396644" , //? puesto por mario
    form: "#35363a",
    textColor: "#ffffff",
    button: "#8effab",
    secondButton: "#bbffcd" ,
    buttonLoading: "#396644" ,
    border: "#2a2b2e",
    shadow: "rgba(187,255,205,0.27)", //? puesto por mario
};

export const themeLight = {
  palette: {
    background: {
      main: PALETTE_COLOR_LIGHT.background,
    },
    header: {
        main: PALETTE_COLOR_LIGHT.header,  
      },
      enhanced: {
        main: PALETTE_COLOR_LIGHT.enhanced,
      },
      form: {
        main: PALETTE_COLOR_LIGHT.form,
      },
    textColor: {
      main: PALETTE_COLOR_LIGHT.textColor,
    },
    button: {
      main: PALETTE_COLOR_LIGHT.secondButton,
      light: PALETTE_COLOR_LIGHT.button,
      dark: PALETTE_COLOR_LIGHT.buttonLoading,
    },
    border: {
      main: PALETTE_COLOR_LIGHT.border,
    },
    shadow: {
      main: PALETTE_COLOR_LIGHT.shadow
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.laptop}px)`,
    laptop: `@media (min-width: ${BREAKPOINTS.laptop}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/Poppins-Bold.ttf",
      italic: "/assets/fonts/Poppins-Italic.ttf",
      regular: "/assets/fonts/Poppins-Regular.ttf",
      semibold: "/assets/fonts/Poppins-SemiBold.ttf",
    },
  },
  spacing,
};

export const themeDark = {
    palette: {
        background: {
          main: PALETTE_COLOR_DARK.background,
        },
        header: {
            main: PALETTE_COLOR_DARK.header,  
          },
          enhanced: {
            main: PALETTE_COLOR_DARK.enhanced,
          },
          form: {
            main: PALETTE_COLOR_DARK.form,
          },
        textColor: {
          main: PALETTE_COLOR_DARK.textColor,
        },
        button: {
          main: PALETTE_COLOR_DARK.secondButton,
          light: PALETTE_COLOR_DARK.button,
          dark: PALETTE_COLOR_DARK.buttonLoading,
        },
        border: {
          main: PALETTE_COLOR_DARK.border,
        },
        shadow: {
          main: PALETTE_COLOR_DARK.shadow
        },
      },
      mediaquery: {
        mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
        tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.laptop}px)`,
        laptop: `@media (min-width: ${BREAKPOINTS.laptop}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
        desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
      },
      typography: {
        fonts: {
          bold: "/assets/fonts/Poppins-Bold.ttf",
          italic: "/assets/fonts/Poppins-Italic.ttf",
          regular: "/assets/fonts/Poppins-Regular.ttf",
          semibold: "/assets/fonts/Poppins-SemiBold.ttf",
        },
      },
      spacing,
};
