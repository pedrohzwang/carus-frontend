import { IconSearch, IconSun, IconMoonStars } from "@tabler/icons-react";
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
  Flex,
  TextInput,
  Switch,
  Box,
} from "@mantine/core";
import { useEffect } from "react";

function AppBar(props: AppBarProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Header height={60} bg={theme.primaryColor}>
      <Container size="xl" h="100%">
        <Flex align="center" h="100%" justify="space-between">
          {props.mainTitle}
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
            <TextInput
              icon={<IconSearch size="1rem" stroke={1.5} />}
            ></TextInput>
          </Group>
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
