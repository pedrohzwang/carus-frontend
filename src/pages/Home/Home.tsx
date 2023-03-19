import { Box, Button, Header, Text } from "grommet";
import { Menu } from "grommet-icons";
import AppBar from "../../components/AppBar/AppBar";

export default function Home() {
  const menus = ["Locar", "Meus carros", "Minhas locações"];

  return <AppBar mainTitle="CarUs" menus={menus}  rightMenu/>;
}
