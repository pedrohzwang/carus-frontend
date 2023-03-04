import { Grommet } from "grommet";
import { createContext, ReactNode, useState, useMemo } from "react";
import { ETheme } from "../shared/enums/ETheme";
import globalTheme from "../theme/theme";

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export interface ThemeContextType {
  theme: ETheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK);

  const toggleTheme = () => {
    setTheme(theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Grommet
        theme={globalTheme}
        full
        themeMode={theme === ETheme.DARK ? "dark" : "light"}
      >
        {children}
      </Grommet>
    </ThemeContext.Provider>
  );
};
