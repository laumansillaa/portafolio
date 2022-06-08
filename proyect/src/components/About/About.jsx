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
import "./About.css"

const About = () => {


    return (

        <div className='aboutContainer'>
            <section>
                <header>
                    <h2>Bienvenido! Soy Lautaro Mansilla, tengo 25 años y soy FullStack Web Developer.</h2>
                </header>
                <p>Soy un entusiasta, apasionado por el desarrollo de aplicaciones que brinden soluciones practicas. Me considero una persona
                    responsable, con una gran capacidad de trabajo y una gran capacidad de adaptación a los cambios. Siempre dispuesto a afrontar
                    nuevos desafios.
                </p>
                <footer>
                    <h3>Stack tecnologico: </h3>
                </footer>
                <p>
                    Javascript | Node.js | Express | PostgreSQL | Sequelize | MongoDB | React | Redux | Redux-Saga | Ionic | HTML | CSS | GIT | Postman
                </p>
                <div className='containerImg'>
                    <img src={javascript} alt='img javascript' title='Javascript'/>
                    <img src={node} alt='img node' title='Node.Js' />
                    <img src={express} alt='img express' title='Express' />
                    <img src={postgre} alt='img postgreSQL' title='PostgreSQL' />
                    <img src={sequelize} alt='sequelize' title='Sequelize'/>
                    <img src={mongodb} alt='mongoDB' title='MongoDB' />
                    <img src={react} alt='img react' title='React' />
                    <img src={redux} alt='img redux' title='Redux'/>
                    <img src={ionic} alt='img ionic' title='Ionic'/>
                    <img src={html} alt='img html' title='HTML'/>
                    <img src={css} alt='img css' title='CSS'/>
                    <img src={git} alt='img git' title='GIT'/>
                    <img src={postman} alt='img postman' title='Postman'/>
                </div>

                <div className='aboutButton'>
                    <a href={CV} target='_blank' className='buttonDownload'> Descargar CV </a>    
                </div>
                
            </section>
        </div>

    )
}


export default About;