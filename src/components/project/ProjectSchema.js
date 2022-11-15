import React from 'react'

const ProjectSchema = ({ project, index, length }) => {
    const isPair = (num) => num % 2 === 0;

    return (
        <>
            <div className={`projects--container__box ${ isPair(index + 1)? '' : 'reverse' } `} id={'project'+ (index + 1)} >
                <div className='imageBox'>
                    <div className='imageBox--header'>
                        <div className='imageBox--header__ellipsis color1'></div>
                        <div className='imageBox--header__ellipsis color2'></div>
                        <div className='imageBox--header__ellipsis color3'></div>
                    </div>
                    <div className='imageBox--container'>
                        <img src={ project.image } alt={ project.alt } />
                    </div>
                </div>
                <div className={`description ${ isPair(index +1) ? 'pl-30' : '' } `} >
                    <h3>{ index + 1 }. { project.title }</h3>
                    <div className='separator'></div>
                    <div className='description--techno'>
                        <p className='description--techno__title'>Technologies :</p>
                        <ul className='description--techno__list'>
                            {
                                project.techno.map((techno, index) => (
                                    <li className={"list-color" + (index + 1 > 4 ? index + 1 - 4 : index + 1) } key={index}>{ techno }</li>
                                ))
                            }
                        </ul>
                    </div>
                    <p className='description--resume'>{ project.resume }</p>
                    <div className='description--actionsBtn mt-20'>
                        { project.live && <a className='button see-project-btn' target="blank" href={ project.live } >Voir le projet</a> }
                        { project.code && <a className={`button see-code-btn ${project.live ? 'ml-20' : ''}`} target="blank" href={ project.code } >Voir le code</a> }
                    </div>
                </div>
            </div>
            { index + 1 < length && <div className='full-separator'></div> }
        </>
    )
}

export default ProjectSchema