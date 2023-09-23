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

export const carUsDarkTheme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    // Primary colors
    primary: ["#2196f3"],
    primaryDark: ["#1976d2"],
    primaryLight: ["#64b5f6"],
    // Secondary colors
    secondary: ["#f50057"],
    secondaryDark: ["#c51162"],
    secondaryLight: ["#ff4081"],
    // Background
    background: ["#121212"],
    surface: ["#212121"],
    // Text
    text: ["#ffffff"],
    textSecondary: ["#bdbdbd"],
    // Contrast
    success: ["#4caf50"],
    error: ["#f44336"],
    warning: ["#ff9800"],
    info: ["#2196f3"],
    // Shadow
    shadow: ["rgba(0, 0, 0, 0.3)"],
    // Focus
    focusRing: ["#64b5f6"],
    white: ["#fff"],
  },
  globalStyles: (theme) => ({
    body: {
      backgroundColor: theme.colors.dark[7],
      color: theme.colors.white,
    },
  }),
  components: {
    Text: {
      styles: (theme) => ({
        color: {
          color: theme.colors.white,
        },
      }),
    },
  },
  breakpoints: responsiveBreakpoints,
};

export const carUsLightTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
    primary: ["#2196f3"],
    primaryDark: ["#1976d2"],
    primaryLight: ["#64b5f6"],
    secondary: ["#f50057"],
    secondaryDark: ["#c51162"],
    secondaryLight: ["#ff4081"],
    background: ["#ffffff"],
    surface: ["#f5f5f5"],
    text: ["#212121"],
    textSecondary: ["#757575"],
    success: ["#4caf50"],
    error: ["#f44336"],
    warning: ["#ff9800"],
    info: ["#2196f3"],
    shadow: ["rgba(0, 0, 0, 0.3)"],
    focusRing: ["#64b5f6"],
    white: ["#fff"],
  },
  globalStyles: (theme) => ({
    body: {
      backgroundColor: theme.white,
      color: theme.black,
    },
  }),
  components: {
    Text: {
      styles: (theme) => ({
        color: {
          color: theme.colors.black,
        },
      }),
    },
  },
  breakpoints: responsiveBreakpoints,
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
