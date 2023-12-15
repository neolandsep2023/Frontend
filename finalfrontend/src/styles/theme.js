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
  background: "#ffffff",
  header: "#f9f9f9",
  header1: '#f0f9f3',
  enhanced: "#72cc89", //? puesto por mario
  form: "#f5f5f5",
  lighterForm: "#d3d7db",
  textColor: "#1e1e1e",
  secondTextColor: "#2a2b2e",
  greenTextColor: "#72cc89",
  border: "#dadde0",
  shadow: "rgba(43,117,60,0.7)", //? puesto por mario
  ultraLightGreen: "#d4efdb",
  lightGreen: "#8effab",
  mediumLightGreen: "#97f6a8",
  mediumGreen: "#72cc89",
  mediumGreenOpaco: "#72cc8999",
  darkishGreen: "#4ead66",
  darkGreen: "#396644",
  ultraDarkGreen: "#2a2f2b",
  cardBackground: "#ddffe6",
};

const PALETTE_COLOR_DARK = {
  background: "#202124",
  header: "#2a2b2e",
  header1: '#16281b',
  enhanced: "#396644", //? puesto por mario
  form: "#35363a",
  lighterForm: "#62676c",
  textColor: "#ffffff",
  secondTextColor: "#f9f9f9",
  greenTextColor: "#72cc89",
  border: "#535459",
  shadow: "rgba(187,255,205,0.27)", //? puesto por mario
  ultraLightGreen: "#d4efdb",
  lightGreen: "#8effab",
  mediumLightGreen: "#97f6a8",
  mediumGreen: "#72cc89",
  mediumGreenOpaco: "#72cc8999",
  darkishGreen: "#4ead66",
  darkGreen: "#396644",
  ultraDarkGreen: "#2a2f2b",
  cardBackground: "#ddffe6",
};

export const themeLight = {
  palette: {
    background: {
      light: PALETTE_COLOR_LIGHT.ultraLightGreen,
      main: PALETTE_COLOR_LIGHT.background,
      dark: PALETTE_COLOR_LIGHT.ultraDarkGreen,
    },
    header: {
      main: PALETTE_COLOR_LIGHT.header,
      try:  PALETTE_COLOR_LIGHT.header1,
    },
    enhanced: {
      main: PALETTE_COLOR_LIGHT.enhanced,
    },
    form: {
      main: PALETTE_COLOR_LIGHT.form,
      light: PALETTE_COLOR_LIGHT.lighterForm,
    },
    textColor: {
      main: PALETTE_COLOR_LIGHT.textColor,
    },
    greenTextColor: {
      main: PALETTE_COLOR_LIGHT.mediumLightGreen,
    },
    button: {
      main: PALETTE_COLOR_LIGHT.mediumLightGreen,
      light: PALETTE_COLOR_LIGHT.mediumLightGreen,
      dark: PALETTE_COLOR_LIGHT.darkGreen,
      mediumGreen: PALETTE_COLOR_LIGHT.mediumGreen,
      mediumGreenOpaco: PALETTE_COLOR_LIGHT.mediumGreenOpaco,
    },
    border: {
      main: PALETTE_COLOR_LIGHT.border,
    },
    shadow: {
      main: PALETTE_COLOR_LIGHT.shadow,
    },
    cardBackground: {
      main: PALETTE_COLOR_LIGHT.cardBackground
    },
    anchor: {
      main: PALETTE_COLOR_LIGHT.darkishGreen,
    }

  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.laptop}px)`,
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
      light: PALETTE_COLOR_DARK.ultraDarkGreen,
      main: PALETTE_COLOR_DARK.background,
      dark: PALETTE_COLOR_DARK.ultraLightGreen,
    },
    header: {
      main: PALETTE_COLOR_DARK.header,
      try:  PALETTE_COLOR_DARK.header,

    },
    enhanced: {
      main: PALETTE_COLOR_DARK.enhanced,
    },
    form: {
      main: PALETTE_COLOR_DARK.form,
      light: PALETTE_COLOR_DARK.lighterForm,
    },
    textColor: {
      main: PALETTE_COLOR_DARK.textColor,
    },
    greenTextColor: {
      main: PALETTE_COLOR_DARK.lightGreen,
    },
    button: {
      main: PALETTE_COLOR_DARK.mediumGreen,
      light: PALETTE_COLOR_DARK.lightGreen,
      dark: PALETTE_COLOR_DARK.darkGreen,
      mediumGreen: PALETTE_COLOR_DARK.mediumGreen,
      mediumGreenOpaco: PALETTE_COLOR_DARK.mediumGreenOpaco,
    },
    border: {
      main: PALETTE_COLOR_DARK.border,
    },
    shadow: {
      main: PALETTE_COLOR_DARK.shadow,
    },
    cardBackground: {
      main: PALETTE_COLOR_DARK.cardBackground
    },
    anchor: {
      main: PALETTE_COLOR_DARK.mediumGreen,
    }
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.laptop}px)`,
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
