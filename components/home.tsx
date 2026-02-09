'use client'

import Image from 'next/image'

const socialLinks = [
  { href: 'https://www.instagram.com/helao_nafimane?igsh=MWJpZmY1anl4ZW56bA==', icon: 'uil-instagram', label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/festus-helao-shatipamba', icon: 'uil-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/Ferrariboy99', icon: 'uil-github-alt', label: 'GitHub' },
]

export default function Home() {
  return (
    <section id="home" className="section min-h-screen flex items-center pt-20 md:pt-24" aria-label="Home section">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-8 max-sm:flex max-sm:flex-col-reverse max-sm:items-center max-sm:text-center">
          <div className="flex gap-4 md:flex-col md:gap-4 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-2xl text-text-strong transition-all hover:text-accent-strong hover:-translate-y-1 hover:scale-110"
              >
                <i className={`uil ${link.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="profile-card mx-auto md:order-1 md:justify-self-center">
            <div className="profile-card__image">
              <Image
                src="/Propic.png"
                alt="Festus Helao Shatipamba"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
              />
              <div className="profile-card__info">
                <span className="profile-card__name">@ferrariboy</span>
              </div>
            </div>
          </div>

          <div className="md:order-2">
            <h1 className="text-big text-text-strong font-semibold leading-tight mb-2">
              Festus Helao Shatipamba
            </h1>
            <h3 className="relative text-h3 text-text-base font-normal mb-4 pl-0 sm:pl-20 before:hidden sm:before:block before:absolute before:left-0 before:top-1/2 before:w-16 before:h-px before:bg-text-base">
              Computer Science
            </h3>
            <p className="max-w-md text-text-subtle mb-8" />
            <a href="#contact" className="btn">
              Contact Me <span role="img" aria-label="waving hand">👋</span>
            </a>
          </div>
        </div>

        <div className="hidden md:flex mt-16 justify-center items-center gap-3">
          <a href="#about" className="flex items-center gap-3 text-text-strong">
            <svg
              width="32"
              height="32"
              viewBox="0 0 247 390"
              xmlns="http://www.w3.org/2000/svg"
              className="text-text-strong"
            >
              <path
                className="animate-scroll"
                d="M123.359,79.775l0,72.843"
                fill="none"
                stroke="currentColor"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium">Scroll Down</span>
            <i className="uil uil-arrow-down text-xl" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
