import React from 'react'
import "./footer.css"

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__left">
                    <h1 className="footer__title">Festus Helao<br/>Shatipamba</h1>
                    <span className="footer__subtitle">Software Developer</span>
                </div>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                    <li>
                        <a href="#work" className="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/festushelao.shatipamba/" className='footer__social-link' target='_blank' rel="noopener noreferrer">
                        <i className='bx bxl-facebook'></i>
                    </a>
                    <a href="https://www.instagram.com/helao_nafimane?igsh=MWJpZmY1anl4ZW56bA==" className='footer__social-link' target='_blank' rel="noopener noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/festus-helao-shatipamba" className='footer__social-link' target='_blank' rel="noopener noreferrer">
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </div>
            </div>
            <div className="footer__copyright">
                {year} © ShatiScripts. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer