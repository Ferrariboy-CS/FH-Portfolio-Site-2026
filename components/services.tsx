'use client'

import { useState } from 'react'

const services = [
  {
    icon: 'uil-web-grid',
    title: 'Web Developer',
    modalTitle: 'Web Development',
    details: [
      'I build responsive and dynamic websites for businesses and individuals.',
      'Specialize in both frontend (HTML, CSS, JavaScript) and backend development.',
      'Manage website hosting and deployment processes.',
      'Expertise in creating and customizing WordPress websites for various industries.',
    ],
  },
  {
    icon: 'uil-laptop',
    title: 'Software Developer',
    modalTitle: 'Software Development',
    details: [
      'Develop custom software solutions tailored to business needs.',
      'Experience with desktop, web, and mobile applications.',
      'Focus on performance, scalability, and maintainability.',
      'Integrate APIs and third-party services.',
    ],
  },
  {
    icon: 'uil-server-network',
    title: 'Backend Developer',
    modalTitle: 'Backend Development',
    details: [
      'Design and implement robust backend systems.',
      'Database design and management.',
      'RESTful API development and integration.',
      'Security and authentication best practices.',
    ],
  },
  {
    icon: 'uil-apps',
    title: 'UI/UX Designer',
    modalTitle: 'UI/UX Design',
    details: [
      'Create intuitive, user-friendly interfaces for web and mobile.',
      'Wireframing and prototyping with Figma/Adobe XD.',
      'Focus on usability, accessibility, and responsive design.',
      'Deliver designs that enhance user engagement.',
    ],
  },
]

export default function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null)

  const openModal = (idx: number) => {
    setActiveModal(idx)
    document.body.classList.add('disable-scroll')
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.classList.remove('disable-scroll')
  }

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <h2 id="services-title" className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="bg-surface border border-border rounded-xl p-5 flex flex-col items-start">
              <i className={`uil ${service.icon} text-4xl text-accent mb-4`} />
              <h3 className="text-normal font-medium mb-6 leading-tight">
                {service.title.split(' ').map((word, i) =>
                  i === 1 ? <span key={i}><br />{word}</span> : word + ' '
                )}
              </h3>
              <button
                onClick={() => openModal(idx)}
                className="mt-auto flex items-center gap-1 text-accent font-medium hover:text-accent-strong transition-colors group"
              >
                View More
                <i className="uil uil-arrow-right transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {services.map((service, idx) =>
        activeModal === idx && (
          <div key={idx} className="fixed inset-0 z-modal bg-black/50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative bg-surface rounded-xl p-6 min-w-[300px] max-w-[95vw] border border-border shadow-modal animate-modal-in" onClick={(e) => e.stopPropagation()}>
              <h4 className="text-lg font-semibold mb-4">{service.modalTitle}</h4>
              <button 
                onClick={closeModal} 
                className="absolute top-4 right-4 text-2xl text-text-strong hover:text-accent-strong"
                aria-label="Close modal"
              >
                <i className="uil uil-times" aria-hidden="true" />
              </button>
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <i className="uil uil-check-circle text-accent mt-0.5" />
                    <p className="text-text-base">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      )}
    </section>
  )
}
