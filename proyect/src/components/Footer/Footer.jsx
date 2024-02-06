import style from "./styles/footer.module.css";
import mansilla from "../../assets/svg/mansilla.svg";

const Footer = () => {
  const socialMedia = [
    {
      img: 'github',
      link: "https://github.com/laumansillaa",
    },
    {
      img: 'linkedin',
      link: "https://www.linkedin.com/in/lautaro-mansilla",
    },

  ]
  return (
    <footer className={style.footer}>
      <div className={style.contLogo}>
        <img src={mansilla} alt="mansilla" className={style.mansilla} />
        <div className={style.contText}>
          <div className={style.point}></div>
          <span className={style.text}>Trabajemos juntos</span>
        </div>
      </div>
      <div className={style.contDos}>
        <h2 className={style.textFooter}>Contacto</h2>
      </div>
    </footer>
  );
};

export default Footer;
