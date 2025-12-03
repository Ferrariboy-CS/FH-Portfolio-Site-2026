import Image from 'next/image'

const infoItems = [
  { icon: 'bx-award', title: 'Experience', subtitle: '+ 4 years' },
  { icon: 'bx-briefcase-alt', title: 'Completed', subtitle: '3+ Projects' },
  { icon: 'bx-support', title: 'Support', subtitle: 'Online 24/7' },
]

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title" className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
          <div className="relative w-56 h-auto md:w-80 lg:w-96 mx-auto md:mx-0 about-image-wrapper">
            <div className="about-image-container">
              <Image
                src="/AboutPic.png"
                alt="About Festus Helao Shatipamba"
                width={350}
                height={350}
                className="w-full h-auto object-cover about-image"
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {infoItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface border border-border rounded-xl p-4 text-center shadow-card"
                >
                  <i className={`bx ${item.icon} text-2xl text-accent mb-2 block`} aria-hidden="true" />
                  <h3 className="text-small font-medium">{item.title}</h3>
                  <span className="text-tiny text-text-subtle">{item.subtitle}</span>
                </div>
              ))}
            </div>

            <p className="text-text-base mb-8 md:pr-8 lg:pr-16">
              I&apos;m a Computer Science graduate driven by a passion for coding, problem-solving, and technology. 
              I enjoy turning complex challenges into innovative, real-world solutions while constantly exploring 
              new tools and technologies. Outside of tech, I&apos;m an avid chess player and a Formula 1 enthusiast 
              who thrives on strategy, precision, and performance—both on the board and in code.
            </p>

            <a href="/CV.pdf" download className="btn">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="currentColor"
                />
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="currentColor"
                />
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="currentColor"
                />
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
