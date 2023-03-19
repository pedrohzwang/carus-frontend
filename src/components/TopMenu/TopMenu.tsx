import AppBar from "../AppBar/AppBar";

function TopMenu() {
  const menus = ["Locar", "Meus carros", "Minhas locações"];

  return <AppBar mainTitle="CarUs" menus={menus} />;
}

export default TopMenu;