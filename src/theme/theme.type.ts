import { ThemeType } from "grommet";



export interface CarUsTheme extends ThemeType {
  colors: CarUsColorsTheme;
}

export interface CarUsColorsTheme {
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
