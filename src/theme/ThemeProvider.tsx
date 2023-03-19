import { Grommet } from "grommet";
import { ReactNode } from "react";
import globalTheme from "./theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <Grommet theme={globalTheme} full>
      {children}
    </Grommet>
  );
};
