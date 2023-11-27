import style from "./styles/title.module.css";
export const TitleSection = ({ name = "Section", section = "(1.1)" }) => {
  return (
    <div className={style.contTitleSection}>
      <div className={style.contTitle}>
        <div className={style.pointer}></div>
        <h3>{name}</h3>
      </div>
      <p>{section}</p>
    </div>
  );
};
