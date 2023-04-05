import { Main } from "grommet";
import Text from "../../components/Text/Text";
import TopMenu from "../../features/TopMenu/TopMenu";

function MyRentals() {
  return (
    <>
      <TopMenu />
      <Main pad="small">
        <Text>Minhas locações</Text>
      </Main>
    </>
  );
}

export default MyRentals;
