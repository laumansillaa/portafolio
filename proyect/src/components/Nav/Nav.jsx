import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import style from './styles/nav.module.css';
// import style './styles/nav-screen-412.css'
import menu from '../../assets/menu.svg'
import iconNav from '../../assets/iconNav.png'

// &lt;/Lau&gt

const Nav = () => {

    const clickChecked = () => {
        const gsm = document.getElementById('menu').click()
    }

    return (
        <div className={style.contNav} >
            <div className={style.navContainer}>
                <div className={style.contImgNav}>
                    {/* <Link to="home" spy={true} smooth={true} offset={-100} duration={200} className={style.logo}><img src={iconNav} alt='icon' className={style.icon} /></Link> */}
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={200} className={style.logo}>Mansilla</Link>
                </div>
                <label for= 'menu' className={style.navLabel}>
                    <img src={menu} alt='menu-svg' className={style.navSvg} />
                </label>
                <input type='checkbox' id='menu' className={style.navInput}></input>
                <div className={style.contItemsNav}>
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={300} className={style.navItem} onClick={clickChecked }>Inicio</Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={300} className={style.navItem} onClick={clickChecked }>Sobre Mi</Link>
                    <Link to="servicio" spy={true} smooth={true} offset={-100} duration={200} className={style.navItem} onClick={clickChecked}>Proyectos</Link>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={200} className={style.navItem} onClick={clickChecked}>Contacto</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;