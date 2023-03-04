import { ThemeType, grommet } from "grommet";
import { Colors } from "grommet/themes/base";
import { deepMerge } from "grommet/utils";

const colorsEx = {
  // Azul
  primary: {
    c100: "#121B30",
    c200: "#2A3552",
    c300: "#3F4B63",
    c400: "#61687C",
  },
  // Cinza para bordas, disabled, etc.
  complementary: {
    c100: "#808185",
    c200: "#B2B2B8",
    c300: "#D7D7D7",
    c400: "#9FA1A7",
  },
  // Branco
  background: {
    c100: "#FDFDFD",
    c200: "#F5F6F8",
    c300: "#E0EAF0",
    c400: "#F2F3F8",
    c500: "#DDEAFA",
    c600: "#F0F0F4",
  },
  // Amarelo
  spotlight: {
    c100: "#FFC532",
    c200: "#FFD670",
    c300: "#FFEEC2",
    c400: "#FFF3D6",
  },
  font: {
    c100: "#121B30",
    c200: "#FDFDFD",
    c300: "#61687C",
    c400: "#808185",
    c500: "#AFAFAF",
    c600: "#FFC532",
  },
  stateDanger: "#E35141",
  stateLinks: "#0D47A1",
  stateSuccess: "#4CAF50",
  stateWarning: "#FFC532",
  gradientA1: "#121B30",
  gradientA2: "#3A3552",
  gradientB1: "#121B30",
  gradientB2: "#33415F",
  actionSave: "#4CAF50",
};

const colors: Colors = {
  primary: "#326e81",
  "dark-1": "#1e596a",
  "light-1": "#3C89A3",
  "background-back": {
    light: "#CACED2",
    dark: "#242C34",
  },
  secondary: "#CC8072",
  "dark-2": "#c36557",
  "light-2": "#c58076",
  "status-ok": "#4CAF50",
  "status-warning": "#FFC532",
  "status-error": "#FF2832",
  "status-critical": "#FF2832",
  "status-disabled": "#B2B2B8",
  backgrounds: {
    light: "#CACED2",
    dark: "#242C34",
  },
};

const globalTheme: ThemeType = deepMerge(grommet, {
  global: {
    active: {
      background: {
        light: "#CACED2",
        dark: "#242C34",
      },
      color: {
        light: "#000000",
        dark: "#FFF",
      },
    },
    colors,
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

export default globalTheme;
