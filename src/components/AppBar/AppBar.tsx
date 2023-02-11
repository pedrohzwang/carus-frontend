import { Header, Text } from "grommet";
import { AppBarProps } from "./AppBar.type";

const AppBar = (props: AppBarProps) => {
  return (
    <Header
      background="dark-1"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
    >
      <Text>Locação</Text>
    </Header>
  );
};

export default AppBar;
