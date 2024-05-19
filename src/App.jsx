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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expedientes" element={<Expedientes />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/busqueda" element={<Busqueda />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="/mensajeria" element={<Mensajeria />} />
        <Route path="/pendientes" element={<Pendientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
