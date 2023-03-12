import { Page, PageContent } from "grommet";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Page kind="narrow">
      <Home />
      <PageContent background="primary" fill="horizontal"></PageContent>
    </Page>
  );
};

export default App;
