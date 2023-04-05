import AppBar from "../../components/AppBar/AppBar";
import Link from "../../components/Link/Link";
import Text from "../../components/Text/Text";

function TopMenu() {
  const menus = [
    <Link to="/" key="/">
      <Text size="medium">Locar</Text>
    </Link>,
    <Link to="/my-cars" key="/my-cars">
      <Text size="medium">Meus carros</Text>
    </Link>,
    <Link to="/my-rentals" key="/my-rentals">
      <Text size="medium">Minhas locações</Text>
    </Link>,
  ];

  return (
    <AppBar
      mainTitle={
        <Link to="/" key="/home">
          <Text size="large" textAlign="center">
            CarUs
          </Text>
        </Link>
      }
      menus={menus}
    />
  );
}

export default TopMenu;
