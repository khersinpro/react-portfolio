import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../components/includes/Footer';
import Navbar from '../components/includes/Navbar';
import blogPhp from '../assets/projects/mon_blog2.png'
import twitter from '../assets/projects/react-twitter.png'
import groupomania from '../assets/projects/react-groupo.png'
import audiophile from '../assets/projects/react-audiophile.png'
import spaceTourism from '../assets/projects/react-space.png'
import streaming from '../assets/projects/react-stream.png'

const Projects = () => {
    gsap.registerPlugin(ScrollTrigger);
    const isPair = (num) => num % 2 === 0;

    const projectDisplay = (trigger, elem1, direction) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                start: "80px bottom"
                }
        })
        .fromTo(elem1,
            { opacity: 0, x: direction },
            { opacity: 1, duration: 0.6 , x: 0 }
            )
    }

    const highlight = () => {
        gsap.timeline()
        .fromTo(".animation-highlight",
        { width: 0, background: "#7ed6df" },
        { width: '100%', duration: 0.5 }, "= 0.2"
        )
    }

    useEffect(() => {
        highlight();
        for(let i =  1; i <= 6; i++) {
            const elem = document.getElementById(`project${i}`);
            if (isPair(i)) {
                projectDisplay(elem, elem, -200);
            } else {
                projectDisplay(elem, elem, 200);
            }
            
        }
    }, [])
    
    return (
    <>
        < Navbar />
        <main>
            <section className='mainTitle'>
                    <div className='mainTitle--container' >
                        <div className='mainTitle--container__animation'>
                            <h1 className='title'>Projets</h1>
                            <div className='animation-highlight'></div>
                        </div>
                    </div>
            </section>
            <section className='projects pt-100'>
                <div className='projects--container'>
                    <div className='projects--container__box reverse' id='project1'>
                        <div className='imageBox'>
                            <div className='imageBox--header'>
                                <div className='imageBox--header__ellipsis color1'></div>
                                <div className='imageBox--header__ellipsis color2'></div>
                                <div className='imageBox--header__ellipsis color3'></div>
                            </div>
                            <div className='imageBox--container'>
                                <img src={blogPhp} alt='blog php'/>
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
                                <img src={twitter} alt='twitter project'/>
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
                    
                    <div className='full-separator'></div>

                    <div className='projects--container__box' id='project4'>
                        <div className='imageBox'>
                            <div className='imageBox--header'>
                                <div className='imageBox--header__ellipsis color1'></div>
                                <div className='imageBox--header__ellipsis color2'></div>
                                <div className='imageBox--header__ellipsis color3'></div>
                            </div>
                            <div className='imageBox--container'>
                                <img src={audiophile} alt="audio shop" />
                            </div>
                        </div>
                        <div className='description pl-30'>
                            <h3>4. Projet Boutique Audiophile</h3>
                            <div className='separator'></div>
                            <div className='description--techno'>
                                <p className='description--techno__title'>Technologies :</p>
                                <ul className='description--techno__list'>
                                    <li className='list-color1'>React</li>
                                    <li className='list-color2'>Sass</li>
                                    <li className='list-color3'>Axios</li>
                                    <li className='list-color4'>LocalStorage</li>
                                </ul>
                            </div>
                            <p className='description--resume'>
                                Projet front-end réalisé avec le framework REACT, l'objectif était de reproduire une boutique audiophile
                                avec plusieurs catégories d'articles et une simulation de commande d'articles.
                            </p>
                            <div className='description--actionsBtn mt-20'>
                                <a className='button see-project-btn' target="blank" href="https://khersinpro.github.io/reactproject4/">Voir le projet</a>
                                <a className='button ml-20 see-code-btn' target="blank" href="https://github.com/khersinpro/reactproject4">Voir le code</a>
                            </div>
                        </div>
                    </div>

                    <div className='full-separator'></div>

                    <div className='projects--container__box reverse' id='project5'>
                        <div className='imageBox'>
                            <div className='imageBox--header'>
                                <div className='imageBox--header__ellipsis color1'></div>
                                <div className='imageBox--header__ellipsis color2'></div>
                                <div className='imageBox--header__ellipsis color3'></div>
                            </div>
                            <div className='imageBox--container'>
                                <img src={spaceTourism}  alt="space tourism"/>
                            </div>
                        </div>
                        <div className='description'>
                            <h3>5. Projet Space Tourism</h3>
                            <div className='separator'></div>
                            <div className='description--techno'>
                                <p className='description--techno__title'>Technologies :</p>
                                <ul className='description--techno__list'>
                                    <li className='list-color1'>React</li>
                                    <li className='list-color2'>Sass</li>
                                    <li className='list-color3'>Axios</li>
                                </ul>
                            </div>
                            <p className='description--resume'>
                                Projet front-end réalisé avec le framework REACT, l'objectif était de reproduire un site de promotion
                                pour du tourisme spacial, les maquettes du projet ont été fournit par le site frontend mentor.
                            </p>
                            <div className='description--actionsBtn mt-20'>
                                <a className='button see-project-btn' target="blank" href="https://khersinpro.github.io/reactproject1/">Voir le projet</a>
                                <a className='button ml-20 see-code-btn' target="blank" href="https://github.com/khersinpro/reactproject1">Voir le code</a>
                            </div>
                        </div>
                    </div>

                    <div className='full-separator'></div>
                    
                    <div className='projects--container__box' id='project6'> 
                        <div className='imageBox'>
                            <div className='imageBox--header'>
                                <div className='imageBox--header__ellipsis color1'></div>
                                <div className='imageBox--header__ellipsis color2'></div>
                                <div className='imageBox--header__ellipsis color3'></div>
                            </div>
                            <div className='imageBox--container'>
                                <img src={streaming} alt="web app streaming" />
                            </div>
                        </div>
                        <div className='description pl-30'>
                            <h3>6. Projet Web App Streaming</h3>
                            <div className='separator'></div>
                            <div className='description--techno'>
                                <p className='description--techno__title'>Technologies :</p>
                                <ul className='description--techno__list'>
                                    <li className='list-color1'>React</li>
                                    <li className='list-color2'>Sass</li>
                                    <li className='list-color3'>Axios</li>
                                </ul>
                            </div>
                            <p className='description--resume'>
                                Projet front-end réalisé avec le framework REACT, l'objectif était de reproduire un site de streaming
                                de film avec une classification par genre.
                            </p>
                            <div className='description--actionsBtn mt-20'>
                                <a className='button see-project-btn' target="blank" href="https://khersinpro.github.io/reactproject5/">Voir le projet</a>
                                <a className='button ml-20 see-code-btn' target="blank" href="https://github.com/khersinpro/reactproject5">Voir le code</a>
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

export default Projects