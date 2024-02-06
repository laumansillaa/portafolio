import { useState } from "react";
import { assetsProyects } from "./pictures";
import style from "./styles/cardProject.module.css";
import { ButtonSlider } from "../ButtonSlider/ButtonSlider";

export const CardProject = ({ key }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${style.contCard} ${isExpanded ? style.expanded : ""}`}
      key={key}
    >
      <div className={style.contImage}>
        <img src={assetsProyects[0]} alt="image" className={style.imgProject} />
      </div>
      <div className={style.contInfoProject}>
        <div className={style.contTypeProject}>
          <div className={style.point}></div>
          <p className={style.typeProject}>Pagina web</p>
        </div>
        <label className={style.date}>24.15.2023</label>
      </div>
      <div className={style.contTitle}>
        <p className={style.title}>ADM Servicios Financieros</p>
        <ButtonSlider />
      </div>
    </div>
  );
};
