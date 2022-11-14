import React, { useEffect } from 'react';
import Navbar from '../components/includes/Navbar';
import profilAvatar from '../assets/portfolio-avatar.webp';
import Footer from '../components/includes/Footer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);

    const aboutAnimation = (elem) => {
        gsap.timeline()
        .fromTo( elem,
            { opacity: 0},
            { opacity: 1, duration: 1.5 }
        )
    }

    // Display progress bar dynamically
    const progressBar = (event) => {
        const allSkills = document.querySelectorAll('.about--presentation__skill');

        allSkills.forEach( skillbar => {
            const skillFill = skillbar.querySelector('.skillBar--full');
            const displayPercentage = skillbar.querySelector('.skill-percentage');
            const percentage = parseInt(skillbar.getAttribute('data-percentage')); 
            let width = 0;

            const count = () => {
                if (width === percentage) {
                    clearInterval(interval);
                } else {
                    width++;
                    skillFill.style.width = width + "%";
                    displayPercentage.textContent = width + "%";
                }
            }

            let interval = setInterval(count , 20);
        })
        event.kill();
    }

    const highlight = () => {
        gsap.timeline()
        .fromTo(".animation-highlight",
        { width: 0, background: "#bdc3c7" },
        { width: '100%', duration: 0.5 }, "= 0.2"
        )
    }

    useEffect(() => {
        highlight();
        aboutAnimation('.about')

        // skill bar animation scrollTrigger
        ScrollTrigger.create({
            trigger: "#launch",
            start: 'top bottom',
            onEnter: (self) => progressBar(self)
        })
    }, [])
    
    return (
        <>
            < Navbar />
            <main>
                <section className='mainTitle'>
                    <div className='mainTitle--container' >
                        <div className='mainTitle--container__animation'>
                            <h1 className='title'>Présentation</h1>
                            <div className='animation-highlight'></div>
                        </div>
                    </div>
                </section>
                <section className='about-section'>
                    <div className='about'>
                        <div className='about--imgContainer'>
                            <img src={profilAvatar} alt="profile" />
                        </div>
                        <div className='about--presentation'>
                            <h2>Kevin Hersin</h2>
                            <div className='separator'></div>
                            <p className='about--presentation__text'>
                                Passionné par la programmation et le monde numérique, je pratique le développement web depuis 2021 et je suis titulaire de titre professionnel de niveau V "Développeur intégrateur web" obtenu en 2022.
                                <br/>
                                Créatif, débrouillard et opiniâtre, je suis en mesure de développer tous types d'applications avec le framework REACT, j'ai une préférence pour le développement backend avec le développement d'applications NodeJs-Express accompagné d'une base de donnée MySQL ou MongoDB.
                            </p>
                            
                            <div className='about--presentation__skill' data-percentage='90' >
                                <div className='skill-description'>
                                        <p className='skill-name'>HTML / CSS</p>
                                        <p className='skill-percentage'>0%</p>
                                </div>   
                                <div className='skillBar-container'>
                                    <div className='skillBar-empty'>
                                        <div className='skillBar--full'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='about--presentation__skill' data-percentage='85'>
                                <div className='skill-description'>
                                        <p className='skill-name'>Javascript</p>
                                        <p className='skill-percentage'>0%</p>
                                </div>   
                                <div className='skillBar-container'>
                                    <div className='skillBar-empty'>
                                        <div className='skillBar--full'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='about--presentation__skill' data-percentage='80'>
                                <div className='skill-description'>
                                        <p className='skill-name'>PHP</p>
                                        <p className='skill-percentage'>0%</p>
                                </div>   
                                <div className='skillBar-container'>
                                    <div className='skillBar-empty'>
                                        <div className='skillBar--full'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='about--presentation__skill' id='launch' data-percentage='85'>
                                <div className='skill-description'>
                                        <p className='skill-name'>NodeJs - Express</p>
                                        <p className='skill-percentage'>0%</p>
                                </div>   
                                <div className='skillBar-container'>
                                    <div className='skillBar-empty'>
                                        <div className='skillBar--full'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='about--presentation__skill' data-percentage='70'>
                                <div className='skill-description'>
                                        <p className='skill-name'>React</p>
                                        <p className='skill-percentage'>0%</p>
                                </div>   
                                <div className='skillBar-container'>
                                    <div className='skillBar-empty'>
                                        <div className='skillBar--full'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='about--presentation__skill' data-percentage='85'>
                                <div className='skill-description'>
                                        <p className='skill-name'>MySQL database</p>
                                        <p className='skill-percentage'>0%</p>
                                </div>   
                                <div className='skillBar-container'>
                                    <div className='skillBar-empty'>
                                        <div className='skillBar--full'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='about--presentation__skill' data-percentage='70'>
                                <div className='skill-description'>
                                        <p className='skill-name'>MongoDB</p>
                                        <p className='skill-percentage'>0%</p>
                                </div>   
                                <div className='skillBar-container'>
                                    <div className='skillBar-empty'>
                                        <div className='skillBar--full'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            < Footer />
        </>
    )
}

export default About