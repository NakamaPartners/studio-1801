import heroLead from '@assets/Image_7_1787435406771.jpeg';

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
            can<span className="reference-apostrophe">’</span>t unsee.
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

        <section id="work" className="reference-right">
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
    </main>
  );
}