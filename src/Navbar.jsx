import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <ul>
                    <li className="logo">
                        <Link to="/Dashboard">SmiloSphere</Link>
                    </li>
                </ul>
            </div>
            <div>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="dropdown"></label>
                <div className="menu">
                    <li>
                        <Link to="/Expedientes">Expedientes</Link>
                    </li>
                    <li>
                        <Link to="/Agenda">Agenda</Link>
                    </li>
                    <li>
                        <Link to="/Mensajeria">Mensajería</Link>
                    </li>
                    <li>
                        <Link to="/Facturacion">Facturación</Link>
                    </li>
                    <li>
                        <Link to="/Pendientes">Pendientes</Link>
                    </li>
                    <li>
                        <Link to="/Busqueda">Búsqueda</Link>
                    </li>
                </div>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;