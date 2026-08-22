import { useState } from 'react';
import heroLead from '@assets/Image_7_1787435406771.jpeg';
import projectOne from '@assets/Unknown_1787438547314.png';
import projectTwo from '@assets/Unknown1_1787438547314.png';
import projectThree from '@assets/Unknown2_1787438547314.png';
import serviceDesign from '@assets/image_1787440461289.png';
import serviceDevelopment from '@assets/image_1787441232956.png';
import serviceIntegration from '@assets/image_1787440676159.png';
import serviceSeo from '@assets/image_1787440851872.png';
import processOne from '@assets/image_1787442021416.png';
import processTwo from '@assets/image_1787442058572.png';
import processThree from '@assets/image_1787442170090.png';
import processFour from '@assets/image_1787442266936.png';
import processFive from '@assets/image_1787442378754.png';
import processSix from '@assets/image_1787442428529.png';

const serviceOptions = [
  {
    label: 'Website Design',
    number: '01',
    description: 'Distinctive digital identities that make a restaurant feel familiar before a guest ever walks through the door.',
    image: serviceDesign,
    alt: 'Abstract blue, coral, and cream texture',
  },
  {
    label: 'Website Development',
    number: '02',
    description: 'Clean, considered code that keeps your site quick, responsive, and easy to use on every screen.',
    image: serviceDevelopment,
    alt: 'Abstract red, orange, and blue vertical texture',
  },
  {
    label: 'Website Integration',
    number: '03',
    description: 'The right reservations, ordering, and menu tools connected into one effortless guest journey.',
    image: serviceIntegration,
    alt: 'Soft abstract landscape in muted neutral tones',
  },
  {
    label: 'SEO Development',
    number: '04',
    description: 'A clearer structure and smarter content that helps the right guests find you, then choose you.',
    image: serviceSeo,
    alt: 'Abstract rippled image with soft blue, green, and coral tones',
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="reference-page">
      <div className="reference-frame">
        <nav className="reference-nav" aria-label="Main navigation">
          <a className="reference-studio" href="#top">Studio 1801</a>
          <div className="reference-nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
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
          <strong>Studio 1801</strong>
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
        <div className="work-meta" aria-hidden="true">
          <span>Selected works</span>
          <span>Food and beverage</span>
          <span>03</span>
          <span>2024—25</span>
        </div>
        <div className="work-intro">
          <h2>Selected works</h2>
          <p className="work-summary">
            Digital identities and spaces for places worth remembering.
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

      <section id="what-we-do" className="reference-services">
        <h2 className="sr-only">What we do</h2>
        <div className="services-layout">
          <div className="services-copy" aria-live="polite">
            <div className="service-detail" key={activeService}>
              <span className="service-detail-number">{serviceOptions[activeService].number}</span>
              <h3>{serviceOptions[activeService].label}</h3>
              <p>{serviceOptions[activeService].description}</p>
            </div>
          </div>

          <nav className="services-list" aria-label="What we do">
            {serviceOptions.map((service, index) => (
              <button
                className={`service-item ${activeService === index ? 'service-item-active' : ''}`}
                key={service.label}
                type="button"
                aria-pressed={activeService === index}
                onClick={() => setActiveService(index)}
              >
                <span>{service.label}</span>
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </nav>

          <div className="services-image">
            <img src={serviceOptions[activeService].image} alt={serviceOptions[activeService].alt} />
          </div>
        </div>

        <div className="services-proof" aria-label="Studio 1801 guarantees">
          <div className="proof-item">
            <strong>7 day</strong>
            <span>guarantee delivery</span>
          </div>
          <div className="proof-item">
            <strong>95%</strong>
            <span>satisfaction rate</span>
          </div>
          <div className="proof-item">
            <strong>Unlimited</strong>
            <span>revisions</span>
          </div>
        </div>
      </section>

      <section id="process" className="reference-process">
        <div className="process-meta" aria-hidden="true">
          <span>How we work</span>
          <span>From first idea to launch</span>
          <span>Studio 1801</span>
          <span>01—06</span>
        </div>

        <div className="process-intro">
          <h2>Design process</h2>
          <p>
            Thoughtful work for restaurants that want to be chosen, remembered,
            and visited again.
          </p>
        </div>

        <div className="process-steps">
          {[
            {
              duration: '2–3 days',
              title: 'Brief and discovery',
              copy: 'We learn what makes your place worth crossing the street for.',
              image: processOne,
              alt: 'Person standing beneath a wide sky on a checkered landscape',
            },
            {
              duration: '3–5 days',
              title: 'Research and direction',
              copy: 'We find the clearest story, audience, and visual point of view.',
              image: processTwo,
              alt: 'Creative research wall with connected references and notes',
            },
            {
              duration: '1 week',
              title: 'Structure and prototype',
              copy: 'We shape the experience around menus, moments, and momentum.',
              image: processThree,
              alt: 'Black and white architectural structure in a city street',
            },
            {
              duration: '1–2 weeks',
              title: 'Design and refinement',
              copy: 'We make every page feel as considered as the room itself.',
              image: processFour,
              alt: 'Classic car beside a red wall and reflecting pool',
            },
            {
              duration: '1–2 weeks',
              title: 'Build and integration',
              copy: 'We connect the tools that make booking and ordering effortless.',
              image: processFive,
              alt: 'Light installation with landscapes and colorful lines in a dark space',
            },
            {
              duration: 'Ongoing',
              title: 'Launch and growth',
              copy: 'We stay close after launch, using what we learn to keep improving.',
              image: processSix,
              alt: 'Person looking up beneath a curved sky and checkerboard floor',
            },
          ].map((step, index) => (
            <article className={`process-step process-step-${index + 1}`} key={step.title}>
              <span className="process-duration">{step.duration}</span>
              <div className="process-step-image">
                <img src={step.image} alt={step.alt} />
              </div>
              <div className="process-step-copy">
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="process-philosophy">
          <h3>A good website should feel like the first warm welcome.</h3>
          <p>
            Clear enough to guide a guest, distinctive enough to stay with them,
            and useful enough to bring them back.
          </p>
        </div>
      </section>
    </main>
  );
}