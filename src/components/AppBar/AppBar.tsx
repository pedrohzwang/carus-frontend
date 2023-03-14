import { Header, Text, Box, Button } from "grommet";
import { Menu } from "grommet-icons";
import globalTheme from "../../theme/theme";
import { AppBarProps } from "./AppBar.type";

const AppBar = (props: AppBarProps) => {
  return (
    <Header
      background={globalTheme.colors.primary.c100}
      pad={{ left: "medium", right: "small", vertical: "small" }}
      height={props.height ?? "60px"}
    >
      <Box basis="full">
        <Text size={props.titleSize ?? "large"}>{props.mainTitle}</Text>
      </Box>
      {props.rightMenu && (
        <Box>
          <Button icon={<Menu />} />
        </Box>
      )}
    </Header>
  );
};

export default AppBar;
