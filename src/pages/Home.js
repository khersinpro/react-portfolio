import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from '../assets/data/data'
import ProjectSchema from '../components/project/ProjectSchema';
import Typewriter from 'typewriter-effect';


const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    const [loaded, setLoaded] = useState(false);
    const isPair = (num) => num % 2 === 0;

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
            start: "50px bottom"
            }
        })
        .fromTo(elem,  
            { opacity: 0, x: x },
            { opacity: 1, x: 0, delay: 0.4, duration: 0.5 }
        )
        .fromTo(elem1,
            { opacity: 0 },
            { opacity: 1, stagger: 0.20 , duration: 0.4 }, "-=0.2"
        )
        .fromTo(elem2,  
            { opacity: 0},
            { opacity: 1, duration: 0.3, stagger: 0.25}
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0);
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
                    {
                        projectsData.slice(0, 3).map((project, index) => (
                            < ProjectSchema project={ project } index={ index } key={ index } length={ 3 } />
                        ))
                    }
                    <div className='projects--nextButton'>
                        <Link to='/react-portfolio/projects' className='button dark'>Plus de projets</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home