import { Main, Page } from "grommet";
import Home from "./routes/Home/Home";
import globalTheme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyCars from "./routes/MyCars/MyCars";
import MyRentals from "./routes/MyRentals/MyRentals";

const App = () => {
  return (
    <Page kind="full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-cars" element={<MyCars />} />
          <Route path="/my-rentals" element={<MyRentals />} />
        </Routes>
      </Router>
    </Page>
  );
};

export default App;
