import { useId } from "react";
import { TitleSection } from "../elements/TitleSection/TitleSection";
import { CardService } from "./CardService";
import style from "./styles/services.module.css";
import { CustomContainerMaxWidth } from "../CustomContainerMaxWidth/CustomContainerMaxWidth";
export const Services = () => {
  const id = useId();
  const dataServices = [
    {
      title: "Backend",
      description:
        "lorem ipsum jaja lorem impsun jaja lorem impsun jaja lorem impsun",
      img: "",
    },
    {
      title: "Frontend",
      description:
        "lorem ipsum jaja lorem impsun jaja lorem impsun jaja lorem impsun impsun jaja lorem impsun jaja lorem impsun impsun jaja lorem impsun jaja lorem impsun",
      img: "",
    },
    {
      title: "Base de datos",
      description:
        "lorem ipsum jaja lorem impsun jaja lorem impsun jaja lorem impsun",
      img: "",
    },
  ];

  return (
    <CustomContainerMaxWidth>
      <section className={style.contServices}>
        <TitleSection name="Servicios" section="(1.3)" />
        <div className={style.contServicesCards}>
          {dataServices.map((e, index) => (
            <CardService
              title={e.title}
              description={e.description}
              key={`${id}-${index}`}
            />
          ))}
        </div>
      </section>
    </CustomContainerMaxWidth>
  );
};
