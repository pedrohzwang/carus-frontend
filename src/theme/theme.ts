import { responsiveBreakpoints } from "./breakpoints";
import { CarUsColorsTheme, CarUsTheme } from "./theme.type";

export const colors: CarUsColorsTheme = {
  primary: {
    c100: "#1E596A",
    c200: "#326E81",
    c300: "#3C89A3",
    c400: "#449ABA",
  },
  secondary: {
    c100: "#C36557",
    c200: "#CC8072",
  },
  background: {
    light: {
      c100: "#CACED2",
      c200: "#EAEEF2",
    },
    dark: {
      c100: "#242C34",
      c200: "#2C3742",
    },
  },
  font: {
    light: {
      c100: "#E7E7E7",
      c200: "#FFFFFF",
    },
    dark: {
      c100: "#000000",
      c200: "#151515",
    },
  },
  complementary: {
    black: {
      c100: "#000000",
      c200: "#151515",
    },
    white: {
      c100: "#E7E7E7",
      c200: "#FFFFFF",
    },
  },
  stateDanger: "#B5373D",
  stateError: "#F12832",
  stateLinks: "#1C3A8E",
  stateWarning: "#FFC532",
  stateSuccess: "#4CAF50",
  actionSave: "#4CAF50",
  stateDisabled: "#B2B2B8",
};

const globalTheme: CarUsTheme = {
  global: {
    breakpoints: responsiveBreakpoints,
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  colors,
};

export default globalTheme;
