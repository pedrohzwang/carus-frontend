import { Header, Box, Button, ResponsiveContext, Grommet } from "grommet";
import { Menu } from "grommet-icons";
import globalTheme from "../../theme/theme";
import Text from "../Text/Text";
import { AppBarProps } from "./AppBar.type";

const AppBar = (props: AppBarProps) => {
  return (
    <Grommet theme={globalTheme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Header
            background={globalTheme.colors.primary.c100}
            pad={{ left: "medium", right: "small", vertical: "small" }}
            height={props.height ?? "60px"}
            alignContent="center"
            direction="row"
            wrap={false}
          >
            <Box
              flex={size !== "xxsmall" ? "shrink" : "grow"}
              justify={size !== "xxsmall" ? "start" : "center"}
            >
              {props.mainTitle}
            </Box>
            {size !== "xxsmall" && (
              <Box
                direction="row"
                justify="start"
                pad={{ left: "xlarge", right: "xlarge" }}
                gap="xlarge"
                basis={size === "xsmall" ? "3/4" : "full"}
              >
                {props.menus?.map((menu, index) => (
                  <Box key={index}>{menu}</Box>
                ))}
              </Box>
            )}
            {props.rightMenu && (
              <Box flex="shrink">
                <Button icon={<Menu />} />
              </Box>
            )}
          </Header>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default AppBar;
