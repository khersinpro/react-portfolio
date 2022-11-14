import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../components/includes/Navbar';
import Footer from '../components/includes/Footer';
import Typewriter from 'typewriter-effect';
import blogPhp from '../assets/projects/mon_blog2.png'
import twitter from '../assets/projects/react-twitter.png'
import groupomania from '../assets/projects/react-groupo.png'

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    gsap.registerPlugin(ScrollTrigger);

    const typeConfiguration = <Typewriter
        onInit={(typewriter) => {
            typewriter
            .changeDelay(50)
            .changeDeleteSpeed(30)
            .typeString("Moi c'est Kevin, ")
            .pauseFor(300)
            .typeString("<span> Développeur</span><span style='color:#27ae60; font-weight: 600;'> Javascript</span>")
            .pauseFor(1200)
            .deleteChars(10)
            .typeString("<span style='color: #8395a7; font-weight: 600;'> PHP</span")
            .pauseFor(1200)
            .deleteChars(3)
            .typeString("<span style='color: #4361ee; font-weight: 600;'> React</span")
            .pauseFor(1200)
            .deleteChars(5)
            .typeString("<span style='color: #fca311; font-weight: 600;'>NodeJs-Express</span>")
            .start()
        }}
    /> ;
    const desktopHomeAnim = (elem, elem1, elem2, x) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: "80px bottom"
            }
        })
        .fromTo(elem,  
            { opacity: 0, x: x },
            { opacity: 1, x: 0, delay: 0.4, duration: 0.5 }
        )
        .fromTo(elem1,
            { opacity: 0 },
            { opacity: 1, stagger: 0.20 , duration: 0.4 }
        )
        .fromTo(elem2,  
            { opacity: 0},
            { opacity: 1, duration: 0.3, stagger: 0.25}
        )
    }

        
    const isPair = (num) => num % 2 === 0;

    useEffect(() => {
        setLoaded(true);
        
            for( let i = 1; i < 4; i++ ) {
                const elem = document.getElementById(`project${i}`);
                const elemBtn = elem.querySelectorAll('.button');
                const elemList = elem.querySelectorAll('li');

                isPair(i) && desktopHomeAnim(elem, elemList, elemBtn, -100);
                !isPair(i) && desktopHomeAnim(elem, elemList, elemBtn, 100);
            }
    }, [])

    return (
        <>
            < Navbar />
            <main>
                <section className='presentation'>
                    <div className='presentation--container'>
                        <h1 className='presentation--container__title'>Bienvenue sur mon <br/> <span className={`highlight ${loaded ? "loaded" : ""}`}>portfolio</span></h1>
                        <div className='presentation--container__typeText'>{typeConfiguration}</div>
                    </div>
                </section>
                <section className='projects'>
                    <div className='projects--title'>
                        <h2>
                            <span className={`highlight-projects ${loaded ? "loaded" : ""}`}>
                                Mes projets
                            </span>
                        </h2>
                    </div>
                    <div className='projects--container'>
                        <div className='full-separator'></div>

                        <div className='projects--container__box reverse' id='project1'>
                        <div className='imageBox'>
                            <div className='imageBox--header'>
                                <div className='imageBox--header__ellipsis color1'></div>
                                <div className='imageBox--header__ellipsis color2'></div>
                                <div className='imageBox--header__ellipsis color3'></div>
                            </div>
                            <div className='imageBox--container'>
                                <img src={blogPhp} alt='blog php' />
                            </div>
                        </div>
                        <div className='description'>
                            <h3>1. Projet blog PHP</h3>
                            <div className='separator'></div>
                            <div className='description--techno'>
                                <p className='description--techno__title'>Technologies :</p>
                                <ul className='description--techno__list'>
                                    <li className='list-color1'>PHP</li>
                                    <li className='list-color2'>NGINX</li>
                                    <li className='list-color3'>PDO</li>
                                    <li className='list-color1'>MySQL</li>
                                    <li className='list-color2'>POO</li>
                                </ul>
                            </div>
                            <p className='description--resume'>
                                Projet réalisé avec PHP ainsi qu'une base de données MySQL,
                                les utilisateurs ont la possibilité de créer un compte et de publier/modifier/supprimer leurs articles.
                            </p>
                            <div className='description--actionsBtn mt-20'>
                                <a className='button see-project-btn' target="blank" href="https://www.projet-entrainement-khersin.site/">Voir le projet</a>
                                <a className='button ml-20 see-code-btn' target="blank" href="https://github.com/khersinpro/php_blog_v5/">Voir le code</a>
                            </div>
                        </div>
                    </div>

                    <div className='full-separator'></div>

                    <div className='projects--container__box' id='project2'>
                        <div className='imageBox'>
                            <div className='imageBox--header'>
                                <div className='imageBox--header__ellipsis color1'></div>
                                <div className='imageBox--header__ellipsis color2'></div>
                                <div className='imageBox--header__ellipsis color3'></div>
                            </div>
                            <div className='imageBox--container'>
                                <img src={twitter} alt='twitter project' />
                            </div>
                        </div>
                        <div className='description pl-30'>
                            <h3>2. Projet Twitter</h3>
                            <div className='separator'></div>
                            <div className='description--techno'>
                                <p className='description--techno__title'>Technologies :</p>
                                <ul className='description--techno__list'>
                                    <li className='list-color1'>NodeJs</li>
                                    <li className='list-color2'>Express</li>
                                    <li className='list-color3'>MongoDB</li>
                                    <li className='list-color4'>Socket.IO</li>
                                    <li className='list-color1'>Csurf</li>
                                    <li className='list-color2'>NodeMailer</li>
                                </ul>
                            </div>
                            <p className='description--resume'>
                                Petit réseau social crée avec NodeJs-Express ainsi qu'une base de données MongoDB, 
                                un service de tchat instantané y est présent grâce à la bibliothèque Socket.IO.
                            </p>
                            <div className='description--actionsBtn mt-20'>
                                <a className='button see-project-btn' target='blank' href="https://www.k-hersin.com/auth/signin/form" >Voir le projet</a>
                                <a className='button ml-20 see-code-btn' target='blank' href="https://github.com/khersinpro/twitter-public-code" >Voir le code</a>
                            </div>
                        </div>
                    </div>

                    <div className='full-separator'></div>
                    
                    <div className='projects--container__box reverse' id='project3'> 
                        <div className='imageBox'>
                            <div className='imageBox--header'>
                                <div className='imageBox--header__ellipsis color1'></div>
                                <div className='imageBox--header__ellipsis color2'></div>
                                <div className='imageBox--header__ellipsis color3'></div>
                            </div>
                            <div className='imageBox--container'>
                                <img src={groupomania}  alt="Openclassrooms groupomania"/>
                            </div>
                        </div>
                        <div className='description'>
                            <h3>3. Réseau social d'entreprise</h3>
                            <div className='separator'></div>
                            <div className='description--techno'>
                                <p className='description--techno__title'>Technologies :</p>
                                <ul className='description--techno__list'>
                                    <li className='list-color1'>React</li>
                                    <li className='list-color2'>NodeJs</li>
                                    <li className='list-color3'>Express</li>
                                    <li className='list-color4'>MySQL</li>
                                    <li className='list-color1'>JWT</li>
                                </ul>
                            </div>
                            <p className='description--resume'>
                                Projet de fin d'études chez OpenClassrooms, l'objectif était de créer un réseau social d'entreprise
                                conforme aux normes de sécurité avec la possibilité de créer des publications, commentaires ...
                            </p>
                            <div className='description--actionsBtn mt-20'>
                                <a className='button see-project-btn' target='blank' href="https://github.com/khersinpro/P7_Groupomania">Voir le code</a>
                            </div>
                        </div>
                    </div>
                        <div className='projects--nextButton'>
                            <Link to='/react-portfolio/projects' className='button dark'>Plus de projets</Link>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home