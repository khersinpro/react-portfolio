import React from 'react'

const Footer = () => {
    return (
        <footer>
            <ul className='socialNav'>
                <li className='socialNav--box'>
                    <a href='https://github.com/khersinpro' target="blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li className='socialNav--box'>
                    <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target="blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
                <li className='socialNav--box'>
                    <a href='mailto:khersinpro@gmail.com' target="blank">
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer