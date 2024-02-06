import style from "./styles/buttonSlider.module.css";
import arrow from '../../assets/arrow.svg';
export const ButtonSlider = () => {
  return (
    <button className={style.buttonSlider}>
      <label className={style.textButton}>Ver más</label>
      <img src={arrow} alt="arrow" className={style.arrow} />
    </button>
  );
};
