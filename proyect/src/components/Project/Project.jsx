import React from 'react';
import ReactPlayer from 'react-player';
import Allalumns from "../../assets/Projects/IonicNote/Allalumns.jpg";
import "./project.css"


const Project = () => {


    

    return (
        
        <div id='projects' className='projects'>
            <div className='containProjectTitle'>
                <h3 className='projectTitle'>Proyectos</h3>
            </div>
            <div className='containerCard'>
                <div className='card'>
                    <div className='reactplayer'>
                        <ReactPlayer url='https://vimeo.com/677424926' />
                    </div>
                    <div>
                        <div>
                            <h2>Qameleon - Crypto Wallet App</h2>
                            <div className='contentInfo'>
                                <p className='infoProjects'>App Mobile - Crypto Wallet conectada a la blockhain de Stellar y Ethereum. Admite la transaccion de activos 
                                    entre usuarios (compra, venta, transferencias), como asi tambien el stacking.</p>
                            </div>
                            <div className='projectButtonContainer'>
                                <a href='https://github.com/laumansillaa/CryptoWalletApp' className='projectButton'>GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='containImg'>
                        <img src={Allalumns} alt='Gym-App' className='imgNotes'/>
                    </div>
                    <div>
                        <div>
                            <h2>Gym-App</h2>
                            <div className='contentInfo'>
                                <p className='infoProjects'>App Mobile - Aplicacion para gestionar la informacion de los alumnos de un gym. Admite agregar alumnos
                                    y agregarle rutinas a cada uno de ellos.
                                </p>
                            </div>
                            <div className='projectButtonContainer'>
                                <a href='https://github.com/laumansillaa/notes-ionic' className='projectButton'>GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )


}


export default Project;