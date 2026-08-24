import type { RouteComponentProps } from 'wouter';
import projectOne from '@assets/Unknown_1787504780455.png';
import projectTwo from '@assets/Unknown1_1787438547314.png';
import projectThree from '@assets/Unknown2_1787438547314.png';
import projectFour from '@assets/image_1787495321878.png';
import projectFive from '@assets/image_1787495413455.png';
import projectSix from '@assets/image_1787495063895.png';

const projects = [
  {
    slug: 'after-hours',
    number: '01',
    title: 'After Hours',
    category: 'Restaurant identity · Digital',
    image: projectOne,
    alt: 'A plated pasta dish in a dark restaurant setting',
    intro: 'A late-night restaurant identity made to feel as considered as the room itself.',
    details: 'Brand direction, digital experience, and a warmer way to welcome guests after dark.',
  },
  {
    slug: 'common-table',
    number: '02',
    title: 'Common Table',
    category: 'Hospitality · Art direction',
    image: projectTwo,
    alt: 'People sharing dim sum at a restaurant table',
    intro: 'A generous visual language for a place built around sharing.',
    details: 'Art direction and hospitality storytelling shaped around the rituals of gathering.',
  },
  {
    slug: 'field-notes',
    number: '03',
    title: 'Field Notes',
    category: 'Food studio · Web experience',
    image: projectThree,
    alt: 'A Japanese-inspired meal served on a tray',
    intro: 'A digital home for food with a point of view.',
    details: 'A tactile web experience that gives every dish, story, and detail room to breathe.',
  },
  {
    slug: 'the-flour-room',
    number: '04',
    title: 'The Flour Room',
    category: 'Bakery identity · Digital',
    image: projectFour,
    alt: 'Bakers arranging rows of fresh croissants on a tray',
    intro: 'A bakery identity grounded in craft, warmth, and the first bake of the day.',
    details: 'Identity and digital design for a bakery that makes the everyday feel special.',
  },
  {
    slug: 'market-table',
    number: '05',
    title: 'Market Table',
    category: 'Restaurant identity · Digital',
    image: projectFive,
    alt: 'A Thai restaurant table filled with colorful shared dishes',
    intro: 'A lively restaurant world built around abundance and connection.',
    details: 'A bright identity and digital experience designed to move at the pace of the table.',
  },
  {
    slug: 'first-light',
    number: '06',
    title: 'First Light',
    category: 'Café identity · Digital',
    image: projectSix,
    alt: 'Coffee and a pastry on a warm wooden cafe table',
    intro: 'A quiet café identity for slow starts and good daily rituals.',
    details: 'Brand and digital direction that carries the feeling of the first cup into every touchpoint.',
  },
];

function AfterHoursPage() {
  const products = [
    { image: projectOne, name: 'Handmade pasta with tomato', price: '$18.00' },
    { image: projectFive, name: 'Sunday sauce, slow cooked', price: '$16.00' },
    { image: projectTwo, name: 'Eggplant parmigiana', price: '$23.00' },
  ];

  return (
    <main className="after-hours-page" data-testid="page-project-after-hours">
      <div className="after-hours-topbar">New products arriving in our online store soon</div>
      <section
        className="after-hours-hero"
        style={{ backgroundImage: `linear-gradient(rgba(10, 18, 15, 0.5), rgba(10, 18, 15, 0.62)), url(${projectOne})` }}
      >
        <nav className="after-hours-nav" aria-label="After Hours navigation">
          <a className="after-hours-logo" href={`${import.meta.env.BASE_URL}`}>After Hours</a>
          <div className="after-hours-nav-links">
            <a href="#shop">Shop</a>
            <a href="#story">Our story</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="after-hours-nav-actions" aria-label="Quick links">
            <span aria-hidden="true">⌕</span>
            <span aria-hidden="true">♡</span>
            <span aria-hidden="true">□</span>
          </div>
        </nav>
        <div className="after-hours-hero-copy">
          <span>Handmade, after dark</span>
          <h1>Pasta fresca a mano.</h1>
          <p>
            We create the finest handmade pasta using only the best ingredients
            our local producers have to offer. Alongside our pasta fresco, we
            specialise in restaurant quality meals to cook at home.
          </p>
        </div>
      </section>

      <section id="shop" className="after-hours-shop">
        <span className="after-hours-section-label">The pantry</span>
        <h2>Shop our best sellers</h2>
        <p className="after-hours-section-copy">
          For that special occasion, a spontaneous gathering, or a simple yet
          nourishing meal at home.
        </p>
        <div className="after-hours-products">
          {products.map((product) => (
            <article className="after-hours-product" key={product.name}>
              <div className="after-hours-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>From {product.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="after-hours-story">
        <div className="after-hours-story-image">
          <img src={projectFour} alt="Freshly baked croissants arranged on a tray" />
        </div>
        <div className="after-hours-story-copy">
          <h2>Made slowly.<br />Shared generously.</h2>
          <p>Simple ingredients, honest work, and a table worth staying around.</p>
          <a href="#contact">Our story <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section id="contact" className="after-hours-newsletter">
        <h2>Stay a little longer.</h2>
        <p>Join our mailing list for new dishes, recipes, and evenings worth remembering.</p>
        <form className="after-hours-form" onSubmit={(event) => event.preventDefault()}>
          <input type="email" aria-label="Email address" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer className="after-hours-footer">
        <div>
          <strong>After Hours</strong>
          <p>Handmade pasta, made for sharing.</p>
        </div>
        <div>
          <span>New York, NY</span>
          <span>hello@afterhours.com</span>
        </div>
        <div className="after-hours-footer-links">
          <a href="#shop">Shop</a>
          <a href="#story">Our story</a>
          <a href={`${import.meta.env.BASE_URL}#work`}>Studio 1801</a>
        </div>
      </footer>
    </main>
  );
}

export default function ProjectPage({ params }: RouteComponentProps<{ slug: string }>) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return (
      <main className="portfolio-page">
        <div className="portfolio-frame portfolio-not-found">
          <a className="portfolio-back" href={`${import.meta.env.BASE_URL}#work`}>← Back to selected works</a>
          <h1>Project not found.</h1>
        </div>
      </main>
    );
  }

  if (project.slug === 'after-hours') {
    return <AfterHoursPage />;
  }

  return (
    <main className="portfolio-page" data-testid={`page-project-${project.slug}`}>
      <div className="portfolio-frame">
        <header className="portfolio-nav">
          <a className="portfolio-brand" href={`${import.meta.env.BASE_URL}`}>Studio 1801</a>
          <span>Selected work · {project.number}</span>
          <a className="portfolio-back" href={`${import.meta.env.BASE_URL}#work`}>Back to work <span aria-hidden="true">↗</span></a>
        </header>

        <div className="portfolio-intro">
          <div>
            <span className="portfolio-kicker">Restaurant portfolio</span>
            <h1 data-testid="text-project-title">{project.title}</h1>
          </div>
          <p>{project.intro}</p>
        </div>

        <div className="portfolio-image">
          <img src={project.image} alt={project.alt} data-testid="img-project-portfolio" />
        </div>

        <div className="portfolio-details">
          <div>
            <span className="portfolio-label">The work</span>
            <p>{project.details}</p>
          </div>
          <div>
            <span className="portfolio-label">Focus</span>
            <p>{project.category}</p>
          </div>
          <a className="portfolio-contact" href="mailto:hello@studio1801.com?subject=Start%20a%20project">
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </main>
  );
}