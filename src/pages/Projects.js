import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectSchema from '../components/project/ProjectSchema';
import { projectsData } from '../assets/data/data'

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
        window.scrollTo(0, 0);
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
                {
                    projectsData.map((project, index) => (
                        < ProjectSchema project={ project } index={ index } key={ index } length={ projectsData.length} />
                    ))
                }
                </div>
            </section>
        </main>
    )
}

export default Projects