import { useState } from 'react';
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



export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  useReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>

      {/* ═══════════════════════════════ HERO ═══ */}
      <section
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
        aria-labelledby="contact-hero-heading"
      >
        <img
          src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80"
          alt="Gold jewellery display"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'calc(var(--space-6) + 40px)', paddingBottom: 'var(--space-7)' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 id="contact-hero-heading" className="page-hero__title" style={{ color: 'var(--color-white)', margin: '0 auto', maxWidth: '620px' }}>
              Every Great Piece<br />
              <em style={{ color: 'var(--color-gold-light)', fontStyle: 'italic' }}>
                Begins with a Conversation.
              </em>
            </h1>
            <p style={{ fontSize: '19px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8, maxWidth: '500px', margin: 'var(--space-3) auto 0', fontWeight: 300 }}>
              Whether you have a question, a custom piece in mind, or simply want to know more — we are here, and we are listening.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CONTACT FORM + INFO ═══ */}
      <section className="section" id="contact-main" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="contact-layout">

            {/* Left — Info */}
            <div className="reveal">
              <SectionLabel>Contact Details</SectionLabel>
              <h2 id="contact-form-heading" className="section__title" style={{ textAlign: 'left', fontSize: 'clamp(30px, 3.5vw, 46px)', marginBottom: 'var(--space-4)' }}>
                We Respond<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Within 24 Hours.</em>
              </h2>

              <div className="contact-info__item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-info__icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <p className="contact-info__label">Email</p>
                  <a
                    href="mailto:hello@tisorajewels.com"
                    className="contact-info__value"
                    style={{ transition: 'color 200ms ease' }}
                    onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                  >
                    hello@tisorajewels.com
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-info__icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
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

              <div className="contact-info__item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-info__icon">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="contact-info__label">Response Time</p>
                  <p className="contact-info__value">Within 24 hours on business days. Often sooner.</p>
                </div>
              </div>

            </div>

            {/* Right — Form */}
            <div className="reveal reveal-delay-2">
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
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">Subject *</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      className="form-select"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    >
                      <option value="" disabled>Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
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

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '18px' }}>
                  Send Message
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


      {/* ═══════════════════════════════ FAQ ═══ */}
      <section className="section" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--space-7)', alignItems: 'start' }}>
            <div className="reveal">
              <SectionLabel>Common Questions</SectionLabel>
              <h2 id="faq-heading" className="section__title" style={{ textAlign: 'left', fontSize: 'clamp(32px, 3.8vw, 50px)' }}>
                Things People<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Often Ask Us.</em>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginTop: 'var(--space-3)' }}>
                If your question is not here, please write to us. We take every message seriously and respond within a day.
              </p>
              <div style={{ marginTop: 'var(--space-4)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80"
                  alt="Tisora gold ring detail"
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            <div role="list">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className={`faq-item reveal reveal-delay-${(i % 3) + 1}${openFaq === i ? ' open' : ''}`}
                  role="listitem"
                >
                  <div
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openFaq === i}
                    onKeyDown={(e) => e.key === 'Enter' && setOpenFaq(openFaq === i ? null : i)}
                  >
                    <h3 className="faq-q-text">{faq.q}</h3>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </div>
                  <div className="faq-answer" aria-hidden={openFaq !== i}>
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
