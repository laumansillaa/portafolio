import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import style from "./styles/nav.module.css";
import menu from "../../assets/svg/menu.svg";
import { mediaIcons } from "./mediaIcons";
import useWindowWidth from "../../hook/useWindowWidth";

const Nav = () => {
  const windowWidth = useWindowWidth();

  const clickChecked = () => {
    const gsm = document.getElementById("menu").click();
  };

  const links = [
    { name: "Inicio", link: "home" },
    { name: "Sobre mi", link: "about" },
    { name: "Proyectos", link: "projects" },
    { name: "Contacto", link: "contact" },
  ];

  return (
    <div className={style.contNav}>
      <div className={style.navContainer}>
        <div className={style.contImgNav}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            className={style.logo}
          >
            Mansilla
          </Link>
        </div>
        <label htmlFor="menu" className={style.navLabel}>
          <img src={menu} alt="menu-svg" className={style.navSvg} />
        </label>
        <input type="checkbox" id="menu" className={style.navInput}></input>
        <div className={style.contItemsNav}>
          {links.map((e) => (
            <Link
              to={e.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className={style.navItem}
              onClick={clickChecked}
              key={`${e.name}`}
            >
              {e.name}
            </Link>
          ))}
          {windowWidth < 766 && (
            <div className={style.contSocialMedia}>
              {mediaIcons.map((e, index) => (
                <a href={e.link} target="_blank" key={index}>
                  <img src={e.img} alt="assets" className={style.mediaIcon} />
                </a>
              ))}
            </div>
          )}
        </div>
        {windowWidth > 766 && (
          <div className={style.contSocialMedia}>
            {mediaIcons.map((e, index) => (
              <a href={e.link} target="_blank" key={index}>
                <img src={e.img} alt="assets" className={style.mediaIcon} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
