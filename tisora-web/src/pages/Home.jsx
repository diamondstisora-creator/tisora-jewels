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
          src="/hero-video.webm"
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
            Jewellery That<br />
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
          <p className="reveal reveal-delay-1" style={{ maxWidth: '800px', margin: '0 auto var(--space-6)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            Tisora has grown to become a globally trusted jeweler for fine jewelry over the last decade. Our expertise lies in our ability to produce a consistent supply of quality craftsmanship in 14K, 18K, and 22K gold, bringing you timeless designs that endure.
          </p>
          <div className="about-us-grid reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-5)' }}>
            <div className="about-us-card" style={{ textAlign: 'center' }}>
              <div className="about-us-card__img-wrapper">
                <img src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpbmd8ZW58MHx8MHx8fDA%3D" alt="Our Value" className="about-us-card__img" />
              </div>
              <h3 className="about-us-card__title">Our Value</h3>
            </div>
            <div className="about-us-card" style={{ textAlign: 'center' }}>
              <div className="about-us-card__img-wrapper">
                <img src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&q=80" alt="Our Vision" className="about-us-card__img" />
              </div>
              <h3 className="about-us-card__title">Our Vision</h3>
            </div>
            <div className="about-us-card" style={{ textAlign: 'center' }}>
              <div className="about-us-card__img-wrapper">
                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80" alt="Our Mission" className="about-us-card__img" />
              </div>
              <h3 className="about-us-card__title">Our Mission</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ COLLECTIONS ═══ */}
      <section className="section section--alt" id="collections" aria-labelledby="collections-heading">
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>Our Collections</SectionLabel>
            <h2 id="collections-heading" className="section__title">
              Six Stories,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>One Name.</em>
            </h2>
            <p className="section__sub">
              Each collection is built around a different way to wear gold — and a different feeling it gives you when you do.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <Link
                to="/products"
                key={cat.name}
                className={`category-card reveal reveal-delay-${(i % 4) + 1}`}
                aria-label={`Browse ${cat.name}`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="category-card__img"
                  loading="lazy"
                />
                <div className="category-card__overlay" />
                <div className="category-card__body">
                  <h3 className="category-card__name">{cat.name}</h3>
                  <p className="category-card__sub">{cat.sub}</p>
                  <span className="category-card__arrow">
                    Browse Collection &rarr;
                  </span>
                </div>
              </Link>
            ))}
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
                Every Piece Begins<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>
                  as a Feeling.
                </em>
              </h2>
              <p className="about-snippet__quote">
                "We do not make jewellery. We make the moments that jewellery marks."
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                Tisora was born from a single belief — that a woman should never have to choose between beauty and meaning.
                Our collections are rooted in the richness of Indian craft and refined through a modern eye that understands
                exactly how a piece should sit, catch light, and make you feel when you wear it.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginTop: '16px' }}>
                Every ring, necklace, and bangle that leaves our workshop has been touched by hand, inspected with care,
                and wrapped with the same intention with which it was made.
              </p>
              <Link to="/about" className="btn-ghost" style={{ marginTop: '12px' }}>
                Read Our Full Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PROMISES ═══ */}
      <section className="section section--alt" id="promises" aria-labelledby="promises-heading">
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>The Tisora Standard</SectionLabel>
            <h2 id="promises-heading" className="section__title">
              Four Pillars.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>
                One Promise.
              </em>
            </h2>
          </div>
          <div className="promises-grid">
            {promises.map((p, i) => (
              <div key={p.title} className={`promise-item reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="promise-item__num">{p.num}</div>
                <h3 className="promise-item__title">{p.title}</h3>
                <p className="promise-item__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════ FEATURED PRODUCTS ═══ */}
      <section className="section" id="featured-products" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>Curated Selection</SectionLabel>
            <h2 id="featured-heading" className="section__title">
              Pieces That Make<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>
                the Room Notice.
              </em>
            </h2>
            <p className="section__sub">
              Not every piece is for everyone. These are the ones that find their person and never let go.
            </p>
          </div>
          <div className="products-grid">
            {products.slice(0, 4).map((p, i) => (
              <div key={p.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <Link to="/products" className="btn-outlined">
              View the Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS MARQUEE ═══ */}
      <section
        className="section section--alt testimonials-section"
        id="testimonials"
        aria-labelledby="testimonials-heading"
      >
        <div className="section__header reveal" style={{ paddingBottom: 0 }}>
          <div className="container">
            <SectionLabel>Customer Stories</SectionLabel>
            <h2 id="testimonials-heading" className="section__title">
              12,000 Families.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>
                12,000 Reasons.
              </em>
            </h2>
            <p className="section__sub" style={{ marginBottom: 'var(--space-5)' }}>
              These are their words, not ours. Real customers. Real moments. Real jewellery that lasted.
            </p>
          </div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="testimonial-marquee-wrapper">
          <div className="testimonial-row testimonial-row--ltr" aria-label="Customer testimonials">
            {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════ BLOG TEASER ═══ */}
      <section className="section" id="blog-teaser" aria-labelledby="blog-teaser-heading">
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>The Tisora Journal</SectionLabel>
            <h2 id="blog-teaser-heading" className="section__title">
              Jewellery Is Never<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>
                Just a Piece of Metal.
              </em>
            </h2>
            <p className="section__sub">
              Stories on craft, style, care, and the quiet significance of the things we choose to wear.
            </p>
          </div>
          <div className="blogs-grid">
            {blogs.slice(0, 3).map((b, i) => (
              <div key={b.id} className={`reveal reveal-delay-${i + 1}`}>
                <BlogCard blog={b} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <Link to="/blogs" className="btn-ghost">Browse All Articles &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ INSTAGRAM ═══ */}
      <section
        className="section instagram-section"
        id="instagram"
        aria-labelledby="instagram-heading"
        style={{ paddingBottom: 'var(--space-5)' }}
      >
        <div className="container">
          <div className="reveal">
            <SectionLabel>Instagram</SectionLabel>
            <h2 id="instagram-heading" className="section__title">
              Follow us on Instagram.
            </h2>
            <p className="section__sub" style={{ marginBottom: 'var(--space-5)' }}>
              Follow @tisorajewels — and tag us when your piece arrives. We share every story.
            </p>
          </div>
        </div>

        <div
          className="instagram-grid reveal"
          aria-hidden="true"
          style={{ maxWidth: '1280px', margin: '0 auto var(--space-5)', padding: '0 var(--space-4)' }}
        >
          {instagramImages.map((src, i) => (
            <div key={i} className="instagram-tile">
              <img src={src} alt={`Tisora jewellery worn ${i + 1}`} loading="lazy" />
              <div className="instagram-tile__inner">
                <svg
                  className="instagram-tile__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://www.instagram.com/tisorajewels/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outlined"
            aria-label="Follow Tisora Jewels on Instagram"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

    </main>
  );
}
