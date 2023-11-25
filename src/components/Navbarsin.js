import React from 'react';
import { Link } from 'react-router-dom';

function Navbarsin(){
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-custom-nav'>
                <div className='container-fluid'>
                    <ul className='navbar-nav p-1'>
                        <li className='nav-item'><Link to="/" className='nav-link link-light'>Inicio</Link></li>
                        <li className='nav-item'><Link to="/nosotros" className='nav-link link-light'>Nosotros</Link></li>
                        <li className='nav-item'><Link to="/contacto" className='nav-link link-light'>Contacto</Link></li>
                        <li className='nav-item'><Link to="/carrito" className='nav-link link-light'>Carrito</Link></li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbarsin;