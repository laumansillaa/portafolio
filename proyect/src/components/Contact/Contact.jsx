import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cgoczyk', 'template_no9mltg', form.current, 'wL7kzoiVP0Ea4R_TF')
        e.target.reset();
    }


    return (
        
        <section id='contact' className='containerContact'>
            <div className='infoContact'>
                <div>
                    <h2>Contactame! </h2>
                </div>
                <div>
                    <p>Si estas buscando un desarrollador web comprometido, dispuesto a nuevos desafios, no dudes en contactarme.</p>
                </div>
            </div>
            <div className='formContact'>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <div className='formInput'>
                        <label>NOMBRE</label>
                        <input type='text' name='name' placeholder='Nombre' required />
                    </div>
                    <div className='formInput'>
                        <label>EMAIL</label>
                        <input type='email' name='email' placeholder='Email' required />
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
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </section>
        
    )

}

export default Contact;