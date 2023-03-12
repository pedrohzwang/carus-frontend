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
  actionSave: "#4CAF50",
};

const colors: CarUsColorsTheme = {
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

export interface CarUsTheme extends ThemeType {
  colors: CarUsColorsTheme;
}

interface CarUsColorsTheme {
  primary: CarUsColorsVariantTheme;
  secondary: CarUsColorsVariantTheme;
  complementary?: CarUsComplementaryColorsVariantTheme;
  background: CarUsColorModeVariantTheme;
  spotlight?: CarUsColorsVariantTheme;
  font: CarUsColorModeVariantTheme;
  stateDanger: string;
  stateError: string;
  stateLinks: string;
  stateWarning: string;
  stateSuccess: string;
  actionSave: string;
  stateDisabled: string;
}

interface CarUsColorsVariantTheme {
  c100: string;
  c200: string;
  c300?: string;
  c400?: string;
}

interface CarUsComplementaryColorsVariantTheme {
  black: CarUsColorsVariantTheme;
  white: CarUsColorsVariantTheme;
}

interface CarUsColorModeVariantTheme {
  light: CarUsColorsVariantTheme;
  dark: CarUsColorsVariantTheme;
}

const globalTheme: CarUsTheme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  colors,
};

export default globalTheme;
