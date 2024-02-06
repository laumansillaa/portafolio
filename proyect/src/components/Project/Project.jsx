import React from "react";
import CarouselImg from "./carousel";
import style from "./styles/project.module.css";
import { TitleSection } from "../elements/TitleSection/TitleSection";
import { CardProject } from "./CardProject";
import { CustomContainerMaxWidth } from "../CustomContainerMaxWidth/CustomContainerMaxWidth";

const Project = () => {
  // const admAssets = [home, home1, about, about1]
  // const gymAssets = [allAlumns, addNote, detailPerfil, editNota]
  // const countriesAssets = [homeCountries, createCountries]
  
  const gym = true;

  return (
    <CustomContainerMaxWidth>
      <section className={style.projects}>
        <TitleSection name="Proyectos" section="(1.4)" />
        <div className={style.contProjects}>
          <CardProject key={"sarasa"} />
          <CardProject key={"sarasasdgaffa"} />
          <CardProject key={"asdfasd"} />
        </div>
      </section>
    </CustomContainerMaxWidth>
  );
};

export default Project;
