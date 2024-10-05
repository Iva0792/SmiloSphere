import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Expedientes from "./pages/Expedientes";
import Agendas from "./pages/Agenda";
import Busqueda from "./pages/Busqueda";
import Facturacion from "./pages/Facturacion";
import Mensajeria from "./pages/Mensajeria";
import Pendientes from "./pages/Pendientes";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Expedientes" element={<Expedientes />} />
        <Route path="/Agendas" element={<Agendas />} />
        <Route path="/Busqueda" element={<Busqueda />} />
        <Route path="/Facturacion" element={<Facturacion />} />
        <Route path="/Mensajeria" element={<Mensajeria />} />
        <Route path="/Pendientes" element={<Pendientes />} />
      </Routes>
  );
}

export default App;
