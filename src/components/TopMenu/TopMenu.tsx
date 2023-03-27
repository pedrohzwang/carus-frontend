import AppBar from "../AppBar/AppBar";
import Text from "../Text/Text";
import Link from "../Link/Link";

function TopMenu() {
  const menus = [
    <Link to="/" key={"/"}>
      <Text size="medium">Locar</Text>
    </Link>,
    <Link to="/my-cars" key={"/my-cars"}>
      <Text size="medium">Meus carros</Text>
    </Link>,
    <Link to="/my-rentals" key={"/my-rentals"}>
      <Text size="medium">Minhas locações</Text>
    </Link>,
  ];

  return <AppBar mainTitle="CarUs" menus={menus} />;
}

export default TopMenu;
