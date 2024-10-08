import "./Main.css";
import "./Grid.css"
import Navbar from './Navbar';
import Expedientes from "./Expedientes";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
          <Navbar />
          <div className="content">
            <div className="cards">
                <div className="card">
                    <Link to="/Expedientes">
                        <div className="cardAct">
                            <div className="cardText">
                                Expedientes
                            </div>
                            <div className="card-1"></div>
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/Agenda">
                        <div className="cardAct">
                            <div className="cardText">
                                Agenda
                            </div>
                            <div className="card-2"></div>
                        </div>
                    </Link>
                </div>
                <div className="card">
                  <Link to="/Mensajeria">
                        <div className="cardAct">
                            <div className="cardText">
                                Mensajería
                            </div>
                            <div className="card-3"></div>
                        </div>
                    </Link></div>
                <div className="card">
                  <Link to="/Facturacion">
                        <div className="cardAct">
                            <div className="cardText">
                                Facturación
                            </div>
                            <div className="card-4"></div>
                        </div>
                    </Link></div>
                <div className="card">
                  <Link to="/Pendientes">
                        <div className="cardAct">
                            <div className="cardText">
                                Pendientes
                            </div>
                            <div className="card-5"></div>
                        </div>
                    </Link></div>
                <div className="card">
                  <Link to="/Busqueda">
                        <div className="cardAct">
                            <div className="cardText">
                                Búsqueda
                            </div>
                            <div className="card-6"></div>
                        </div>
                    </Link></div>
            </div>
        </div> 
    </div>
  );
}

export default Dashboard;
