const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://www.facebook.com/festushelao.shatipamba/', icon: 'bxl-facebook' },
  { href: 'https://www.instagram.com/helao_nafimane?igsh=MWJpZmY1anl4ZW56bA==', icon: 'bxl-instagram' },
  { href: 'https://www.linkedin.com/in/festus-helao-shatipamba', icon: 'bxl-linkedin' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-1">
              Festus Helao<br />Shatipamba
            </h2>
            <span className="text-text-subtle">Software Developer</span>
          </div>

          <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-lg font-medium text-text-base hover:text-accent-strong transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.icon} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-text-strong hover:text-accent-strong hover:-translate-y-1 hover:scale-110 transition-all"
                aria-label={`Visit my ${link.icon.replace('bxl-', '')} profile`}
              >
                <i className={`bx ${link.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center text-text-subtle">
          {year} &copy; ShatiScripts. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
