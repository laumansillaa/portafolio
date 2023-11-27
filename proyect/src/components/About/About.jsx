import React from "react";
import CV from "../../assets/CV.pdf";
import style from "./styles/About.module.css";
import { stack } from "./stack";
import { TitleSection } from "../elements/TitleSection/TitleSection";

const About = () => {
  return (
    <div className={style.aboutContainer} id="about">
      <TitleSection name="Sobre mi" section="(1.3)" />
      <div className={style.contBodySection}>
        <div className={style.contStack}>
          <div className={style.contTitle}>
            <h3 className={style.stackDescription}>Stack tecnologico </h3>
          </div>
          <div className={style.contNameStack}>
            {stack.map((e) => {
              return (
                <div key={e} className={style.boxStack}>
                  <img
                    src={e.img}
                    alt={`img-${e.name}`}
                    className={style.imgIcon}
                  />
                  {/* <h4 className={style.stack}>{e.name}</h4> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.contAboutDescription}>
          <p className={style.aboutDescription}>
            Soy un desarrollador apasionado por las aplicaciones que brinden
            soluciones practicas. Me considero una persona responsable, con una
            gran capacidad de trabajo y una gran adaptacion a los cambios. Entre
            mis intereses se encuentra el mundo web3, donde espero pronto poder
            estar colaborando.
          </p>
          <div className={style.aboutBtn}>
            <a href={CV} target="_blank" className={style.buttonDownload}>
              {" "}
              Descargar CV{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
