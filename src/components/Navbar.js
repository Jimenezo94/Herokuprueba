import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="/">Lista libros</Link>
                <Link className="link" to="/form">Guardar Libros</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
