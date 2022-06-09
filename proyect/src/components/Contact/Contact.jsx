import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cgoczyk', 'template_no9mltg', form.current, 'wL7kzoiVP0Ea4R_TF')
        e.target.reset();
    }


    return (
        
        <section id='contact'>
            <h2>Contactame! </h2>
            <p>Si estas buscando un desarrollador web comprometido, dispuesto a nuevos desafios, no dudes en contactarme.</p>
            <div>
                <form ref={form} onSubmit={sendEmail} >
                    <input type='text' name='name' placeholder='Nombre' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <textarea name='message' placeholder='Escribe tu mensaje...' required ></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </section>
        
    )

}

export default Contact;