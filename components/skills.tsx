import Image from 'next/image'

const skills = [
  { name: 'C#', img: '/skills/c-sharp.png' },
  { name: 'Java', img: '/skills/java.png' },
  { name: 'Python', img: '/skills/python.png' },
  { name: 'JavaScript', img: '/skills/javascript.svg' },
  { name: 'HTML', img: '/skills/html.svg' },
  { name: 'CSS', img: '/skills/css.svg' },
  { name: 'SQL Server', img: '/skills/sql-server.png' },
  { name: 'Git', img: '/skills/git.png' },
  { name: 'Firebase', img: '/skills/firebase.svg' },
  { name: 'WordPress', img: '/skills/wordpress.png' },
  { name: 'Figma', img: '/skills/figma.png' },
]

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section__title">Skills</h2>
      <span className="section__subtitle">Tools I use</span>

      <div className="container">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-110">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <span className="text-small font-medium text-text-strong">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
