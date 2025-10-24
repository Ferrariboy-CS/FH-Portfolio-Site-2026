import React, { useRef, useState } from "react";
import "./contact.css";
import { FiMail, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_nzjh9un";
const TEMPLATE_ID = "template_aohjt1o";
const PUBLIC_KEY  = "jLiKmgBt3Y2VmXhYX";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending..." });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "Oops, something went wrong. Please try again." });
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container contact__grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__meta">
            <div className="meta__item">
              <div className="meta__icon"><FiMail /></div>
              <div className="meta__title">Email</div>
              <div className="meta__detail">festushelaoshatipamba@gmail.com</div>
              <a href="mailto:festushelaoshatipamba@gmail.com" className="meta__action">
                Write me <FiArrowUp style={{transform: 'rotate(-45deg)'}} />
              </a>
            </div>
            <div className="meta__item">
              <div className="meta__icon meta__icon--solid"><FaWhatsapp /></div>
              <div className="meta__title">WhatsApp</div>
              <div className="meta__detail">+264814630606</div>
              <a href="https://wa.me/264814630606" className="meta__action" target="_blank" rel="noopener noreferrer">
                Write me <FiArrowUp style={{transform: 'rotate(-45deg)'}} />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__form-wrapper">
          <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
            <h3 className="contact__title" style={{marginBottom: '18px'}}>Write me about your project</h3>
            <div className="form__row form__row--two">
              <label className="field">
                <span className="field__label">Name</span>
                <input className="field__control" type="text" name="name" placeholder="Insert your name" required />
              </label>
              <label className="field">
                <span className="field__label">Mail</span>
                <input className="field__control" type="email" name="email" placeholder="Insert your email" required />
              </label>
            </div>
            <div className="form__row">
              <label className="field field--full">
                <span className="field__label">Project</span>
                <textarea
                  className="field__control field__control--textarea"
                  name="message" // <-- changed from "project" to "message"
                  placeholder="Talk to me"
                  rows="6"
                  required
                />
              </label>
            </div>
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <div className="form__actions">
              <button
                type="submit"
                className="button button--flex"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <i className="uil uil-message" style={{marginLeft: "6px", fontSize: "1.2em"}}></i>
                  </>
                )}
              </button>
              {status.type !== "idle" && (
                <span className={`form__status ${status.type === "success" ? "ok" : status.type === "error" ? "err" : ""}`} role="status">
                  {status.msg}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
      <button
        className="toTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </section>
  );
};

export default Contact;