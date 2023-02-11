import { Grommet } from "grommet";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import theme from "./theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Grommet theme={theme} full>
    <Home />
  </Grommet>
);
