'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

type Category = 'All' | 'App' | 'Web'

const projectsData = [
  {
    id: 1,
    images: [
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1768318137/AppScreenshot3_lign9n.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1768318134/AppScreenshot1_na2fq1.jpg',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1768318134/AppScreenshot2_vjo68a.jpg',
    ],
    title: 'PumpTrack',
    category: 'App' as Category,
    description: 'Borehole pump tracking mobile application created using Flutter, Dart, Firebase, and Android Studio.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Android Studio'],
    link: 'https://github.com/Ferrariboy99/PumpTrack-App',
  },
  {
    id: 2,
    images: [
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1770648628/GGD_Home_Banner_t3pzrl.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1770648627/GGD_Hero_Section_nfymlr.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1770648627/GGD_Countdown2_rwvgfs.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1770648626/GGD_Contact_j475ne.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1770648625/GGD_About_Us_eyadkc.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1770648634/GGD_Why_Choose_Us_agw9qz.png',
    ],
    title: 'Gongo Graphic Design',
    category: 'Web' as Category,
    description: 'Official website for Gongo Graphic Design, showcasing services, portfolio, testimonials, and contact pathways for the creative agency.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://www.gongographicdesigncc.com/',
  },
  {
    id: 3,
    images: [
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1768318137/Robert_r50ovg.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1768318137/robert_3_s8vc85.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1768318135/robert_2_dzqbmn.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1768318135/robert_5_loy9jy.png',
      'https://res.cloudinary.com/dl4ckmwrb/image/upload/v1768318135/robert_4_iaf0ue.png',
    ],
    title: 'Chief Robert Andreas',
    category: 'Web' as Category,
    description: "Showcasing Robert Andreas's work, events, pictures, and book publications.",
    tech: ['WordPress', 'Custom CSS', 'JavaScript'],
    link: 'https://chiefrobertandreas.com/',
  },
]

const filters: { name: Category; icon: string }[] = [
  { name: 'All', icon: 'uil-apps' },
  { name: 'App', icon: 'uil-mobile-android' },
  { name: 'Web', icon: 'uil-globe' },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  const [modal, setModal] = useState<{ open: boolean; project: typeof projectsData[0] | null; slide: number }>({
    open: false, project: null, slide: 0,
  })
  const [isMobile, setIsMobile] = useState(false)
  const startX = useRef<number | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredProjects = activeFilter === 'All' ? projectsData : projectsData.filter((p) => p.category === activeFilter)

  const openModal = (project: typeof projectsData[0]) => {
    setModal({ open: true, project, slide: 0 })
    document.body.classList.add('disable-scroll')
  }

  const closeModal = () => {
    setModal({ open: false, project: null, slide: 0 })
    document.body.classList.remove('disable-scroll')
  }

  const nextSlide = () => {
    if (modal.project) {
      setModal((prev) => ({ ...prev, slide: (prev.slide + 1) % prev.project!.images.length }))
    }
  }

  const prevSlide = () => {
    if (modal.project) {
      setModal((prev) => ({ ...prev, slide: (prev.slide - 1 + prev.project!.images.length) % prev.project!.images.length }))
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return
    const diff = e.changedTouches[0].clientX - startX.current
    if (Math.abs(diff) > 40) diff < 0 ? nextSlide() : prevSlide()
    startX.current = null
  }

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <h2 id="work-title" className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="container">
        <div className="flex justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-h3 font-medium transition-all ${activeFilter === filter.name ? 'text-accent-strong bg-accent/10 scale-105' : 'text-text-strong hover:text-accent-strong hover:scale-105'}`}
            >
              <i className={`uil ${filter.icon}`} />
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="bg-surface border border-border rounded-xl p-4 shadow-card cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                <Image src={project.images[0]} alt={project.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <h3 className="text-normal font-medium mb-2">{project.title}</h3>
              <span className="flex items-center gap-1 text-accent font-medium text-small">
                View Details <i className="bx bx-right-arrow-alt" aria-hidden="true" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {modal.open && modal.project && (
        <div className="fixed inset-0 z-modal bg-black/60 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative bg-surface rounded-xl p-6 max-w-[800px] w-[95vw] border border-border shadow-modal animate-modal-in" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-2xl text-text-strong hover:text-accent-strong z-10"
              aria-label="Close modal"
            >
              <i className="uil uil-times" aria-hidden="true" />
            </button>
            <h3 className="text-xl font-bold text-center mb-4">{modal.project.title}</h3>
            <div className="flex items-center justify-center gap-4 mb-4" onTouchStart={isMobile ? handleTouchStart : undefined} onTouchEnd={isMobile ? handleTouchEnd : undefined}>
              {!isMobile && (
                <button 
                  onClick={(e) => { e.stopPropagation(); prevSlide() }} 
                  className="w-8 h-8 rounded-full bg-accent/10 border border-border flex items-center justify-center text-accent hover:bg-accent/20"
                  aria-label="Previous image"
                >
                  <span aria-hidden="true">&lt;</span>
                </button>
              )}
              <div className="relative w-full max-w-[520px] aspect-video">
                <Image 
                  src={modal.project.images[modal.slide]} 
                  alt={`${modal.project.title} - Image ${modal.slide + 1} of ${modal.project.images.length}`} 
                  fill 
                  className="object-contain rounded-lg" 
                  sizes="520px" 
                />
              </div>
              {!isMobile && (
                <button 
                  onClick={(e) => { e.stopPropagation(); nextSlide() }} 
                  className="w-8 h-8 rounded-full bg-accent/10 border border-border flex items-center justify-center text-accent hover:bg-accent/20"
                  aria-label="Next image"
                >
                  <span aria-hidden="true">&gt;</span>
                </button>
              )}
            </div>
            <div className="text-center">
              <p className="text-text-base mb-4">{modal.project.description}</p>
              <h4 className="font-medium mb-2">Technologies Used</h4>
              <ul className="flex flex-wrap justify-center gap-2 mb-4">
                {modal.project.tech.map((t) => <li key={t} className="bg-background px-3 py-1 rounded-lg text-small">{t}</li>)}
              </ul>
              <a href={modal.project.link} target="_blank" rel="noopener noreferrer" className="btn inline-flex">
                Demo <i className="bx bx-right-arrow-alt" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
