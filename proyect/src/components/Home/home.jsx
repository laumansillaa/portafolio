import React from 'react';
import photo from "../../assets/photo.png";
import About from '../About/About';
import Contact from '../Contact/Contact'
import Project from '../Project/Project';

import "./home.css";


const Home = () => {
    return (
        <div className='containerHome'>
            <div className='divtop'>
            </div>
            <header id='header'>
                <div className='inner'>
                    <div className='contentHeader'>
                        <div className='homeInfo'>
                            <div>
                                <h4 className='welcomeHome'>HOLA, BIENVENIDO!</h4>
                            </div>
                            <div className='titleHome'>
                                <h1 className='homeName'>Lautaro Mansilla</h1> 
                            </div>
                            <div className='subtitleHome'>
                                <h1 className='homeSubtitle'>Fullstack Web Developer</h1>
                            </div>
                        </div>
                        <div className='homeImage'>
                            <a ><img src={photo} alt='jpg not found' className='avatar'/></a>
                        </div>
                    </div>
                </div>
            </header>
            <div classname='homeAbout'>
                <About/>
            </div>
            
            <div>
                <Project/>
            </div>
            <div>
                <Contact />
            </div>
            <footer>
                <div className='copyright'>
                    <a >&copy; Lautaro Mansilla - FullStack Web Developer </a>
                    <a >- Hecho con React y CSS -</a>
                </div>
            </footer>
        </div>
    )
}



export default Home;