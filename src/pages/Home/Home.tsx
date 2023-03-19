import { PageContent } from "grommet";
import globalTheme from "../../theme/theme";

function Home() {
  return (
    <PageContent background={globalTheme.colors.background.dark.c100}>
      <div style={{ height: "94vh" }}></div>
    </PageContent>
  );
}

export default Home;
