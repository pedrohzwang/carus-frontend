import { responsiveBreakpoints } from "./breakpoints";
// import { CarUsColorsTheme, CarUsTheme } from "./theme.type";
import { MantineThemeOverride } from "@mantine/core";

// export const colors: CarUsColorsTheme = {
//   primary: {
//     c100: "#1E596A",
//     c200: "#326E81",
//     c300: "#3C89A3",
//     c400: "#449ABA",
//   },
//   secondary: {
//     c100: "#C36557",
//     c200: "#CC8072",
//   },
//   background: {
//     light: {
//       c100: "#CACED2",
//       c200: "#EAEEF2",
//     },
//     dark: {
//       c100: "#242C34",
//       c200: "#2C3742",
//     },
//   },
//   font: {
//     light: {
//       c100: "#E7E7E7",
//       c200: "#FFFFFF",
//     },
//     dark: {
//       c100: "#000000",
//       c200: "#151515",
//     },
//   },
//   complementary: {
//     black: {
//       c100: "#000000",
//       c200: "#151515",
//     },
//     white: {
//       c100: "#E7E7E7",
//       c200: "#FFFFFF",
//     },
//   },
//   stateDanger: "#B5373D",
//   stateError: "#F12832",
//   stateLinks: "#1C3A8E",
//   stateWarning: "#FFC532",
//   stateSuccess: "#4CAF50",
//   actionSave: "#4CAF50",
//   stateDisabled: "#B2B2B8",
// };

// Based on MantineUI Theme
export const carUsDarkTheme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    brand: [
      "#AC3FD9",
      "#9226C0",
      "#BE69E2",
      "#721D96",
      "#D194EC",
      "#51136C",
      "#E5BEF6",
      "#FAE8FF",
      "#320A42",
      "#13021A",
    ],
  },
  primaryColor: "brand",
  primaryShade: 4,
};

export const carUsLightTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
    brand: [
      "#AC3FD9",
      "#9226C0",
      "#BE69E2",
      "#721D96",
      "#D194EC",
      "#51136C",
      "#E5BEF6",
      "#FAE8FF",
      "#320A42",
      "#13021A",
    ],
  },
  primaryColor: "brand",
  primaryShade: 7,
};

// const globalTheme: CarUsTheme = {
//   global: {
//     breakpoints: responsiveBreakpoints,
//     font: {
//       family: "Roboto",
//       size: "18px",
//       height: "20px",
//     },
//   },
//   colors,
//   carousel: {
//     animation: {
//       duration: 300,
//     },
//     icons: {
//       color: colors.primary.c400,
//     },
//   },
//   patterns: {
//     border: {
//       radius: {
//         small: "4px",
//         medium: "12px",
//         large: "24px",
//         xxlarge: "36px",
//       },
//       size: {
//         small: "1px",
//         medium: "2px",
//         large: "4px",
//       },
//     },
//     spacing: {
//       xsmall: "4px",
//       small: "8px",
//       medium: "16px",
//       large: "24px",
//       xlarge: "32px",
//     },
//   },
// };
