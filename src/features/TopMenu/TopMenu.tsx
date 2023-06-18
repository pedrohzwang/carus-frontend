import { Link } from "../../components/Link/Link";
import { Text } from "../../components/Text/Text";
import { AppBarProps } from "./TopMenu.type";
import { menus } from "./menus";
import {
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Container,
  Group,
} from "@mantine/core";

function AppBar(props: AppBarProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Header height={60} bg={theme.primaryColor}>
      <Container size="xl" h="100%">
        <Group align="center" h="100%">
          {props.mainTitle}
          <Group spacing="xl" align="center">
            <>
              {props.menus?.map((menu) => (
                <>{menu.component}</>
              ))}
            </>
          </Group>
        </Group>
      </Container>
    </Header>
  );
}

export function TopMenu() {
  return (
    <AppBar
      mainTitle={
        <Link to="/" key="/home">
          <Text size="large">CarUs</Text>
        </Link>
      }
      menus={menus}
    />
  );
}
