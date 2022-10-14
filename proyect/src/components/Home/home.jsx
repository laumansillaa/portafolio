import React from 'react';
import developer from '../../assets/developer.svg'
import whatsapp from '../../assets/whatsapp.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
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
                <img src={linkedin} alt='linkedin' className={style.icon}/>
                <img src={github} alt='github' className={style.icon}/>
            </div>
        </div>
    )
}



export default Home;