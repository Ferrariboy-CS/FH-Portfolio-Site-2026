import Header from '@/components/header'
import Home from '@/components/home'
import About from '@/components/about'
import Skills from '@/components/skills'
import Qualification from '@/components/qualification'
import Services from '@/components/services'
import Work from '@/components/work'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="relative z-10">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


