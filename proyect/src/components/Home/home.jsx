import React from "react";
import style from "./styles/home.module.css";
import imgPerritos from "../../assets/Header/perrito.webp";

const Home = () => {
  return (
    <div className={style.containerHome} id="home">
      <div className={style.contText}>
        <div className={style.homeInfo}>
          <div className={style.titleHome}>
            <label className={style.contName}>
              <div className={style.point}></div>
              <label className={style.homeName}>Lautaro</label>
            </label>
            <label className={style.homeLastname}>Mansilla</label>
          </div>
          <div className={style.subtitleHome}>
            <label className={style.homeSubtitle}>
              Fullstack Web Developer
            </label>
            <div className={style.line}></div>
            <label>Ver proyectos</label>
          </div>
        </div>
        <div className={style.contYear}>
          <label className={style.since}>SINCE</label>
          <label className={style.year}>2021</label>
        </div>
      </div>
      <div className={style.contImg}>
        <img src={imgPerritos} alt="asdf" className={style.imgProfile} />
      </div>
    </div>
  );
};

export default Home;