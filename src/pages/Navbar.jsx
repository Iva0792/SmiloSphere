import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from 'react-native-elements';

const Navbar = () => {

    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    return (
        <nav className="navbar">
            <div>
                <ul>
                    <li className="logo">
                        <Link to="/Dashboard">SmiloSphere</Link>
                    </li>
                </ul>
            </div>
            <SearchBar
                placeholder="Buscar..."
                onChangeText={this.updateSearch}
                value={search}
            />
            <div>
                <ul className="nav-links">
                    <div className="menu iconos">
                        <div className="center-icons">
                            <li>
                                <Link to="/Expedientes">
                                    <div className="icon">
                                        <img src="../assets/icons/expediente.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Agendas">
                                    <div className="icon">
                                        <img src="../assets/icons/agenda.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Mensajeria">
                                    <div className="icon">
                                        <img src="../assets/icons/mensaje.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Facturacion">
                                    <div className="icon">
                                        <img src="../assets/icons/factura.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Pendientes">
                                    <div className="icon">
                                        <img src="../assets/icons/pendiente.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Busqueda">
                                    <div className="icon">
                                        <img src="../assets/icons/busqueda.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                        </div>
                        <li className="bottom-icon">
                            <Link to="/">
                                <div className="icon salir">
                                    <img src="../assets/icons/salir.svg" alt="" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </ul>
                <Link to="/">
                    <div className="icon user-icon">
                        <img src="../assets/icons/user.svg" alt="" />
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;