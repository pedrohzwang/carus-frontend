import { Main } from "grommet";
import Home from "./pages/Home/Home";
import globalTheme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyCars from "./pages/MyCars/MyCars";
import MyRentals from "./pages/MyRentals/MyRentals";

const App = () => {
  return (
    <Main background={globalTheme.colors.background.dark.c100}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-cars" element={<MyCars />} />
          <Route path="/my-rentals" element={<MyRentals />} />
        </Routes>
      </Router>
    </Main>
  );
};

export default App;
