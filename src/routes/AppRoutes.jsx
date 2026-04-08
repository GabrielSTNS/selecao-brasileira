import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Historia from "../pages/historia/Historia";
import Elenco from "../pages/elenco/Elenco";
import Jogos from "../pages/jogos/Jogos";
import Galeria from "../pages/galeria/Galeria";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/historia" element={<Historia />}></Route>
      <Route path="/elenco" element={<Elenco />}></Route>
      <Route path="/jogos" element={<Jogos />}></Route>
      <Route path="/galeria" element={<Galeria />}></Route>
    </Routes>
  );
};

export default AppRoutes;
