import React from 'react';
import ReactPlayer from 'react-player';
import Allalumns from "../../assets/Projects/IonicNote/Allalumns.jpg";
import style from "./styles/project.module.css";
import githubB from '../../assets/svg/githubB.svg'
import './styles/projects-screen-750.css';
import './styles/projects-screen-375.css';
import './styles/projects-screen-390.css';
import './styles/projects-screen-414.css';

const Project = () => {



    return (
        
        <div id='projects' className={style.projects}>
            <div className={style.contTitleProject}>
                <h3 className={style.projectTitle}>Proyectos</h3>
            </div>
            <div className={style.contWallet}>
                <div className={style.cardWallet}>                
                    <div className={style.contInfoWallet}>
                        <div className='contentInfo'>
                            <h2 className={style.titleWallet}>Qameleon - Crypto Wallet App</h2>
                            <p className={style.textInfoWallet}>App Mobile - Crypto Wallet conectada a la blockhain de Stellar y Ethereum. Admite la transaccion de activos 
                                entre usuarios (compra, venta, transferencias), como asi tambien el stacking.</p>
                        </div>
                        <div className={style.contBtnCard}>
                            <a href='https://github.com/laumansillaa/CryptoWalletApp' className={style.textBtn}><img src={githubB} alt='github' className={style.githubWallet}/> GitHub</a>
                        </div>
                    </div>
                    <div className={style.reactPlayer}>
                        <ReactPlayer url='https://vimeo.com/677424926' className={style.player}/>
                    </div>
                </div>  
            </div>
            <div className={style.containerCard}>
                {/* <div className={style.card}>
                    <div className={style.reactPlayer}>
                        <ReactPlayer url='https://vimeo.com/677424926' className={style.player}/>
                    </div>
                
                    <div className={style.contInfo}>
                        <div className='contentInfo'>
                            <h2 className='proyect-title'>Qameleon - Crypto Wallet App</h2>
                            <p className={style.textInfo}>App Mobile - Crypto Wallet conectada a la blockhain de Stellar y Ethereum. Admite la transaccion de activos 
                                entre usuarios (compra, venta, transferencias), como asi tambien el stacking.</p>
                        </div>
                        <div className={style.contBtnCard}>
                            <a href='https://github.com/laumansillaa/CryptoWalletApp' className={style.textBtn}><img src={githubB} alt='github' className={style.github}/> GitHub</a>
                        </div>
                    </div>
                </div> */}
                <div className={style.cardTwo}>
                    <div className={style.contImg}>
                        <img src={Allalumns} alt='Gym-App' className={style.imgNotes}/>
                    </div>
                    
                    <div className={style.contInfo}>
                        <div className='contentInfo'>
                            <h2 className='proyect-title'>Gym-App</h2>
                            <p className={style.textInfo}>App Mobile - Aplicacion para gestionar la informacion de los alumnos de un gym. Admite agregar alumnos
                                y agregarle rutinas a cada uno de ellos.
                            </p>
                        </div>
                        <div className={style.contBtnCard}>
                            <a href='https://github.com/laumansillaa/notes-ionic' className={style.textBtn}><img  src={githubB} alt='github' className={style.github}/>GitHub</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )


}


export default Project;