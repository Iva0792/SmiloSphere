import "./Main.css";
import Navbar from './Navbar';


function Dashboard() {
  return (
    <div className="container">
          <Navbar />
          <div className="content">
            <div className="cards">
                <div className="card">
                    <a href="/Expedientes">
                        <div className="cardAct">
                            <div className="cardText">
                                Expedientes
                            </div>
                            <div className="card-1"></div>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="/Agenda">
                        <div className="cardAct">
                            <div className="cardText">
                                Agenda
                            </div>
                            <div className="card-2"></div>
                        </div>
                    </a>
                </div>
                <div className="card">
                  <a href="/Mensajeria">
                        <div className="cardAct">
                            <div className="cardText">
                                Mensajería
                            </div>
                            <div className="card-3"></div>
                        </div>
                    </a></div>
                <div className="card">
                  <a href="/Facturacion">
                        <div className="cardAct">
                            <div className="cardText">
                                Facturación
                            </div>
                            <div className="card-4"></div>
                        </div>
                    </a></div>
                <div className="card">
                  <a href="/Pendientes">
                        <div className="cardAct">
                            <div className="cardText">
                                Pendientes
                            </div>
                            <div className="card-5"></div>
                        </div>
                    </a></div>
                <div className="card">
                  <a href="/Busqueda">
                        <div className="cardAct">
                            <div className="cardText">
                                Búsqueda
                            </div>
                            <div className="card-6"></div>
                        </div>
                    </a></div>
            </div>
        </div> 
    </div>
  );
}

export default Dashboard;
