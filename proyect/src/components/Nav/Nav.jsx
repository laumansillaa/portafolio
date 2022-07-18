import React from 'react'
import './nav.css';

// &lt;/Lau&gt

const Nav = () => {


    return (
        <header className='nav'>
            <div className='containerNav'>
                <div className='containerItem'>
                    <a className='navItem'>{"<LM/>"}</a>
                </div>
                <div className='mobile-nav'>
                    <i class='fa fa-bars'></i>
                </div>
                <div className='cont-items-nav'>
                    <ul className='primary-menu' style={{listStyleType: 'none'}}>
                        <li className='item-nav'><a href='#header' className='item-text' >Inicio</a></li>
                        <li className='item-nav'><a href='#about' className='item-text'>Sobre mi</a></li>
                        <li className='item-nav'><a href='#projects' className='item-text'>Proyectos</a></li>
                        <li className='item-nav'><a href='#contact' className='item-text'>Contacto</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Nav;