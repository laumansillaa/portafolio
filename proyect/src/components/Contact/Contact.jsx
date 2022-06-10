import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import telegram from "../../assets/telegram.png";
import "./contact.css";

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cgoczyk', 'template_no9mltg', form.current, 'wL7kzoiVP0Ea4R_TF')
        e.target.reset();
    }

    // const handleClick = () => {
    //     e.preventDefault();
    //     const btn = document.querySelector("#btn")
    //     btnText.innerHTML = 'Gracias!';
    //     const btnText = document.querySelector("#btnText")
    //     btn.className.add('active')
    // }


    return (
        
        <section id='contact' className='containerContact'>
            <div className='infoContact'>
                <div className='containTitle'>
                    <h2 className='contactTitle'>Contactame! </h2>
                </div>
                <div className='containDescription'>
                    <p className='contactDescription'>Si estas buscando un desarrollador web comprometido, dispuesto a nuevos desafios, no dudes en contactarme.</p>
                </div>
                <div className='containIcon'>
                    <div>
                        <div>
                            <label className='contactLabel'>Redes - Email</label>
                        </div>
                        <a href="https://www.github.com/laumansillaa" className='icon'><img src={github} alt='img github' title='Github'/></a>
                        <a href="https://www.linkedin.com/in/lautaro-mansilla" className='icon' ><img src={linkedin} alt='img linkedin' title='Linkedin'/></a>
                        <a href="mailto:mansillaalau@gmail.com" className='icon'><img src={gmail} alt='img gmail' title='Gmail'/></a>
                    </div>
                    <div>
                        <div>
                            <label className='contactLabel'>Telefono</label>
                        </div>
                        <a href="https://wa.me/542215062415" className='icon' ><img src={whatsapp} alt='img whatsapp' title='WhatsApp'/></a>
                        <a href="https://t.me/Laumansillaa" className='icon'><img src={telegram} alt='img telegram' title='Telegram'/></a>
                    </div>
                </div>
            </div>
            <div className='formContact'>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <div className='formInput'>
                        <div className='containName'>
                            <label className='name'>NOMBRE</label>
                            <input type='text' name='name' placeholder='Nombre' required className='inputContact' />
                        </div>
                    </div>
                    <div className='formInput'>
                        <div className='containEmail'>
                            <label className='email'>EMAIL</label>
                            <input type='email' name='email' placeholder='Email' required className='inputContact' />
                        </div>
                    </div>
                    <div className='messageInput'>
                        <div className='containLabelMessage'>
                            <label className='messageLabel'>MENSAJE</label>
                        </div>
                        <div className='containText'>
                            <textarea name='message' placeholder='Escribe tu mensaje...' className='textInput' required ></textarea>
                        </div>
                    </div>
                    <div className='containSubmit'>
                        <button type='submit' className='btn'>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
        
    )

}

export default Contact;