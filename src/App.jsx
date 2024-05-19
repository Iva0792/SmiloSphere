import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Expedientes from "./Expedientes";
import Agenda from "./Agenda";
import Busqueda from "./Busqueda";
import Facturacion from "./Facturacion";
import Mensajeria from "./Mensajeria";
import Pendientes from "./Pendientes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Expedientes" element={<Expedientes />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Busqueda" element={<Busqueda />} />
        <Route path="/Facturacion" element={<Facturacion />} />
        <Route path="/Mensajeria" element={<Mensajeria />} />
        <Route path="/Pendientes" element={<Pendientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
