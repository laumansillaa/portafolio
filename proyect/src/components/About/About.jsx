import React from 'react';
import CV from '../../assets/CV.pdf';
import javascript from '../../assets/stack/javascript.png'
import node from '../../assets/stack/node.png'
import express from '../../assets/stack/express.png'
import postgre from '../../assets/stack/postgre.png'
import react from '../../assets/stack/react.png'
import redux from '../../assets/stack/redux.png'
import ionic from '../../assets/stack/ionic.png'
import html from '../../assets/stack/html.png'
import css from '../../assets/stack/css.png'
import git from '../../assets/stack/git.png'
import postman from '../../assets/stack/postman.png'
import sequelize from '../../assets/stack/sequelize.png'
import mongodb from '../../assets/stack/mongodb.png'
import developer from '../../assets/developer.svg'
import "./styles/About.css";
import './styles/about-screen-412.css'





const About = () => {


    return (

        <div className='aboutContainer' id='about'>
            <section className='cont-about'>
                <div className='img-content'>
                    <img src={developer} alt='svgnotfound' className='img-svg' />
                </div>
                <div className='cont-about-description'>
                    <p className='aboutDescription'>Soy un entusiasta, apasionado por el desarrollo de aplicaciones que brinden soluciones practicas. Me considero una persona
                        responsable, con una gran capacidad de trabajo y una gran capacidad de adaptación a los cambios. Siempre dispuesto a afrontar
                        nuevos desafios.
                    </p>
                </div>
            </section>
            <div className='cont-stack'>
                <footer >
                    <h3 className='stackDescription'>Stack tecnologico: </h3>
                </footer>
                <p className='stackDescription'>
                    Javascript | Node.js | Express | PostgreSQL | Sequelize | MongoDB | React | Redux | Redux-Saga | Ionic | HTML | CSS | GIT | Postman
                </p>
                <div className='containerImg'>
                    <img src={javascript} alt='img javascript' title='Javascript' className='imgAbout' />
                    <img src={node} alt='img node' title='Node.Js' className='imgAbout'/>
                    <img src={express} alt='img express' title='Express' className='imgAbout' />
                    <img src={postgre} alt='img postgreSQL' title='PostgreSQL' className='imgAbout' />
                    <img src={sequelize} alt='sequelize' title='Sequelize' className='imgAbout'/>
                    <img src={mongodb} alt='mongoDB' title='MongoDB' className='imgAbout'/>
                    <img src={react} alt='img react' title='React' className='imgAbout' />
                    <img src={redux} alt='img redux' title='Redux' className='imgAbout'/>
                    <img src={ionic} alt='img ionic' title='Ionic' className='imgAbout'/>
                    <img src={html} alt='img html' title='HTML' className='imgAbout'/>
                    <img src={css} alt='img css' title='CSS' className='imgAbout'/>
                    <img src={git} alt='img git' title='GIT' className='imgAbout'/>
                    <img src={postman} alt='img postman' title='Postman' className='imgAbout'/>
                </div>
                <div className='aboutButton'>
                    <a href={CV} target='_blank' className='buttonDownload'> Descargar CV </a>    
                </div>
            </div>
        </div>

    )
}


export default About;