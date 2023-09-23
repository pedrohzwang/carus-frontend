import {
  IconSun,
  IconMoonStars,
  IconMenu2,
} from "@tabler/icons-react";
import { Link } from "../../components/Link/Link";
import { AppBarProps } from "./TopMenu.type";
import { menus } from "./menus";
import {
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Container,
  Group,
  Flex,
  Switch,
  Box,
  Text,
  ActionIcon,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function AppBar(props: AppBarProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { height, width } = useViewportSize();

  const smallerThanXs = width < Number.parseInt(theme.breakpoints.xs);

  return (
    <Header
      mih={55}
      height={height < 800 ? "8vh" : "7vh"}
      bg={theme.primaryColor}
    >
      <Container size="xl" h="100%">
        <Flex align="center" h="100%" justify="space-between">
          {props.mainTitle}
          {!smallerThanXs && (
            <>
              <Group spacing="6rem">
                <>
                  {props.menus?.map((menu) => (
                    <Box key={menu.key}>{menu.component}</Box>
                  ))}
                </>
              </Group>
              <Group>
                <Switch
                  size="md"
                  color={theme.colorScheme === "dark" ? "gray" : "dark"}
                  onLabel={
                    <IconSun
                      size="1rem"
                      stroke={2.5}
                      color={theme.colors.yellow[4]}
                    />
                  }
                  offLabel={
                    <IconMoonStars
                      size="1rem"
                      stroke={2.5}
                      color={theme.colors.blue[6]}
                    />
                  }
                  onChange={() => toggleColorScheme()}
                />
              </Group>
            </>
          )}
          {smallerThanXs && (
            <ActionIcon>
              <IconMenu2 />
            </ActionIcon>
          )}
        </Flex>
      </Container>
    </Header>
  );
}

export function TopMenu() {
  return (
    <AppBar
      mainTitle={
        <Link to="/" key="/home">
          <Text fw={600} size={24}>
            CarUs
          </Text>
        </Link>
      }
      menus={menus}
    />
  );
}
