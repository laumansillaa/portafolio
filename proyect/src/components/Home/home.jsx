import React from 'react';
import photo from "../../assets/photo.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import telegram from "../../assets/telegram.png";
import About from '../About/About';
import Contact from '../Contact/Contact'
import Project from '../Project/Project';
import "./home.css";


const Home = () => {
    return (
        <div className='home'>
            <header id='header'>
                <div className='inner'>
                    <a ><img src={photo} alt='jpg not found' className='avatar'/></a>
                    <h1><strong>Lautaro Mansilla</strong> - Fullstack Web Developer</h1>
                </div>
            </header>
            <div>
                <About/>
            </div>
            
            <div>
                <Project/>
            </div>
            <div>
                <Contact />
            </div>
            <footer>
                <div className='iconsFooter'>
                    <a href="https://www.github.com/laumansillaa" ><img src={github} alt='img github' title='Github'/></a>
                    <a href="mailto:mansillaalau@gmail.com" ><img src={gmail} alt='img gmail' title='Gmail'/></a>
                    <a href="https://www.linkedin.com/in/lautaro-mansilla" ><img src={linkedin} alt='img linkedin' title='Linkedin'/></a>
                    <a href="https://wa.me/542215062415" ><img src={whatsapp} alt='img whatsapp' title='WhatsApp'/></a>
                    <a href="https://t.me/Laumansillaa"><img src={telegram} alt='img telegram' title='Telegram'/></a>
                </div>
                <div className='copyright'>
                    <a >&copy; Lautaro Mansilla - FullStack Web Developer </a>
                </div>
            </footer>
        </div>
    )
}



export default Home;