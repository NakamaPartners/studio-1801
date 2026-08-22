import heroLead from '@assets/Image_7_1787435406771.jpeg';
import projectOne from '@assets/Unknown_1787438547314.png';
import projectTwo from '@assets/Unknown1_1787438547314.png';
import projectThree from '@assets/Unknown2_1787438547314.png';

export default function Home() {
  return (
    <main className="reference-page">
      <div className="reference-frame">
        <nav className="reference-nav" aria-label="Main navigation">
          <a className="reference-studio" href="#top">Studio 1801</a>
          <div className="reference-nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
          </div>
          <a className="reference-project-link" href="mailto:hello@studio1801.com">
            Start a Project <span aria-hidden="true">→</span>
          </a>
        </nav>

        <div className="reference-meta" aria-hidden="true">
          <span>Studio 1801</span>
          <span>Independent web studio</span>
          <span>01</span>
          <span>Web design</span>
        </div>

        <section id="services" className="reference-left">
          <p className="reference-kicker">For food and beverage</p>
          <h1>
            The work you
            <br />
            can’t unsee.
          </h1>
          <p className="reference-description">
            Thoughtful digital spaces for places
            <br />
            worth remembering. Strategy, design,
            <br />
            and development without the noise.
          </p>
        </section>

        <footer className="reference-footer">
          <div className="reference-locations">
            <span>Based in New York</span>
            <span>Working everywhere</span>
          </div>
          <strong>STUDIO 1801</strong>
        </footer>

        <section className="reference-right">
          <div className="reference-work-copy">
            <h2>
              Make a better first
              <br />
              impression.
            </h2>
            <p>
              A clear, considered website that gives your
              <br />
              best work the attention it deserves.
            </p>
            <a href="#work">Explore the work <span aria-hidden="true">→</span></a>
          </div>
          <div className="reference-image">
            <img src={heroLead} alt="Soft-focus flowers against a blue sky" />
          </div>
        </section>

        <span className="reference-scroll" aria-hidden="true">
          scroll <span>∨</span>
        </span>
      </div>

      <section id="about" className="reference-about">
        <p className="about-eyebrow">(Studio 1801 ®)</p>
        <p className="about-statement">
          Studio 1801 ® — a design studio
          <br className="about-desktop-break" />
          working at the intersection of brand,
          <br className="about-desktop-break" />
          product, and technology. Designing
          <br className="about-desktop-break" />
          brands and digital products that move
          <br className="about-desktop-break" />
          businesses forward.
        </p>
        <a className="about-cta" href="mailto:hello@studio1801.com">
          <span aria-hidden="true">•</span>
          Let&apos;s chat
        </a>
      </section>

      <section id="work" className="reference-work">
        <div className="work-intro">
          <div>
            <p className="work-eyebrow">Selected work / 2024—25</p>
            <h2>Selected works</h2>
          </div>
          <p className="work-summary">
            A selection of places, plates, and brands made to be remembered.
          </p>
        </div>

        <div className="work-grid">
          <article className="work-card work-card-tall">
            <div className="work-card-image">
              <img src={projectOne} alt="A plated pasta dish in a dark restaurant setting" />
              <span className="work-card-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="work-card-meta">
              <h3>After Hours</h3>
              <p>Restaurant identity <span>·</span> Digital</p>
            </div>
          </article>
          <article className="work-card">
            <div className="work-card-image">
              <img src={projectTwo} alt="People sharing dim sum at a restaurant table" />
              <span className="work-card-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="work-card-meta">
              <h3>Common Table</h3>
              <p>Hospitality <span>·</span> Art direction</p>
            </div>
          </article>
          <article className="work-card">
            <div className="work-card-image">
              <img src={projectThree} alt="A Japanese-inspired meal served on a tray" />
              <span className="work-card-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="work-card-meta">
              <h3>Field Notes</h3>
              <p>Food studio <span>·</span> Web experience</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}