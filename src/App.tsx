import { Home } from "./routes/Home/Home";
import { carUsDarkTheme, carUsLightTheme } from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyCars from "./routes/MyCars/MyCars";
import { MyRentals } from "./routes/MyRentals/MyRentals";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";
import { ModalLogin } from "./components/ModalLogin/ModalLogin";

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={colorScheme === "dark" ? carUsDarkTheme : carUsLightTheme}
      >
        <Router>
          <Routes>
            <Route path="/login" element={<ModalLogin />} />
            <Route path="/" element={<Home />} />
            <Route path="/my-cars" element={<MyCars />} />
            <Route path="/my-rentals" element={<MyRentals />} />
          </Routes>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
