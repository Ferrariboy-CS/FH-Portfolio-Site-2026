import React, { useState } from "react";
import "./services.css";

const services = [
  {
    icon: "uil uil-web-grid",
    title: "Web Developer",
    modalTitle: "Web Development",
    details: [
      "I build responsive and dynamic websites for businesses and individuals.",
      "Specialize in both frontend (HTML, CSS, JavaScript) and backend development.",
      "Manage website hosting and deployment processes.",
      "Expertise in creating and customizing WordPress websites for various industries.",
    ],
  },
  {
    icon: "uil uil-laptop",
    title: "Software Developer",
    modalTitle: "Software Development",
    details: [
      "Develop custom software solutions tailored to business needs.",
      "Experience with desktop, web, and mobile applications.",
      "Focus on performance, scalability, and maintainability.",
      "Integrate APIs and third-party services.",
    ],
  },
  {
    icon: "uil uil-server-network",
    title: "Backend Developer",
    modalTitle: "Backend Development",
    details: [
      "Design and implement robust backend systems.",
      "Database design and management.",
      "RESTful API development and integration.",
      "Security and authentication best practices.",
    ],
  },
  {
    icon: "uil uil-apps",
    title: "UI/UX Designer",
    modalTitle: "UI/UX Design",
    details: [
      "Create intuitive, user-friendly interfaces for web and mobile.",
      "Wireframing and prototyping with Figma/Adobe XD.",
      "Focus on usability, accessibility, and responsive design.",
      "Deliver designs that enhance user engagement.",
    ],
  },
];

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = idx => {
    setActiveModal(idx);
    document.body.classList.add("disable-scroll");
  };
  const closeModal = () => {
    setActiveModal(null);
    document.body.classList.remove("disable-scroll");
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        {services.map((service, idx) => (
          <div className="services__content" key={idx}>
            <i className={`${service.icon} services__icon`}></i>
            <h3 className="services__title">
              {service.title.split(" ").map((t, i) =>
                i === 1 ? <><br key={i} />{t}</> : t + " "
              )}
            </h3>
            <button
              className="services__button"
              onClick={() => openModal(idx)}
              tabIndex={0}
              aria-label={`View more about ${service.title}`}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </button>
            <div className={`services__modal${activeModal === idx ? " active-modal" : ""}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  {service.modalTitle}
                </h4>
                <i
                  className="uil uil-times services__modal-close"
                  onClick={closeModal}
                  tabIndex={0}
                  aria-label="Close"
                ></i>
                <ul className="services__modal-services grid">
                  {service.details.map((detail, i) => (
                    <li className="services__modal-service" key={i}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;