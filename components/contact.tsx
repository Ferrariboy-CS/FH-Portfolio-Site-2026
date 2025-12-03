'use client'

import { useRef, useState } from 'react'
import { FiMail, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_xebm82j'
const TEMPLATE_ID = 'template_aohjt1o'
const PUBLIC_KEY = 'jLiKmgBt3Y2VmXhYX'

type Status = { type: 'idle' | 'loading' | 'success' | 'error'; msg: string }

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>({ type: 'idle', msg: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formRef.current) {
      setStatus({ type: 'error', msg: 'Form not found. Please refresh the page.' })
      return
    }

    setStatus({ type: 'loading', msg: 'Sending...' })

    try {
      // Update the hidden time field before sending
      const timeInput = formRef.current.querySelector('input[name="time"]') as HTMLInputElement
      if (timeInput) {
        timeInput.value = new Date().toLocaleString()
      }

      console.log('Sending email with EmailJS...', { SERVICE_ID, TEMPLATE_ID })
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      console.log('EmailJS result:', result)
      
      if (result.status === 200 || result.text === 'OK') {
        setStatus({ type: 'success', msg: 'Thanks! Your message has been sent.' })
        formRef.current.reset()
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', msg: '' })
        }, 5000)
      } else {
        setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' })
      }
    } catch (err: any) {
      console.error('EmailJS Error:', err)
      // Provide more detailed error message
      let errorMsg = 'Oops, something went wrong. Please try again.'
      
      if (err?.text) {
        errorMsg = err.text
        // Check for Gmail API errors
        if (err.text.includes('Gmail_API') || err.text.includes('Invalid grant')) {
          errorMsg = 'Email service needs reconnection. Please contact the site administrator.'
        } else {
          errorMsg = `Error: ${err.text}`
        }
      } else if (err?.message) {
        errorMsg = `Error: ${err.message}`
      } else if (err?.status) {
        errorMsg = `Error ${err.status}: Failed to send message`
      }
      
      setStatus({ type: 'error', msg: errorMsg })
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <section id="contact" className="section relative" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="container max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] bg-surface rounded-2xl p-6 md:p-8 shadow-card border border-border">
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Talk to me</h3>
            
            <div className="bg-surface border border-border rounded-xl p-5 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent text-xl mb-3" aria-hidden="true">
                <FiMail />
              </div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-small text-text-base mb-2">festushelaoshatipamba@gmail.com</p>
              <a href="mailto:festushelaoshatipamba@gmail.com" className="write-me-button group inline-flex items-center gap-1 text-accent font-medium text-small hover:text-accent-strong transition-all duration-300 hover:gap-2 hover:scale-105">
                <span className="relative z-10">Write me</span>
                <FiArrowUp className="rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:animate-arrow-bounce" />
              </a>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent text-xl mb-3" aria-hidden="true">
                <FaWhatsapp />
              </div>
              <h4 className="font-semibold">WhatsApp</h4>
              <p className="text-small text-text-base mb-2">+264814630606</p>
              <a href="https://wa.me/264814630606" target="_blank" rel="noopener noreferrer" className="write-me-button group inline-flex items-center gap-1 text-accent font-medium text-small hover:text-accent-strong transition-all duration-300 hover:gap-2 hover:scale-105">
                <span className="relative z-10">Write me</span>
                <FiArrowUp className="rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:animate-arrow-bounce" />
              </a>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6 shadow-card">
            <h3 className="text-lg font-bold mb-4">Write me about your project</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-medium text-small mb-1.5 block">Name</span>
                  <input type="text" name="name" placeholder="Insert your name" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text-strong outline-none transition-all focus:border-accent focus:bg-surface" />
                </label>
                <label className="block">
                  <span className="font-medium text-small mb-1.5 block">Mail</span>
                  <input type="email" name="email" placeholder="Insert your email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text-strong outline-none transition-all focus:border-accent focus:bg-surface" />
                </label>
              </div>
              <label className="block">
                <span className="font-medium text-small mb-1.5 block">Project</span>
                <textarea name="message" placeholder="Talk to me" rows={5} required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text-strong outline-none transition-all focus:border-accent focus:bg-surface resize-y min-h-[120px]" />
              </label>
              <input type="hidden" name="time" value={new Date().toLocaleString()} />
              
              <div className="flex flex-col items-center gap-3">
                <button type="submit" disabled={status.type === 'loading'} className="btn w-full sm:w-auto bg-accent hover:bg-accent-strong text-white disabled:opacity-70">
                  {status.type === 'loading' ? 'Sending...' : <>Send Message <i className="uil uil-message ml-1" aria-hidden="true" /></>}
                </button>
                {status.type !== 'idle' && (
                  <span className={`text-small ${status.type === 'success' ? 'text-green-500' : status.type === 'error' ? 'text-red-500' : ''}`}>
                    {status.msg}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed right-4 bottom-20 md:bottom-6 w-11 h-11 rounded-xl bg-surface border border-border shadow-card flex items-center justify-center text-text-strong transition-all hover:-translate-y-1 hover:bg-accent hover:text-white z-fixed" aria-label="Scroll to top">
        <FiArrowUp aria-hidden="true" />
      </button>
    </section>
  )
}
