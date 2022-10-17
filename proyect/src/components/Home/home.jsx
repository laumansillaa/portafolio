import React from 'react';
import developer from '../../assets/svg/developer.svg'
import whatsapp from '../../assets/svg/whatsapp.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import github from '../../assets/svg/github.svg'
import style from "./styles/home.module.css";
import './styles/home-screen-750.css';
import './styles/home-screen-414.css';
import './styles/home-screen-820.css';
import './styles/home-screen-412.css';


const Home = () => {
    return (
        <div className={style.containerHome} id='home'>
            <div className={style.contText}>
                    <div className={style.homeInfo}>
                        <h3 className={style.welcomeHome}>Hola, bienvenido!</h3>
                        <div className={style.titleHome}>
                            <h1 className={style.homeName}>Lautaro Mansilla</h1> 
                        </div>
                        <div className={style.subtitleHome}>
                            <h1 className={style.homeSubtitle}>Fullstack Web Developer</h1>
                        </div>
                    </div>
                    <div className={style.contSvg}>
                        <img src={developer} alt='developer.svg' />
                    </div>
                
            </div>
            <div className={style.contIcons}>
                <img src={whatsapp} alt='whatsapp' className={style.icon}/>
                <a href="https://www.linkedin.com/in/lautaro-mansilla" target="_blank">
                    <img src={linkedin} alt='linkedin' className={style.icon}/>
                </a>
                <a href="https://www.github.com/laumansillaa" target="_blank">
                    <img src={github} alt='github' className={style.icon}/>
                </a>
            </div>
        </div>
    )
}



export default Home;