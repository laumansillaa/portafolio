import React from 'react';
import ReactPlayer from 'react-player';
import Allalumns from "../../assets/Projects/IonicNote/Allalumns.jpg";
import "./project.css"


const Project = () => {


    

    return (
        
        <div>
            <div className='projectTitle'>
                <h3>Proyectos</h3>
            </div>
            <div>
                <div className='reactplayer'>
                    <ReactPlayer url='https://vimeo.com/677424926'  />
                </div>
                <div>
                    <div>
                        <h2>Qameleon - Crypto Wallet App</h2>
                        <div>
                            <p>App Mobile - Crypto Wallet conectada a la blockhain de Stellar y Ethereum. Admite la transaccion de activos 
                                entre usuarios (compra, venta, transferencias), como asi tambien el stacking.</p>
                        </div>
                        <div className='projectButtonContainer'>
                            <a href='https://github.com/laumansillaa/CryptoWalletApp' className='projectButton'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img src={Allalumns} alt='Gym-App'/>
                </div>
                <div>
                    <div>
                        <h2>Gym-App</h2>
                        <div>
                            <p>App Mobile - Aplicacion para gestionar la informacion de los alumnos de un gym. Admite agregar alumnos
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

    )


}


export default Project;