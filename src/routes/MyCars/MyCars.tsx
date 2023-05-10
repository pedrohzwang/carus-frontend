import { Main } from "grommet";
import Text from "../../components/Text/Text";
import TopMenu from "../../features/TopMenu/TopMenu";

function MyCars() {
  return (
    <>
      <TopMenu />
      <Main pad="small">
        <Text>Meus carros</Text>
      </Main>
    </>
  );
}

export default MyCars;
