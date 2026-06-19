import { useState, useRef, useEffect } from 'react';
import SectionLabel from '../components/SectionLabel';
import GoldDivider from '../components/GoldDivider';
import useReveal from '../hooks/useReveal';

const faqs = [
  {
    q: 'Do you ship across India?',
    a: 'Yes — we ship to every major city and town across India, with free shipping on orders above a threshold. International shipping to select countries is available on request. All orders are dispatched with tracking and insurance.',
  },
  {
    q: 'Do you offer custom jewellery commissions?',
    a: 'We do. Custom work is one of the things we love most. Whether it is a specific design you have in mind, a family heirloom you would like redesigned, or a bespoke engagement ring — we would be honoured to bring it to life. Begin by filling in the form above.',
  },
  {
    q: 'What materials are used in Tisora pieces?',
    a: 'We use only certified 14K, 18K, and 22K gold depending on the collection, alongside sterling silver and ethically sourced gemstones. Every material is quality-tested and hallmarked. You will always know exactly what you are wearing.',
  },
  {
    q: 'What is your exchange and return policy?',
    a: 'We offer a hassle-free exchange within 7 days of delivery for all unworn pieces in their original condition and packaging. Custom-commissioned pieces are non-refundable but may be adjusted within the same period if the sizing is incorrect.',
  },
  {
    q: 'How do I find my ring size?',
    a: 'We have a detailed ring sizing guide available on request — we can email it to you within the hour. Alternatively, our team is happy to guide you personally over WhatsApp or a brief call at your convenience.',
  },
  {
    q: 'How long does a custom order take?',
    a: 'Most custom pieces are completed within 3 to 5 weeks, depending on complexity. We will give you a precise timeline during your initial consultation and keep you updated at every stage of the making process.',
  },
];

const subjects = [
  'General Inquiry',
  'Custom Order Request',
  'Product Query',
  'Order Support',
  'Feedback',
  'Collaboration / Press',
];

const CustomSelect = ({ options, value, onChange, name, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} style={{ position: 'relative' }}>
      <button
        type="button"
        className={`form-input`}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: value ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
          cursor: 'pointer',
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{value || placeholder}</span>
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2"
          style={{ transition: 'transform 250ms ease', transform: isOpen ? 'rotate(180deg)' : 'none' }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '4px',
          background: 'var(--color-white)',
          border: '1px solid var(--color-border)',
          boxShadow: '0 12px 30px rgba(80, 50, 5, 0.08)',
          zIndex: 50,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
          maxHeight: '260px',
          overflowY: 'auto'
        }}
        role="listbox"
      >
        {options.map(opt => (
          <div
            key={opt}
            role="option"
            aria-selected={value === opt}
            onClick={() => {
              onChange({ target: { name, value: opt } });
              setIsOpen(false);
            }}
            style={{
              padding: '14px 18px',
              cursor: 'pointer',
              fontSize: '15px',
              transition: 'all 200ms ease',
              color: value === opt ? 'var(--color-gold-primary)' : 'var(--color-text-primary)',
              background: value === opt ? 'var(--color-bg-secondary)' : 'transparent',
              fontWeight: value === opt ? 500 : 300,
            }}
            onMouseEnter={e => {
              if (value !== opt) {
                e.target.style.background = 'var(--color-bg-secondary)';
                e.target.style.color = 'var(--color-gold-primary)';
                e.target.style.paddingLeft = '22px';
              }
            }}
            onMouseLeave={e => {
              if (value !== opt) {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--color-text-primary)';
                e.target.style.paddingLeft = '18px';
              }
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};



export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  useReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "16218a5c-f0df-4d48-a1a5-e039f23d235a",
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Form submission error", result);
        alert("There was an issue submitting your message. Please try again.");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>


      {/* ══════════════════════ CONTACT FORM + INFO ═══ */}
      <section
        className="section"
        id="contact-main"
        aria-labelledby="contact-form-heading"
        style={{
          minHeight: '100vh',
          paddingTop: '120px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div className="contact-layout">

            {/* Left — Info */}
            <div className="reveal">
              <SectionLabel>Contact Details</SectionLabel>
              <h2 id="contact-form-heading" className="section__title" style={{ textAlign: 'left', fontSize: 'clamp(30px, 3.5vw, 46px)', marginBottom: 'var(--space-4)' }}>
                We Respond<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Within 24 Hours.</em>
              </h2>

              <div className="contact-info__item">
                <img src="/whatsapp-icon.png" alt="WhatsApp" width="30" height="30" className="contact-info__icon" style={{ border: 'none', stroke: 'none', objectFit: 'contain' }} />
                <div>
                  <p className="contact-info__label">WhatsApp</p>
                  <a
                    href="https://wa.me/916359956385"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__value"
                    style={{ transition: 'color 200ms ease' }}
                    onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                  >
                    +91 6359 956 385
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <img src="/email-logo.svg" alt="Email" width="24" height="24" className="contact-info__icon" style={{ border: 'none', stroke: 'none', objectFit: 'contain' }} />
                <div>
                  <p className="contact-info__label">Email</p>
                  <a
                    href="mailto:tisorajewels@gmail.com"
                    className="contact-info__value"
                    style={{ transition: 'color 200ms ease' }}
                    onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                  >
                    tisorajewels@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <img src="/instagram-logo.svg" alt="Instagram" width="24" height="24" className="contact-info__icon" style={{ border: 'none', stroke: 'none', objectFit: 'contain' }} />
                <div>
                  <p className="contact-info__label">Instagram</p>
                  <a
                    href="https://www.instagram.com/tisorajewels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__value"
                    style={{ transition: 'color 200ms ease' }}
                    onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                  >
                    @tisorajewels
                  </a>
                </div>
              </div>

            </div>

            {/* Right — Form */}
            <div
              className="reveal reveal-delay-2"
              style={{
                border: '1px solid var(--color-border-gold)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-4)',
              }}
            >
              <form onSubmit={handleSubmit} aria-label="Contact form" noValidate>
                <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">Subject *</label>
                    <CustomSelect
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      options={subjects}
                      placeholder="Select a subject"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us what is on your mind. The more detail you share, the better we can help."
                    value={form.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    style={{ minHeight: '160px' }}
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={submitting} style={{ width: '100%', justifyContent: 'center', padding: '18px', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '17px',
                    color: 'var(--color-gold-primary)',
                    marginTop: 'var(--space-3)',
                    textAlign: 'center',
                  }}>
                    Thank you. We have received your message and will respond within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
