import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-award qualification__icon"></i>
                        Certifications
                    </div>
                    <div className={toggleState === 3 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(3)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                    <div className={toggleState === 4 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(4)}
                    >
                        <i className="uil uil-trophy qualification__icon"></i>
                        Awards
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education */}
                    <div className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Computer Science (Honours)</h3>
                                <span className="qualification__subtitle">
                                    University of Namibia
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Grade 12 NSSC Certificate</h3>
                                <span className="qualification__subtitle">
                                    J.G Van Der Wath Secondary School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                    {/* Certifications */}
                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">CCNAv7: Introduction to Networks</h3>
                                <span className="qualification__subtitle">
                                    Cisco Networking Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Nov 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Cybersecurity Essentials</h3>
                                <span className="qualification__subtitle">
                                    Cisco Networking Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Oct 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">PCAP - Programming Essentials in Python</h3>
                                <span className="qualification__subtitle">
                                    Cisco Networking Academy Partner
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Dec 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">JavaScript Essentials 1 (JSE)</h3>
                                <span className="qualification__subtitle">
                                    Cisco Networking Academy Partner
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Dec 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Network Defense</h3>
                                <span className="qualification__subtitle">
                                    Cisco Networking Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Endpoint Security</h3>
                                <span className="qualification__subtitle">
                                    Cisco Networking Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Ethical Hacker</h3>
                                <span className="qualification__subtitle">
                                    Cisco Networking Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                    {/* Experience */}
                    <div className={toggleState === 3
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IT Technician</h3>
                                <span className="qualification__subtitle">
                                    Rubinstein Chess Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> May 2024 – August 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                    {/* Awards */}
                    <div className={toggleState === 4
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Business in Africa - The Age of Digitalization and New Business Models</h3>
                                <span className="qualification__subtitle">
                                    Explored Africa's evolving business landscape and the transformative impact of emerging technologies, with a focus on blockchain.
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2025</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification