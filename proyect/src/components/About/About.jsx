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
import figma from '../../assets/stack/figma.png'
import ethereum from '../../assets/ethereum.svg'
import style from "./styles/About.module.css";
import './styles/about-screen-412.css'


const About = () => {

    const stackName = [{img: javascript, name: 'Javascript'}, {img: node, name: 'Node.js'}, {img: express, name:'Express'}, {img: postgre, name:'PostgreSQL'}, {img: mongodb, name:'MongoDB'}, {img: sequelize, name:'Sequelize'}, {img: react, name:'React'}, {img: redux, name: 'Redux'}, {img: ionic, name:'Ionic'}, {img: html, name:'HTML5'}, {img: git, name:'GIT'}, {img: postman, name:'Postman'}, {img: figma, name: 'Figma'}]

    return (

        <div className={style.aboutContainer} id='about'>
            <div className={style.contAboutDescription}>
                <div className={style.contTitle}>
                    <h3 className={style.aboutTitle}>¿Quien soy?</h3>
                </div>
                <div className={style.contInfo}>
                    <p className={style.aboutDescription}>Soy un entusiasta, apasionado por el desarrollo de aplicaciones que brinden soluciones practicas. Me considero una persona
                        responsable, con una gran capacidad de trabajo y una gran capacidad de adaptación a los cambios. Entre mis intereses se encuentra el mundo web3, donde espero pronto poder estar colaborando.
                    </p>
                    <img src={ethereum} alt='eth-svg' />
                    <div className='aboutButton'>
                        <a href={CV} target='_blank' className='buttonDownload'> Descargar CV </a>    
                    </div>
                </div>
            </div>

            <div className={style.contStack}>
                <div className={style.contTitle}>
                    <h3 className={style.stackDescription}>Stack tecnologico </h3>
                </div>
                <div className={style.contNameStack}>
                    {
                        stackName.map(e => {
                            return (
                                <div key={e} className={style.boxStack}>
                                    <img src={e.img} alt={`img-${e.name}`} className={style.imgIcon} />
                                    <h4 className={style.stack}>{e.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}


export default About;