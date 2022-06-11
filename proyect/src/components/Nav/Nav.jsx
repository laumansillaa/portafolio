import React from 'react'
import './nav.css';

// &lt;/Lau&gt

const Nav = () => {


    return (
        <div className='nav'>
            <div className='containerNav'>
                <div className='containerItem'>
                    <a className='navItem'>{"<LM/>"}</a>
                </div>
                <div className='containerItem'>
                    <a href='#header' className='navItem'>INICIO</a>
                </div>
                <div className='containerItem'>
                    <a href='#about' className='navItem'>SOBRE MI</a>
                </div>
                <div className='containerItem'>
                    <a href='#projects' className='navItem'>PROYECTOS</a>
                </div>
                <div className='containerItem'>
                    <a href='#contact' className='navItem'>CONTACTO</a>
                </div>
            </div>
        </div>

    )
}

export default Nav;