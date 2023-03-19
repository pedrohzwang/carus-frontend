import { Page, PageContent } from "grommet";
import Home from "./pages/Home/Home";
import globalTheme from "./theme/theme";

const App = () => {
  return (
    <Page kind="full">
      <Home />
      <PageContent
        background={globalTheme.colors.background.dark.c100}
        fill="horizontal"
      >
        <div style={{ height: "95vh" }}></div>
      </PageContent>
    </Page>
  );
};

export default App;
