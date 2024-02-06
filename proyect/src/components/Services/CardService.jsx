import style from "./styles/card.module.css";
export const CardService = ({
  title = "Backend",
  description = "lorem ipsum jaja lorem impsun jaja lorem impsun jaja lorem impsun",
  img,
}) => {
  return (
    <div className={style.contCard}>
      <div className={style.circularBox}>{`<img />`}</div>
      <label className={style.title}>{title}</label>
      <p className={style.description}>{description}</p>
    </div>
  );
};
