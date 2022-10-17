import style from './styles/footer.module.css'
import mansilla from '../../assets/svg/mansilla.svg'

const Footer = () => {


    return (
        <footer className={style.footer}>
            {/* <div className={style.contLogo}>
                <img src={mansilla} alt='mansilla' className={style.mansilla} />
            </div> */}
            <div className={style.contText}>
                <h2 className={style.textFooter}>&copy; Diseño: Lautaro Mansilla</h2>
                <h2 className={style.textFooter}>Hecho con React - CSS</h2>
            </div>
        </footer>
    )
}

export default Footer;