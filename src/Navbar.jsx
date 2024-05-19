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
                    <li><a href="/expendientes">Expedientes</a></li>
                    <li><a href="/agenda">Agenda</a></li>
                    <li><a href="/mensajeria">Mensajería</a></li>
                    <li><a href="/facturacion">Facturación</a></li>
                    <li><a href="/pendientes">Pendientes</a></li>
                    <li><a href="/busqueda">Búsqueda</a></li>
                </div>
            </ul>
            </div>
            <div>
                <li className="logo"><a href="/dashboard">SmiloSphere</a></li>
            </div>
        </nav>
    );
};

export default Navbar;