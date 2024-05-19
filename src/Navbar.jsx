import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="">
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="dropdown"></label>
                <div className="menu">
                    <li><a href="/Expendientes">Expedientes</a></li>
                    <li><a href="/Agenda">Agenda</a></li>
                    <li><a href="/Mensajeria">Mensajería</a></li>
                    <li><a href="/Facturacion">Facturación</a></li>
                    <li><a href="/Pendientes">Pendientes</a></li>
                    <li><a href="/Busqueda">Búsqueda</a></li>
                </div>
            </ul>
            </div>
            <div>
                <li className="logo"><a href="/Dashboard">SmiloSphere</a></li>
            </div>
        </nav>
    );
};

export default Navbar;