import { Header, Text, Box, Button } from "grommet";
import { Menu, Moon, Sun } from "grommet-icons";
import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import { ETheme } from "../../shared/enums/ETheme";
import { AppBarProps } from "./AppBar.type";

const AppBar = (props: AppBarProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Header
      background="primary"
      pad={{ left: "medium", right: "small", vertical: "small" }}
    >
      <Box basis="full">
        <Text>Locação</Text>
      </Box>
      <Box>
        <Button
          a11yTitle={
            theme === ETheme.DARK
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
          icon={theme === ETheme.DARK ? <Sun /> : <Moon />}
          onClick={toggleTheme}
        />
      </Box>
      <Box>
        <Button icon={<Menu />} />
      </Box>
    </Header>
  );
};

export default AppBar;
