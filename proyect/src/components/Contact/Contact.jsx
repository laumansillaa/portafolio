import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import send from '../../assets/svg/send.svg'
import gmailB from '../../assets/svg/gmailB.svg'
import linkedinB from '../../assets/svg/linkedinB.svg'
import githubB from '../../assets/svg/githubB.svg'
import validateEmail from '../../utils/utils'
import style from "./styles/contact.module.css";



const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [error, setError] = useState(null)
    const [open, setOpen] = useState(null)

    const [errorMessage, setErrorMessage] = useState(true)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }


    useEffect(() => {
        validateEmail(form.email) ? setError(false) : setError(true)
    }, [form.email])

    // useEffect(() => {
    //     closeNotification()
    // }, [open])

    const sendEmail = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.message) {
            emailjs.send('service_cgoczyk', 'template_no9mltg', form, 'wL7kzoiVP0Ea4R_TF')
            .then(function(response) {
                setOpen(true)
                console.log('Succes', response.status, response.text)
            }, function(error) {
                setErrorMessage(true)
                setOpen(true)
                console.log('Failed', error)
            })
            // e.target.reset();
        } else {
            alert('Complete todos los campos')
        }
    }
    // console.log(open, 'hola')

    const notification = () => {
        if (open) {
            return (
                <div className={errorMessage ? style.errorNotification : style.notification}>
                    <h4>{errorMessage ? 'Hubo un error al enviar tu mensaje' : 
                    'Mensaje enviado con exito!'}</h4>
                </div>
            )
        }
    }

    // const closeNotification = () => {
    //     if (open) {
    //         setTimeout(setOpen, 4000, null)
    //         const reload = window.location.reload()
    //     }
    // }

    return (
        
        <section id='contact' className={style.containerContact}>
            <div className={style.infoContact}>
                <div className={style.contTitleForm}>
                    <h2 className={style.contactTitle}>Contactame</h2>
                </div>
                <div className={style.contDescription}>
                    <p className={style.contactDescription}>Si estas buscando un desarrollador web comprometido, dispuesto a nuevos desafios, no dudes en contactarme.
                        </p>
                </div>
                <div className={style.containIcon}>
                    <div className={style.cont}>
                        <a href="https://www.linkedin.com/in/lautaro-mansilla" 
                            className={style.icon} 
                            target="_blank" ><img src={linkedinB} alt='img linkedin' title='Linkedin' className={style.iconSvg}/></a>
                        <a href="mailto:mansillaalau@gmail.com" 
                            className={style.icon} 
                            target="_blank"><img src={gmailB} alt='img gmail' title='Gmail' className={style.iconSvg}/></a>
                        <a href="https://www.github.com/laumansillaa" 
                            className={style.icon} 
                            target="_blank"><img src={githubB} alt='img github' title='Github' className={style.iconSvg}/></a>
                    </div>
                </div>
            </div>
            <div className={style.formContact}>
                <form onSubmit={sendEmail} className={style.form}>
                    <div className={style.contInput}>
                        <input type='text' 
                            name='name' 
                            placeholder='Nombre' 
                            required 
                            onChange={e => handleChange(e)}
                            className={style.inputContact} />
                    </div>
                    <div className={style.contInput}>
                        <input type='email' 
                            name='email' 
                            placeholder='Email' 
                            required 
                            onChange={e => handleChange(e)}
                            className={style.inputContact} />
                        {
                            error ? 
                                <h4 className={style.emailError}>Ingrese un email valido</h4> : <></>
                        }
                    </div>
                    <div className={style.contTextarea}>
                        <textarea name='message' 
                            placeholder='Escribe tu mensaje...' 
                            required
                            onChange={e => handleChange(e)} 
                            className={style.textArea} 
                            ></textarea>
                    </div>
                        {   
                            <>
                                {notification()}
                            </>
                        }
                    <div className={style.contBtnSubmit}>
                        <button type='submit' className={style.btn} disabled={!form.name & !form.email & !form.message}>
                            Enviar
                            <img src={send} alt='send' className={style.sendBtn} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
        
    )

}

export default Contact;