import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import Footer from '../components/includes/Footer';
import Navbar from '../components/includes/Navbar';

const Contact = () => {
    const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formError, setFormError] = useState("");
    const [formSubmited, setFormSubmited] = useState("");

    const highlight = () => {
        gsap.timeline()
        .fromTo(".animation-highlight",
        { width: 0, background: "#b8e994" },
        { width: '100%', duration: 0.5 }, "= 0.2"
        )
    }

    const submitForm = e => {
        e.preventDefault();
        if (name && firstname && email && message) {
            const formData = new FormData();
            formData.append('surname', name);
            formData.append('firstname', firstname);
            formData.append('email', email);
            formData.append('message', message);

            fetch("https://getform.io/f/ceae3d30-dfaf-4033-a2f1-d8d8e9fb57fa", {
            method: "POST",
            body: formData
            })
            .then(() => {
                setFormSubmited('Message envoyé !');
                setFormError('')
                setName('');
                setFirstname('');
                setEmail('');
                setMessage('');
            })
            .catch(err => {
                setFormError('Une erreur est survenue...');
                setFormSubmited('');
            })
        } else {
            setFormSubmited('');
            setFormError('Le formulaire est mal remplis.')
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        highlight();
    }, [])
    
    return (
        <>
            < Navbar />
            <main>
            <section className='mainTitle'>
                    <div className='mainTitle--container' >
                        <div className='mainTitle--container__animation'>
                            <h1 className='title'>Contact</h1>
                            <div className='animation-highlight'></div>
                        </div>
                    </div>
                </section>
                <section className='contact-section'>
                    <div className='contact'>
                        <div className='contact--links' >
                            <h2>Entrons en contact</h2>
                            <div className='contact--links__box'>
                                <a href='mailto:khersinpro@gmail.com'>
                                    <i class="fa-regular fa-envelope"></i>
                                    <span>Contact par email</span>
                                </a>
                            </div>
                            <div className='contact--links__box'>
                                <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='blank'>
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    <span>Contact par Linkedin</span>
                                </a>
                            </div>
                        </div>
                        <div  className='contact--form'>
                            <form onSubmit={submitForm}>
                                <div className='names-box'>
                                    <input onChange={e => setName(e.target.value)} value={name} className='input-text' type="text" placeHolder='Prénom' name="surname" />
                                    <input onChange={e => setFirstname(e.target.value)} value={firstname} className='input-text' type="text" placeHolder='Nom'  name="firstname" />
                                </div>
                                <input onChange={e => setEmail(e.target.value)} value={email} className='input-text input-email' type="email" placeHolder='Email' name="email" />
                                <textarea onChange={e => setMessage(e.target.value)} value={message} placeHolder='Message' name="message" />
                                <input className='input-text input-sub' type='submit' value="Envoyer" />
                                {formError && <p className='error-message'>{formError}</p>}
                                {formSubmited && <p className='success-message'>{formSubmited}</p>}
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            < Footer />
        </>
    )
}

export default Contact