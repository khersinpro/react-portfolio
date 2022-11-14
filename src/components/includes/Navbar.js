import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [toggle, setToggle] = useState(true);
    const [isScroll, setIsScroll] = useState(false);

    const scrollControl = () => {
        window.scrollY > 25 && !isScroll && setIsScroll(true);
        window.scrollY < 25 && isScroll && setIsScroll(false);
    }

    window.addEventListener('scroll', scrollControl);

return (
    <header className={`navbar ${isScroll ? "scrolled" : ""}`}>
        <Link className='navbar--logo' to='/' >KH</Link>
        <div className={`navbar--toggle ${toggle ? '' : 'open'}`} id="fs-button" onClick={() => setToggle(!toggle)}>
            <div className='navbar--toggle__icon' >
                <span className='line'></span>
            </div>
        </div>
        <div className={`navBox ${toggle ? '' : 'open'}`}>
            <nav className='navBox--navigation'>
                <Link to='/react-portfolio/' className='navBox--navigation__link' data-text='&nbsp;Accueil&nbsp;'>&nbsp;Accueil&nbsp;</Link>
                <Link to='/react-portfolio/about' className='navBox--navigation__link' data-text='&nbsp;Présentation&nbsp;'>&nbsp;Présentation&nbsp;</Link>
                <Link to='/react-portfolio/projects' className='navBox--navigation__link' data-text='&nbsp;Projets&nbsp;'>&nbsp;Projets&nbsp;</Link>
                <Link to='/react-portfolio/contact' className='navBox--navigation__link' data-text='&nbsp;Contact&nbsp;'>&nbsp;Contact&nbsp;</Link>
            </nav>
        </div>
    </header>
    )
}

export default Navbar