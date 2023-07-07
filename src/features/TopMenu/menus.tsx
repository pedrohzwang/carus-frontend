import { Link } from "../../components/Link/Link";
import { Text } from "../../components/Text/Text";

export const menus = [
  {
    key: "rent",
    component: (
      <Link to="/" key="/">
        <Text size="medium">Locar</Text>
      </Link>
    ),
  },
  {
    key: "myCars",
    component: (
      <Link to="/my-cars" key="/my-cars">
        <Text size="medium">Meus carros</Text>
      </Link>
    ),
  },
  {
    key: "myRentals",
    component: (
      <Link to="/my-rentals" key="/my-rentals">
        <Text size="medium">Minhas locações</Text>
      </Link>
    ),
  },
];
