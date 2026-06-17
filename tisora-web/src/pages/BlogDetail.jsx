import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import useReveal from '../hooks/useReveal';

function Blog1Content() {
  return (
    <div style={{ color: '#b0b0b0', maxWidth: '900px', margin: '0 auto', padding: '0 20px', fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.8 }}>

      {/* Intro Image */}
      <div style={{ marginBottom: '40px' }}>
        <img src="/blogs/1.webp" alt="Lab grown diamonds" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
      </div>

      <p style={{ marginBottom: '40px' }}>
        Lab grown diamonds, also known as synthetic or cultured diamonds, are diamonds that are created in a laboratory rather than being formed naturally beneath the Earth's surface. These diamonds have the same physical, chemical, and optical properties as natural diamonds, making them indistinguishable to the naked eye. The process of creating lab-grown diamonds involves replicating the conditions under which natural diamonds are formed, allowing for the controlled growth of diamond crystals.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: '#fff', marginBottom: '16px' }}>Formation of Natural Diamonds:</h2>
      <p style={{ marginBottom: '40px' }}>
        To understand how lab-grown diamonds are created, it's essential to first understand the natural process of diamond formation. Natural diamonds are formed deep within the Earth's mantle under high pressure and temperature conditions. Carbon atoms arrange themselves in a crystal lattice structure, forming diamonds over millions to billions of years. Volcanic eruptions then bring these diamonds closer to the Earth's surface, where they can be mined.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Methods of Lab Grown Diamonds Production:</h2>
      <p style={{ marginBottom: '40px' }}>
        Several methods are used to create lab-grown diamonds, each with its own set of advantages and challenges. The two main techniques are High Pressure High Temperature (HPHT) and Chemical Vapor Deposition (CVD).
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'start' }}>
        <div>
          <img src="/blogs/2.webp" alt="HPHT method" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>1. High Pressure High Temperature (HPHT):</h3>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            <li>In this method, a small seed diamond (a natural or synthetic diamond fragment) is placed in a press along with carbon source material (usually graphite).</li>
            <li>The press subjects the materials to extremely high pressure and temperature, mimicking the conditions found deep within the Earth where natural diamonds are formed.</li>
            <li>Over time, the carbon atoms in the graphite align themselves into a crystal lattice structure, gradually growing into a larger diamond around the seed.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>2. Chemical Vapor Deposition (CVD):</h3>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>CVD is a process that involves creating a gas mixture containing carbon-rich gases, such as methane.</li>
            <li>The gas mixture is introduced into a chamber, and a substrate (often a thin slice of diamond) is exposed to the gases.</li>
            <li>Through a series of chemical reactions, carbon atoms are deposited onto the substrate, gradually forming a diamond layer.</li>
            <li>This process allows for more precise control over the diamond's growth, including the ability to create complex shapes and structures.</li>
          </ul>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Advantages of Lab Grown Diamonds:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li><strong>Ethical Considerations:</strong> Lab grown diamonds are considered more ethical by some consumers as they are not associated with the environmental and social issues often linked to traditional diamond mining, such as human rights abuses and environmental degradation.</li>
            <li><strong>Cost:</strong> Lab grown diamonds can be less expensive to produce than their natural counterparts, leading to potentially lower prices for consumers.</li>
            <li><strong>Controlled Quality:</strong> The laboratory environment allows for precise control over the diamond-growing process, resulting in diamonds with fewer impurities and consistent quality.</li>
            <li><strong>Customization:</strong> Lab grown diamonds offer the possibility of creating diamonds with specific characteristics, such as color and size, based on customer preferences.</li>
          </ol>
        </div>
        <div>
          <img src="/blogs/3.webp" alt="Advantages" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Challenges and Concerns:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <img src="/blogs/4.webp" alt="Challenges" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li><strong>Perception and Marketing:</strong> Despite their identical physical properties, lab-grown diamonds can face skepticism or resistance due to perceptions surrounding the traditional value and rarity associated with natural diamonds.</li>
            <li><strong>Energy Consumption:</strong> The production of laboratory grown diamonds requires energy, and the environmental impact depends on the source of that energy. Some critics argue that if the electricity used is generated from non-renewable sources, the environmental benefits of lab-grown diamonds may be diminished.</li>
            <li><strong>Limited Size:</strong> Currently, producing larger lab-grown diamonds can be more challenging and time-consuming compared to natural diamonds.</li>
            <li><strong>Market Confusion:</strong> Consumers may find it confusing to differentiate between natural and lab grown diamonds. Transparency in labelling and certification is crucial to avoid misunderstandings.</li>
          </ol>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Market and Industry Impact:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '40px', alignItems: 'center' }}>
        <div>
          <p style={{ marginBottom: '20px' }}>
            The market for lab grown diamonds has seen significant growth in recent years. Many consumers are attracted to the ethical and environmental considerations associated with lab grown diamonds, contributing to their increasing popularity. Some jewelry retailers now offer a choice between natural and lab grown diamonds, giving consumers more options.
          </p>
          <p>
            Major players in the diamond industry, including renowned jewelry brands, have started incorporating lab grown diamonds into their collections. This shift indicates a recognition of the changing consumer preferences and the industry's willingness to adapt to new technologies.
          </p>
        </div>
        <div>
          <img src="/blogs/5.webp" alt="Industry Impact" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      <p style={{ marginBottom: '20px' }}>
        <span style={{ color: '#D4A017' }}>Lab grown diamonds</span> represent a technological advancement in the jewelry industry, providing consumers with an alternative to traditional, naturally occurring diamonds. As technology continues to evolve, lab grown diamonds will likely become more widely accepted and integrated into the mainstream jewelry market.
      </p>

      <p style={{ marginBottom: '40px' }}>
        The ethical considerations, controlled quality, and potential cost savings associated with lab grown diamonds make them an appealing choice for environmentally and socially conscious consumers. However, challenges such as market perception and energy consumption must be addressed to ensure the continued growth and acceptance of lab-grown diamonds in the global diamond industry.
      </p>
    </div>
  );
}

function Blog2Content() {
  return (
    <div style={{ color: '#b0b0b0', maxWidth: '900px', margin: '0 auto', padding: '0 20px', fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.8 }}>

      {/* Intro Image */}
      <div style={{ marginBottom: '40px' }}>
        <img src="/blogs/2.1.webp" alt="Lab Grown vs Natural Diamonds" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
      </div>

      <p style={{ marginBottom: '60px' }}>
        The age-old allure of diamonds has captivated humanity for centuries. They symbolize love, prestige, and eternity, making them highly sought-after gemstones. However, recent advancements in technology have introduced lab-grown diamonds as a compelling alternative to traditional mined diamonds. The debate between lab-grown and mined diamonds often revolves around their origins, ethical implications, environmental impact, and their indistinguishable physical properties.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '16px' }}>Lab-Grown vs. Mined Diamonds: Spot the Difference?</h2>
      <p style={{ marginBottom: '40px' }}>
        Let's delve into these aspects to decipher the intricate differences and similarities between lab-grown and mined diamonds.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Origins:</h2>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Mined Diamonds:</h3>
      <p style={{ marginBottom: '32px' }}>
        Mined diamonds are sourced from deep within the Earth's crust, formed over millions of years under extreme pressure and heat. They are extracted through mining operations, a process involving significant environmental disruption and often raising ethical concerns regarding labor practices, human rights abuses, and the financing of conflicts, commonly referred to as "blood" or "conflict" diamonds.
      </p>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Lab Grown Diamonds:</h3>
      <p style={{ marginBottom: '60px' }}>
        In contrast, lab-grown diamonds, also known as synthetic or cultured diamonds, are produced in controlled environments using advanced technological processes. These diamonds are created by replicating the natural conditions necessary for diamond formation, employing two primary methods: High Pressure-High Temperature (HPHT) and Chemical Vapor Deposition (CVD). Lab-grown diamonds offer an ethically and environmentally conscious alternative, devoid of the socio-political issues surrounding mined diamonds.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Ethical and Environmental Considerations:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '32px', alignItems: 'center' }}>
        <div>
          <img src="/blogs/2.2.webp" alt="Ethical Considerations" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Mined Diamonds:</h3>
          <p>
            The diamond mining industry has faced scrutiny due to its historical association with human rights abuses and environmental degradation. While efforts have been made to improve mining practices and ensure ethical sourcing through initiatives like the Kimberley Process, flaws persist, leading to concerns about labor conditions, displacement of communities, and ecosystem destruction caused by mining operations.
          </p>
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Lab-Grown Diamonds:</h3>
      <p style={{ marginBottom: '60px' }}>
        One of the primary advantages of lab-grown diamonds lies in their ethical and environmental credentials. These diamonds have a significantly smaller environmental footprint as they do not require extensive mining activities. They also circumvent the ethical issues related to traditional diamond mining, offering consumers a guilt-free alternative.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Physical and Chemical Properties:</h2>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Mined Diamonds:</h3>
      <p style={{ marginBottom: '32px' }}>
        Mined diamonds and lab-grown diamonds share identical chemical compositions, both being composed of carbon atoms arranged in a crystalline structure, leading to their remarkable hardness and brilliance. Mined diamonds, due to their natural formation process, might possess certain inclusions or unique characteristics that some consider desirable, such as natural imperfections or color variations.
      </p>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Lab-Grown Diamonds:</h3>
      <p style={{ marginBottom: '60px' }}>
        Lab-grown diamonds exhibit the same physical and chemical properties as mined diamonds since they are created using the same carbon atoms. They are optically, chemically, and physically indistinguishable from natural diamonds, making them equally desirable in terms of beauty, durability, and brilliance.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Pricing and Market Perception:</h2>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Mined Diamonds:</h3>
      <p style={{ marginBottom: '40px' }}>
        Historically, natural or mined diamonds have held significant value due to their rarity and the perceived notion of their natural origins. However, market perceptions are evolving as consumers become more informed about lab-grown diamonds and their advantages, leading to shifts in preferences and pricing dynamics.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>Lab-Grown Diamonds:</h3>
          <p>
            Lab-grown diamonds, initially considered a more affordable alternative to mined diamonds, have seen increased acceptance and demand, leading to closer parity in pricing. The growing awareness of their ethical and environmental benefits has attracted a segment of consumers who prioritize sustainability and social responsibility in their purchasing decisions.
          </p>
        </div>
        <div>
          <img src="/blogs/2.3.webp" alt="Lab-Grown Diamonds" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Can You Tell the Difference- Lab-Grown vs. Mined Diamonds?</h2>
      <p style={{ marginBottom: '20px' }}>
        Given the identical chemical composition and physical properties, distinguishing between lab-grown vs. mined diamonds becomes exceedingly challenging without specialized equipment. Gemological laboratories and trained professionals utilize advanced techniques like spectroscopy and microscopic examination to differentiate between the two. However, to the unaided eye, there is no discernible difference in appearance, brilliance, or durability.
      </p>
      <p style={{ marginBottom: '40px' }}>
        The Bling Battle between lab-grown vs. mined diamonds extends beyond mere aesthetics. It encompasses ethical considerations, environmental impact, and market dynamics. While mined diamonds hold a traditional allure and historical significance, <span style={{ color: '#D4A017' }}>lab grown diamonds</span> offer a more ethically sound and environmentally friendly option without compromising on quality or beauty. As consumer awareness continues to evolve, the choice between these two types of diamonds ultimately rests on individual preferences, values, and priorities.
      </p>
    </div>
  );
}

function Blog3Content() {
  return (
    <div style={{ color: '#b0b0b0', maxWidth: '900px', margin: '0 auto', padding: '0 20px', fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.8 }}>

      {/* Intro Image */}
      <div style={{ marginBottom: '40px' }}>
        <img src="/blogs/3.1.webp" alt="Lab-Grown Diamonds Shine for Sustainability" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
      </div>

      <p style={{ marginBottom: '60px' }}>
        In recent years, the diamond industry has witnessed a revolutionary shift with the emergence of lab-grown diamonds. These diamonds, also known as synthetic or cultured diamonds, are created through advanced technological processes in a laboratory setting, as opposed to being extracted from the earth through traditional mining. This innovative approach not only transforms the diamond market but also holds significant promise for environmental sustainability and ethical considerations.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>I. The Environmental Impact of Traditional Diamond Mining:</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>A. Ecological Disturbances:</h3>
          <p style={{ marginBottom: '24px' }}>
            Traditional diamond mining often involves large-scale excavation, leading to substantial ecological disturbances. The process of extracting diamonds from the earth can result in deforestation, habitat destruction, and soil erosion, negatively impacting local ecosystems.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>B. Carbon Footprint:</h3>
          <p>
            The carbon footprint associated with traditional diamond mining is another pressing concern. Mines require substantial energy for extraction, transportation, and processing, contributing to greenhouse gas emissions. Lab-grown diamonds, on the other hand, offer a more environmentally friendly alternative.
          </p>
        </div>
        <div>
          <img src="/blogs/3.2.webp" alt="Environmental Impact" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>II. Lab-Grown Diamonds and Environmental Sustainability:</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <img src="/blogs/3.3.webp" alt="Environmental Sustainability" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>A. Reduced Environmental Footprint:</h3>
          <p style={{ marginBottom: '24px' }}>
            One of the most significant advantages of lab-grown diamonds is their minimal environmental impact. The production of these diamonds typically requires less energy and water compared to traditional mining. The controlled laboratory environment also eliminates the need for extensive land use and prevents habitat disruption.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>B. Energy Efficiency:</h3>
          <p>
            <span style={{ color: '#D4A017' }}>Lab-grown diamond production</span> is often more energy-efficient than traditional mining. Advances in technology have allowed for more precise control over the diamond-growing process, reducing the overall energy consumption. Some labs even use renewable energy sources, further enhancing the sustainability of lab-grown diamonds.
          </p>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>III. Ethical Considerations and Social Responsibility:</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>A. Conflict-Free Diamonds:</h3>
          <p style={{ marginBottom: '24px' }}>
            Traditional diamonds have been associated with the issue of conflict diamonds, also known as “blood diamonds.” These diamonds are sourced from regions where the profits fund armed conflict, often leading to human rights abuses. Lab-grown diamonds, being free from such ethical concerns, offer consumers a guilt-free alternative.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>B. Fair Labor Practices:</h3>
          <p>
            Diamond mining, particularly in developing countries, has been linked to poor labor conditions and exploitation. Lab-grown diamonds, produced in controlled environments, provide an opportunity for the industry to uphold fair labor practices, ensuring a more socially responsible supply chain.
          </p>
        </div>
        <div>
          <img src="/blogs/3.4.webp" alt="Ethical Considerations" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>IV. The Technological Marvel of Lab-Grown Diamonds:</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <img src="/blogs/3.5.webp" alt="Technological Marvel" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>A. High-Quality Standards:</h3>
          <p style={{ marginBottom: '24px' }}>
            Advancements in diamond-growing technology have enabled the production of high-quality diamonds that are virtually indistinguishable from their natural counterparts. These diamonds exhibit the same physical, chemical, and optical characteristics as mined diamonds, meeting the stringent standards set by the industry.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>B. Customization and Innovation:</h3>
          <p>
            Lab-grown diamonds allow for unprecedented customization and innovation in the jewelry industry. Manufacturers can produce diamonds of various shapes, sizes, and colors, catering to diverse consumer preferences. This flexibility opens up new possibilities for designers and consumers alike.
          </p>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>V. Consumer Awareness and Acceptance:</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>A. Changing Perspectives:</h3>
          <p style={{ marginBottom: '24px' }}>
            As consumers become more environmentally and socially conscious, there has been a noticeable shift in preferences towards sustainable and ethical products. Lab-grown diamonds align with these values, attracting a growing segment of the market that seeks responsible alternatives to traditional mined diamonds.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>B. Market Growth and Accessibility:</h3>
          <p>
            The lab-grown diamond market has experienced significant growth in recent years, driven by increased awareness and acceptance among consumers. As technology continues to improve, production costs decrease, making lab-grown diamonds more accessible and competitive in the jewelry market.
          </p>
        </div>
        <div>
          <img src="/blogs/3.6.webp" alt="Consumer Awareness" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#fff', marginBottom: '24px' }}>VI. Challenges and Future Prospects:</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <img src="/blogs/3.7.webp" alt="Challenges and Future" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>A. Public Perception:</h3>
          <p style={{ marginBottom: '24px' }}>
            Despite the many benefits of lab-grown diamonds, some challenges remain, including perceptions that they lack the rarity and mystique associated with natural diamonds. However, education campaigns and transparent communication about the sustainability and ethical aspects of lab-grown diamonds can help address these concerns.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '16px' }}>B. Technological Advancements:</h3>
          <p>
            Ongoing research and development in diamond-growing technology hold the potential to further enhance the efficiency and sustainability of lab-grown diamond production. Continued innovation will likely contribute to overcoming existing challenges and solidifying lab-grown diamonds as a mainstream and eco-friendly choice.
          </p>
        </div>
      </div>

      <p style={{ marginBottom: '40px' }}>
        Lab-grown diamonds represent a shining beacon of sustainability in the jewelry industry. With their minimal environmental impact, ethical production methods, and technological advancements, these diamonds are paving the way for a more responsible and eco-friendly future. As consumer awareness continues to grow, lab-grown diamonds are poised to become a mainstream choice, redefining the landscape of the diamond market for generations to come.
      </p>
    </div>
  );
}

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useReveal();

  useEffect(() => {
    // Find the blog by id
    const found = blogs.find(b => b.id === parseInt(id));
    setBlog(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', marginBottom: 'var(--space-3)' }}>Article Not Found</h1>
        <Link to="/blogs" className="btn-primary">Back to Journal</Link>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: '#181818', color: '#E5E5E5', minHeight: '100vh', paddingBottom: 'var(--space-8)' }}>
      {/* Header section matching the dark theme screenshot */}
      <section style={{ paddingTop: 'calc(var(--space-7) + 60px)', paddingBottom: 'var(--space-5)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: 'var(--space-3)'
          }}>
            {blog.title}
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#b0b0b0',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {blog.excerpt}
          </p>
        </div>
      </section>

      {/* Render specialized content for the blogs */}
      {blog.id === 1 ? (
        <Blog1Content />
      ) : blog.id === 2 ? (
        <Blog2Content />
      ) : blog.id === 3 ? (
        <Blog3Content />
      ) : (
        <section className="section" style={{ paddingBottom: 'var(--space-5)' }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto', color: '#b0b0b0' }}>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Content for {blog.title} is coming soon. Stay tuned!
            </p>
          </div>
        </section>
      )}

      {/* Global Full-width Certification Logo Strip for Sub-Blogs */}
      <div className="reveal" style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <img src="/blogs/IGI.webp" alt="IGI Certified Diamonds" style={{ maxWidth: '200px', display: 'block' }} />
      </div>

      {/* Back Link */}
      <div style={{ marginTop: 'var(--space-6)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-5)' }}>
        <Link to="/blogs" style={{
          display: 'inline-block',
          border: '1px solid #D4A017',
          color: '#D4A017',
          padding: '10px 24px',
          borderRadius: '30px',
          fontSize: '14px',
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          ← Back to Journal
        </Link>
      </div>
    </main>
  );
}
