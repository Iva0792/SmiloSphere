import "./Main.css";
import Navbar from './Navbar';

function Dashboard() {
  return (
    <div className="container">
          <Navbar />
          <div className="content">
            <div className="cards">
                <div className="card">
                    <a href="/expedientes">
                        <div className="cardAct">
                            <div className="cardText">
                                Expedientes
                            </div>
                            <div className="card-1"></div>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="/agenda">
                        <div className="cardAct">
                            <div className="cardText">
                                Agenda
                            </div>
                            <div className="card-2"></div>
                        </div>
                    </a>
                </div>
                <div className="card">
                  <a href="/mensajeria">
                        <div className="cardAct">
                            <div className="cardText">
                                Mensajería
                            </div>
                            <div className="card-3"></div>
                        </div>
                    </a></div>
                <div className="card">
                  <a href="/facturacion">
                        <div className="cardAct">
                            <div className="cardText">
                                Facturación
                            </div>
                            <div className="card-4"></div>
                        </div>
                    </a></div>
                <div className="card">
                  <a href="/pendientes">
                        <div className="cardAct">
                            <div className="cardText">
                                Pendientes
                            </div>
                            <div className="card-5"></div>
                        </div>
                    </a></div>
                <div className="card">
                  <a href="/busqueda">
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
