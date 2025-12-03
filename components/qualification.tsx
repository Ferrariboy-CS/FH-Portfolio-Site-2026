'use client'

import { useState } from 'react'
import Image from 'next/image'

type TabType = 'education' | 'certifications' | 'experience' | 'awards'

const certificates = [
  { title: 'CyberOps Associate', org: 'University of Namibia through Cisco Networking Academy', date: 'Dec 2025', file: '/certifications/Cyberops.png' },
  { title: 'CCNAv7: Introduction to Networks', org: 'Cisco Networking Academy', date: 'Nov 2022', file: '/certifications/Introduction to networks.jpg' },
  { title: 'Cybersecurity Essentials', org: 'Cisco Networking Academy', date: 'Oct 2022', file: '/certifications/cybersecurity essentials.jpg' },
  { title: 'PCAP - Programming Essentials in Python', org: 'Cisco Networking Academy Partner', date: 'Dec 2023', file: '/certifications/programming essentials in python.jpg' },
  { title: 'JavaScript Essentials 1 (JSE)', org: 'Cisco Networking Academy Partner', date: 'Dec 2023', file: '/certifications/javascript essentials 1.jpg' },
  { title: 'Network Defense', org: 'Cisco Networking Academy', date: 'Apr 2025', file: '/certifications/network defence.jpg' },
  { title: 'Endpoint Security', org: 'Cisco Networking Academy', date: 'Apr 2025', file: '/certifications/endpoint security.jpg' },
  { title: 'Ethical Hacker', org: 'Cisco Networking Academy', date: 'Apr 2025', file: '/certifications/ethical hacker.jpg' },
]

const awards = [
  { title: 'Business in Africa - The Age of Digitalization', org: 'The Hague University of Applied Sciences and UNAM - Explored Africa\'s evolving business landscape with focus on blockchain.', date: '2025', file: '/certifications/Festus Helao Shatipamba.jpg' },
]

const education = [
  { title: 'Bachelor of Computer Science (Honours)', org: 'University of Namibia', date: '2025' },
  { title: 'Grade 12 NSSC Certificate', org: 'J.G Van Der Wath Secondary School', date: '2017' },
]

const tabs: { id: TabType; icon: string; label: string }[] = [
  { id: 'education', icon: 'uil-graduation-cap', label: 'Education' },
  { id: 'certifications', icon: 'uil-award', label: 'Certifications' },
  { id: 'experience', icon: 'uil-briefcase-alt', label: 'Experience' },
  { id: 'awards', icon: 'uil-trophy', label: 'Awards' },
]

export default function Qualification() {
  const [activeTab, setActiveTab] = useState<TabType>('education')
  const [modal, setModal] = useState<{ open: boolean; file: string; title: string }>({ open: false, file: '', title: '' })

  const openModal = (file: string, title: string) => {
    setModal({ open: true, file, title })
    document.body.classList.add('disable-scroll')
  }

  const closeModal = () => {
    setModal({ open: false, file: '', title: '' })
    document.body.classList.remove('disable-scroll')
  }

  return (
    <section id="qualification" className="section" aria-labelledby="qualification-title">
      <h2 id="qualification-title" className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="container max-w-3xl">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-lg text-h3 font-medium transition-all ${activeTab === tab.id ? 'text-accent-strong bg-accent/10 scale-105' : 'text-text-strong hover:text-accent-strong hover:scale-105'}`}
            >
              <i className={`uil ${tab.icon} text-2xl`} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          {activeTab === 'education' && (
            <div className="grid gap-6 sm:grid-cols-2">
              {education.map((item, idx) => (
                <Card key={idx} {...item} />
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid gap-4 sm:grid-cols-2">
              {certificates.map((item, idx) => (
                <Card key={idx} {...item} onView={() => openModal(item.file, item.title)} />
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="grid gap-6 max-w-2xl mx-auto">
              <div className="bg-surface border border-border rounded-xl p-5 shadow-card">
                <h3 className="text-normal font-medium mb-1">ICT Support Technician (Intern)</h3>
                <span className="text-small text-text-subtle block mb-2">Unikela Enterprise CC</span>
                <div className="text-small text-text-subtle mb-4 flex items-center gap-1">
                  <i className="uil uil-calendar-alt" aria-hidden="true" /> Nov 2024 – Nov 2025
                </div>
                <ul className="text-small text-text-base space-y-1.5 list-disc list-inside">
                  <li>Setting up new computers and configuring hardware</li>
                  <li>Installing and troubleshooting software applications</li>
                  <li>Cloning hard drives and maintaining system backups</li>
                  <li>Installing and configuring network printers</li>
                  <li>Providing remote technical support to clients</li>
                  <li>Attending to client IT-related queries efficiently</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="grid gap-6 max-w-2xl mx-auto">
              {awards.map((item, idx) => (
                <Card key={idx} {...item} onView={() => openModal(item.file, item.title)} />
              ))}
            </div>
          )}
        </div>
      </div>

      {modal.open && (
        <div className="fixed inset-0 z-modal bg-black/50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative bg-surface rounded-xl p-6 max-w-[95vw] max-h-[90vh] overflow-auto border border-border shadow-modal animate-modal-in" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-lg font-semibold mb-4 pr-8">{modal.title}</h4>
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-2xl text-text-strong hover:text-accent-strong"
              aria-label="Close modal"
            >
              <i className="uil uil-times" aria-hidden="true" />
            </button>
            <div className="text-center">
              <Image src={modal.file} alt={modal.title} width={600} height={400} className="max-w-full max-h-[60vh] object-contain rounded-lg mx-auto" />
              <a href={modal.file} target="_blank" rel="noopener noreferrer" className="btn mt-4 inline-flex">
                Open in new tab
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Card({ title, org, date, onView }: { title: string; org: string; date: string; onView?: () => void }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 shadow-card">
      <h3 className="text-normal font-medium mb-1">{title}</h3>
      <span className="text-small text-text-subtle block mb-2">{org}</span>
      <div className="text-small text-text-subtle flex items-center gap-1 mb-3">
        <i className="uil uil-calendar-alt" aria-hidden="true" /> {date}
      </div>
      {onView && <button onClick={onView} className="btn text-sm py-2 px-4">View</button>}
    </div>
  )
}
