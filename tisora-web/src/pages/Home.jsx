import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import GoldDivider from '../components/GoldDivider';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import useReveal from '../hooks/useReveal';
import { products } from '../data/products';
import { blogs } from '../data/blogs';
import AnimatedCounter from '../components/AnimatedCounter';


/* ── CATEGORY IMAGE CARDS ── */
const categories = [
  {
    name: 'Rings',
    sub: 'Where love finds its form.',
    image: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Necklaces',
    sub: 'Wear your heart close.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  },
  {
    name: 'Earrings',
    sub: 'Frame your face in gold.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
  },
  {
    name: 'Bracelets',
    sub: 'Stacked with intention.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
  },
  {
    name: 'Bangles',
    sub: 'Tradition meets modernity.',
    image: 'https://images.unsplash.com/photo-1692249444938-1d39b550a441?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbmdsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Pendants',
    sub: 'Stories suspended in gold.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
  },
];

/* ── PROMISES ── */
const promises = [
  {
    num: '01',
    title: 'Artisan Craftsmanship',
    text: 'Each piece is shaped entirely by hand — by craftsmen who have spent decades perfecting their art. No shortcuts. No compromise. Only jewellery worth passing down.',
  },
  {
    num: '02',
    title: 'Certified Fine Materials',
    text: 'We source only conflict-free gemstones and certified 14K, 18K, and 22K gold. Every hallmark on a Tisora piece is a promise of authenticity and lasting quality.',
  },
  {
    num: '03',
    title: 'Design That Endures',
    text: 'Trends come and go. Our collections are drawn from timeless forms — rooted in classical elegance yet refined for the modern woman who values substance over spectacle.',
  },
  {
    num: '04',
    title: 'Trusted Since Day One',
    text: 'Over 12,000 families across India have chosen Tisora for their most meaningful moments — weddings, anniversaries, first gifts, and quiet everyday celebrations.',
  },
];

/* ── TESTIMONIALS — two rows for opposing marquees ── */
const testimonialsRow1 = [
  {
    stars: 5,
    text: 'I gifted my wife a Tisora necklace on our anniversary. The moment she opened the box, she was moved to tears. The craftsmanship is unlike anything I have seen at this price.',
    author: 'Rahul Mehta',
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  },
  {
    stars: 5,
    text: 'I have been collecting Tisora pieces for three years now. Every single one feels as though it was designed with me in mind. The details are extraordinary.',
    author: 'Priya Sharma',
    location: 'New Delhi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  },
  {
    stars: 5,
    text: 'Wore my Tisora earrings to my sister\'s wedding and I received more compliments on them than the bride received on her outfit. A little embarrassing, but entirely worth it.',
    author: 'Aisha Khan',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80',
  },
  {
    stars: 5,
    text: 'The custom engagement ring Tisora designed for me exceeded every expectation. My fiancée said yes before I even finished the sentence. That speaks for itself.',
    author: 'Vikram Nair',
    location: 'Bangalore',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  },
];

const testimonialsRow2 = [
  {
    stars: 5,
    text: 'Tisora\'s bangle set is the most beautiful thing I own. Every morning I put it on and feel ready to face the world. It sounds dramatic, but jewellery that makes you feel that way is rare.',
    author: 'Sneha Pillai',
    location: 'Chennai',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  },
  {
    stars: 5,
    text: 'I ordered the Cascade Necklace as a birthday gift for my mother. She has worn it every single day since. When she calls me, she always mentions it first. That is the power of a beautiful piece.',
    author: 'Ananya Bose',
    location: 'Kolkata',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80',
  },
  {
    stars: 5,
    text: 'I was hesitant to order fine jewellery online. Tisora changed my mind completely. The packaging alone felt like an event. The ring inside was breathtaking.',
    author: 'Meera Joshi',
    location: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&q=80',
  },
  {
    stars: 5,
    text: 'Three generations of my family now wear Tisora pieces. My grandmother, my mother, and now me. If that is not a testament to the quality, I do not know what is.',
    author: 'Kavya Reddy',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=80&q=80',
  },
];

/* ── INSTAGRAM TILES ── */
const instagramImages = [
  'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&q=80',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80',
];

/* ── STATS ── */
const stats = [
  { num: '12,000+', label: 'Families Adorned' },
  { num: '500+', label: 'Unique Designs' },
  { num: '18K', label: 'Certified Gold' },
  { num: '10', label: 'Years of Craft' },
];

/* ── TESTIMONIAL CARD COMPONENT ── */
function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__quote-mark">"</div>
      <div className="testimonial-card__stars">{'★'.repeat(t.stars)}</div>
      <p className="testimonial-card__text">{t.text}</p>
      <div className="testimonial-card__footer">
        <img
          src={t.avatar}
          alt={t.author}
          className="testimonial-card__avatar"
          loading="lazy"
        />
        <div>
          <p className="testimonial-card__author">{t.author}</p>
          <p className="testimonial-card__location">{t.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <main>

      {/* ═══════════════════════════════════════ HERO ═══ */}
      <section className="hero" id="hero" aria-label="Hero">
        <video
          src="/home-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero__bg-img"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">
            Diamonds That<br />
            <em>Carries a Story</em><br />
            For Lifetimes.
          </h1>
          <p className="hero__subtitle">
            Each Tisora piece is handcrafted by master artisans — made to be worn on the days that matter most, and every quiet day in between.
          </p>
          <div className="hero__ctas">
            <Link to="/products" className="btn-primary">Explore the Collection</Link>
            <Link to="/about" className="btn-outlined">Our Story</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ ABOUT US ═══ */}
      <section className="section" id="about-us" aria-label="About Us" style={{ padding: 'var(--space-7) 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section__title reveal" style={{ marginBottom: 'var(--space-4)' }}>About Us</h2>
          <p className="reveal reveal-delay-1" style={{ maxWidth: '100%', margin: '0 auto var(--space-6)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            Over the last decade, Tisora has grown into a globally trusted name for fine jewelry. Our expertise lies in producing a consistent supply of quality craftsmanship in 14K, 18K, and 22K gold, bringing you timeless designs that endure. As direct manufacturers, we also specialize in creating premium lab-grown diamonds and crafting bespoke, custom diamond jewelry tailored to your unique vision.
          </p>
          <div className="about-us-grid reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-5)' }}>
            <div className="about-us-card" style={{ textAlign: 'center' }}>
              <div className="about-us-card__img-wrapper">
                <img src="/our-value.webp" alt="Our Value" className="about-us-card__img" />
              </div>
              <h3 className="about-us-card__title">Our Value</h3>
              <p className="about-us-card__sub">We never compromise on beauty. Every certified diamond we grow meets the highest standards for clarity, cut, and color. You get the exact strength and sparkle of a mined diamond, guaranteed.</p>
            </div>
            <div className="about-us-card" style={{ textAlign: 'center' }}>
              <div className="about-us-card__img-wrapper">
                <img src="/our-vision.webp" alt="Our Vision" className="about-us-card__img" />
              </div>
              <h3 className="about-us-card__title">Our Vision</h3>
              <p className="about-us-card__sub">Our vision is to become the leading global name in modern luxury by making premium diamonds accessible to everyone. We see a future where fine jewelry is defined by innovation, transparency, and personal design rather than high markups. By pushing the boundaries of technology and craftsmanship, we aim to inspire a smarter, more creative generation of luxury shoppers worldwide.</p>
            </div>
            <div className="about-us-card" style={{ textAlign: 'center' }}>
              <div className="about-us-card__img-wrapper">
                <img src="/our-mission.webp" alt="Our Mission" className="about-us-card__img" />
              </div>
              <h3 className="about-us-card__title">Our Mission</h3>
              <p className="about-us-card__sub">At Tisora Jewels, we make beautiful, high-quality jewelry affordable. Because we grow our own diamonds in a lab, we cut out middlemen and pass the savings to you. You get certified diamonds with the exact same sparkle, strength, and beauty as mined stones—but for 90% less. Using modern technology, we work with you to design custom, unique pieces made to last a lifetime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ LAB DIAMONDS ═══ */}
      <section className="section section--alt" id="collections" aria-labelledby="collections-heading">
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>Our Collections</SectionLabel>
            <h2 id="collections-heading" className="section__title">
              WHAT ARE LABORATORY-GROWN<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>DIAMONDS?</em>
            </h2>
            <p className="section__sub" style={{ maxWidth: '750px' }}>
              Laboratory-grown diamonds are increasingly available in greater quantities, higher quality and new colors at price points that many find attractive. It is no wonder then that laboratory-grown diamonds are a growing presence in the marketplace.
            </p>
          </div>

          {/* ── Diamonds Marquee ── */}
          <div className="diamond-marquee-wrapper reveal">
            <div className="diamond-marquee">
              <div className="diamond-marquee__track">
                {/* Duplicate the items to allow seamless infinite scrolling */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="diamond-marquee__items">
                    <div className="diamond-shape">
                      <img src="/heart_diamond.webp" alt="Heart Diamond" />
                      <span>HEART</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/asscher_diamond.webp" alt="Asscher Diamond" />
                      <span>ASSCHER</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/princess_diamond.webp" alt="Princess Diamond" />
                      <span>PRINCESS</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/cushion_diamond.webp" alt="Cushion Diamond" />
                      <span>CUSHION</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/oval_diamond.webp" alt="Oval Diamond" />
                      <span>OVAL</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/round_diamond.webp" alt="Round Diamond" />
                      <span>ROUND</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/radiant_diamond.webp" alt="Radiant Diamond" />
                      <span>RADIANT</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/pear_diamond.webp" alt="Pear Diamond" />
                      <span>PEAR</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/marquise_diamond.webp" alt="Marquise Diamond" />
                      <span>MARQUISE</span>
                    </div>
                    <div className="diamond-shape">
                      <img src="/emerald_diamond.webp" alt="Emerald Diamond" />
                      <span>EMERALD</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Split media row: image left / video right ── */}
          <div className="lab-diamonds-split reveal reveal-delay-1">
            <div className="lab-diamonds-split__left">
              <img
                src="/left-home.webp"
                alt="Laboratory grown diamond craftsmanship"
                className="lab-diamonds-split__img"
              />
              <div className="lab-diamonds-split__overlay" />
              <div className="lab-diamonds-split__badge">
                <span className="lab-diamonds-split__badge-text">We're the</span>
                <em className="lab-diamonds-split__badge-em">maker</em>
              </div>
            </div>
            <div className="lab-diamonds-split__right">
              <video
                src="/right-home.webm"
                autoPlay
                loop
                muted
                playsInline
                className="lab-diamonds-split__video"
              />
              <div className="lab-diamonds-split__overlay" />
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════ ABOUT SNIPPET ═══ */}
      <section className="section" id="about-snippet" aria-labelledby="about-snippet-heading">
        <div className="container">
          <div className="about-snippet">
            <div className="about-snippet__visual reveal">
              <img
                src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=700&q=80"
                alt="Artisan hands shaping gold"
                loading="lazy"
              />
            </div>
            <div className="about-snippet__text reveal reveal-delay-2">
              <SectionLabel>Our Story</SectionLabel>
              <h2
                id="about-snippet-heading"
                className="section__title"
                style={{ textAlign: 'left' }}
              >
                Every Partnership Begins <br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>
                  with Precision.
                </em>
              </h2>
              <p className="about-snippet__quote">
                "We do not just manufacture jewelry. We engineer the reliability, quality, and scale that power your brand's growth."
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                Tisora was born from a single commercial belief — that global jewelry brands should never have to compromise between mass-production efficiency and artisanal integrity. Our business model is rooted in the rich heritage of Indian craftsmanship, accelerated by state-of-the-art gold metallurgy and advanced lab-grown diamond technology. We understand exactly how a commercial line must be optimized to maximize your margins, maintain exact consistency, and capture the market's light.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginTop: '16px' }}>
                Every high-volume run of rings, necklaces, and bangles that leaves our production facility is subjected to rigorous industrial quality control, certified for absolute gold purity, and delivered with the seamless logistics your supply chain demands.
              </p>
              <Link to="/about" className="btn-ghost" style={{ marginTop: '12px' }}>
                Read Our Full Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
