import React, { useState } from 'react';
import './qualification.css';

const certificates = [
  {
    title: "CCNAv7: Introduction to Networks",
    org: "Cisco Networking Academy",
    date: "Nov 2022",
    file: "/certifications/Introduction to networks.jpg",
    type: "certificate",
  },
  {
    title: "Cybersecurity Essentials",
    org: "Cisco Networking Academy",
    date: "Oct 2022",
    file: "/certifications/cybersecurity essentials.jpg",
    type: "certificate",
  },
  {
    title: "PCAP - Programming Essentials in Python",
    org: "Cisco Networking Academy Partner",
    date: "Dec 2023",
    file: "/certifications/programming essentials in python.jpg",
    type: "certificate",
  },
  {
    title: "JavaScript Essentials 1 (JSE)",
    org: "Cisco Networking Academy Partner",
    date: "Dec 2023",
    file: "/certifications/javascript essentials 1.jpg",
    type: "certificate",
  },
  {
    title: "Network Defense",
    org: "Cisco Networking Academy",
    date: "Apr 2025",
    file: "/certifications/network defence.jpg",
    type: "certificate",
  },
  {
    title: "Endpoint Security",
    org: "Cisco Networking Academy",
    date: "Apr 2025",
    file: "/certifications/endpoint security.jpg",
    type: "certificate",
  },
  {
    title: "Ethical Hacker",
    org: "Cisco Networking Academy",
    date: "Apr 2025",
    file: "/certifications/ethical hacker.jpg",
    type: "certificate",
  },
];

const awards = [
  {
    title: "Business in Africa - The Age of Digitalization and New Business Models",
    org: "Offered by The Hague University of Applied Sciences and UNAM - The elective explored Africa's evolving business landscape and the transformative impact of emerging technologies, with a focus on blockchain.",
    date: "2025",
    file: "/certifications/Festus Helao Shatipamba.jpg",
    type: "award",
  },
];

const education = [
  {
    title: "Bachelor of Computer Science (Honours)",
    org: "University of Namibia",
    date: "2025",
  },
  {
    title: "Grade 12 NSSC Certificate",
    org: "J.G Van Der Wath Secondary School",
    date: "2017",
  },
];

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [modal, setModal] = useState({ open: false, file: null, title: "", type: "" });

  const toggleTab = (index) => setToggleState(index);

  const openModal = (file, title, type) => {
    setModal({ open: true, file, title, type });
    document.body.classList.add("disable-scroll");
  };
  const closeModal = () => {
    setModal({ open: false, file: null, title: "", type: "" });
    document.body.classList.remove("disable-scroll");
  };

  // Timeline renderer
  const renderTimeline = (data, withButton = false, buttonLabel = "View", type = "") =>
    data.map((item, idx) => {
      const isLast = idx === data.length - 1;
      return (
        <div className={`qualification__data ${idx % 2 === 0 ? "left" : "right"}`} key={item.title + idx}>
          {idx % 2 === 0 ? (
            <>
              <div className="qualification__info">
                <h3 className="qualification__title">{item.title}</h3>
                <span className="qualification__subtitle">{item.org}</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> {item.date}
                </div>
                {withButton && item.file && (
                  <button
                    className="button qualification__view-btn"
                    onClick={() => openModal(item.file, item.title, type || item.type)}
                  >
                    {buttonLabel}
                  </button>
                )}
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {!isLast && <span className="qualification__line"></span>}
              </div>
            </>
          ) : (
            <>
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {!isLast && <span className="qualification__line"></span>}
              </div>
              <div className="qualification__info">
                <h3 className="qualification__title">{item.title}</h3>
                <span className="qualification__subtitle">{item.org}</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> {item.date}
                </div>
                {withButton && item.file && (
                  <button
                    className="button qualification__view-btn"
                    onClick={() => openModal(item.file, item.title, type || item.type)}
                  >
                    {buttonLabel}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      );
    });

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-award qualification__icon"></i>
            Certifications
          </div>
          <div
            className={toggleState === 3 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={toggleState === 4 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(4)}
          >
            <i className="uil uil-trophy qualification__icon"></i>
            Awards
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {renderTimeline(education)}
          </div>
          {/* Certifications */}
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {renderTimeline(certificates, true, "View Certificate", "certificate")}
          </div>
          {/* Experience */}
          <div className={toggleState === 3 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data left">
              <div className="qualification__info">
                <h3 className="qualification__title">ICT Support Technician (Intern)</h3>
                <span className="qualification__subtitle">Unikela Enterprise CC</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Nov 2024 – Nov 2025
                </div>
                <ul className="qualification__responsibilities" style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                  <li>• Setting up new computers and configuring hardware</li>
                  <li>• Installing and troubleshooting software applications</li>
                  <li>• Cloning hard drives and maintaining system backups</li>
                  <li>• Installing and configuring network printers</li>
                  <li>• Providing remote technical support to clients</li>
                  <li>• Attending to client IT-related queries efficiently</li>
                </ul>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          {/* Awards */}
          <div className={toggleState === 4 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {renderTimeline(awards, true, "View Award", "award")}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="services__modal active-modal" onClick={closeModal}>
          <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
            <h4 className="services__modal-title">{modal.title}</h4>
            <i className="uil uil-times services__modal-close" onClick={closeModal} tabIndex={0} aria-label="Close"></i>
            <div style={{ width: "100%", minHeight: 300, textAlign: "center" }}>
              <img
                src={modal.file}
                alt={modal.title}
                style={{ maxWidth: "100%", maxHeight: "60vh", borderRadius: 8 }}
                loading="lazy"
                decoding="async"
              />
              <div style={{ marginTop: 16 }}>
                <a href={modal.file} target="_blank" rel="noopener noreferrer" className="button qualification__view-btn">
                  Open in new tab
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Qualification
