import { Page, PageContent } from "grommet";
import TopMenu from "./components/TopMenu/TopMenu";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Page kind="full">
      <TopMenu />
      <Home />
    </Page>
  );
};

export default App;
