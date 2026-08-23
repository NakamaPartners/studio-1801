import { useState } from 'react';
import heroLead from '@assets/Image_7_1787435406771.jpeg';
import projectOne from '@assets/Unknown_1787504780455.png';
import projectTwo from '@assets/Unknown1_1787438547314.png';
import projectThree from '@assets/Unknown2_1787438547314.png';
import projectFour from '@assets/image_1787495321878.png';
import projectFive from '@assets/image_1787495413455.png';
import projectSix from '@assets/image_1787495063895.png';
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
    <main className="reference-page" data-testid="page-home">
      <div className="reference-frame" data-testid="frame-hero">
        <nav className="reference-nav" aria-label="Main navigation" data-testid="nav-main">
          <a className="reference-studio" href="#top" data-testid="link-studio-home">Studio 1801</a>
          <div className="reference-nav-links">
            <a href="#work" data-testid="link-nav-work">Work</a>
            <a href="#services" data-testid="link-nav-services">Services</a>
            <a href="#process" data-testid="link-nav-process">Process</a>
          </div>
          <a className="reference-project-link" href="mailto:hello@studio1801.com" data-testid="link-nav-contact">
            Start a Project <span aria-hidden="true">→</span>
          </a>
        </nav>

        <div className="reference-meta" aria-hidden="true" data-testid="hero-meta">
          <span>Studio 1801</span>
          <span>Independent web studio</span>
          <span>01</span>
          <span>Web design</span>
        </div>

        <div className="hero-content">
          <section id="services" className="reference-left" data-testid="section-hero-left">
            <span className="hero-eyebrow" data-testid="text-hero-eyebrow">The work you can't unsee</span>
            <h1 data-testid="text-hero-title">
              See Your New Website.
              <br />
              Before You Pay.
            </h1>
            <p className="reference-description" data-testid="text-hero-desc">
              7 Ways Your Website Is Losing Customers. We'll Show You Exactly How
              We'd Fix Them.
            </p>
            <ul className="hero-checks" aria-label="What is included" data-testid="list-hero-checks">
              <li>Custom restaurant homepage</li>
              <li>Live in 48 hours</li>
              <li>7 revenue leaks identified</li>
              <li className="hero-check-emphasis">Keep it. No risk.</li>
            </ul>
            <div className="hero-actions">
              <a className="hero-cta" href="mailto:hello@studio1801.com?subject=Claim%20my%20Free%20Offer" data-testid="button-claim-offer">
                Claim your Free Offer <span aria-hidden="true">→</span>
              </a>
              <a className="hero-secondary-cta" href="mailto:hello@studio1801.com?subject=Contact%20Studio%201801" data-testid="button-contact">
                Contact us <span aria-hidden="true">↗</span>
              </a>
            </div>
            <a className="hero-work-link" href="mailto:hello@studio1801.com?subject=Claim%20my%20Free%20Personalized%20Review" data-testid="link-hero-work">
              <span aria-hidden="true">•</span> Build your website before you spend a dollar
            </a>
          </section>

          <section className="reference-right" data-testid="section-hero-right">
            <div className="reference-work-copy">
              <h2 data-testid="text-hero-secondary-title">
                Make a better first impression.
              </h2>
              <p data-testid="text-hero-secondary-desc">
                A clear, considered website that gives your best work the attention it deserves.
              </p>
              <a href="#work" data-testid="link-hero-explore">Explore the work <span aria-hidden="true">→</span></a>
            </div>
            <div className="reference-image" data-testid="img-hero-lead-container">
              <img src={heroLead} alt="Soft-focus flowers against a blue sky" data-testid="img-hero-lead" />
            </div>
          </section>
        </div>

        <footer className="reference-footer" data-testid="footer-hero">
          <div className="reference-locations">
            <span data-testid="text-footer-location-1">Based in New York</span>
            <span data-testid="text-footer-location-2">Working everywhere</span>
          </div>
          <strong data-testid="text-footer-brand">Studio 1801</strong>
          <span className="reference-scroll" aria-hidden="true">scroll ↓</span>
        </footer>
      </div>

      <section id="about" className="reference-about" data-testid="section-about">
        <span className="about-label" data-testid="text-about-label">( Studio 1801 ® )</span>
        <p className="about-statement" data-testid="text-about-statement">
          Studio 1801 ®, a design studio
          <br className="about-desktop-break" />
          working at the intersection of brand,
          <br className="about-desktop-break" />
          product, and technology. Designing
          <br className="about-desktop-break" />
          brands and digital products that move
          <br className="about-desktop-break" />
          businesses forward.
        </p>
        <a className="about-cta" href="mailto:hello@studio1801.com" data-testid="link-about-chat">
          <span aria-hidden="true">•</span>
          Let&apos;s chat
        </a>
      </section>

      <section id="work" className="reference-work" data-testid="section-work">
        <div className="work-meta" aria-hidden="true" data-testid="work-meta">
          <span>Selected works</span>
          <span>Food and beverage</span>
          <span>06</span>
          <span>2024 / 25</span>
        </div>
        <div className="work-intro">
          <h2 data-testid="text-work-title">Selected works</h2>
          <p className="work-summary" data-testid="text-work-desc">
            Digital identities and spaces for places worth remembering.
          </p>
        </div>

        <div className="work-grid" data-testid="grid-work-projects">
          <article className="work-card" data-testid="card-project-1">
            <div className="work-card-image">
              <img src={projectOne} alt="A plated pasta dish in a dark restaurant setting" data-testid="img-project-1" />
            </div>
            <div className="work-card-meta">
              <h3 data-testid="text-project-1-title">After Hours</h3>
              <p data-testid="text-project-1-desc">Restaurant identity <span>·</span> Digital</p>
            </div>
          </article>
          <article className="work-card" data-testid="card-project-2">
            <div className="work-card-image">
              <img src={projectTwo} alt="People sharing dim sum at a restaurant table" data-testid="img-project-2" />
            </div>
            <div className="work-card-meta">
              <h3 data-testid="text-project-2-title">Common Table</h3>
              <p data-testid="text-project-2-desc">Hospitality <span>·</span> Art direction</p>
            </div>
          </article>
          <article className="work-card" data-testid="card-project-3">
            <div className="work-card-image">
              <img src={projectThree} alt="A Japanese-inspired meal served on a tray" data-testid="img-project-3" />
            </div>
            <div className="work-card-meta">
              <h3 data-testid="text-project-3-title">Field Notes</h3>
              <p data-testid="text-project-3-desc">Food studio <span>·</span> Web experience</p>
            </div>
          </article>
          <article className="work-card" data-testid="card-project-4">
            <div className="work-card-image">
              <img src={projectFour} alt="Bakers arranging rows of fresh croissants on a tray" data-testid="img-project-4" />
            </div>
            <div className="work-card-meta">
              <h3 data-testid="text-project-4-title">The Flour Room</h3>
              <p data-testid="text-project-4-desc">Bakery identity <span>·</span> Digital</p>
            </div>
          </article>
          <article className="work-card" data-testid="card-project-5">
            <div className="work-card-image">
              <img src={projectFive} alt="A Thai restaurant table filled with colorful shared dishes" data-testid="img-project-5" />
            </div>
            <div className="work-card-meta">
              <h3 data-testid="text-project-5-title">Market Table</h3>
              <p data-testid="text-project-5-desc">Restaurant identity <span>·</span> Digital</p>
            </div>
          </article>
          <article className="work-card" data-testid="card-project-6">
            <div className="work-card-image">
              <img src={projectSix} alt="Coffee and a pastry on a warm wooden cafe table" data-testid="img-project-6" />
            </div>
            <div className="work-card-meta">
              <h3 data-testid="text-project-6-title">First Light</h3>
              <p data-testid="text-project-6-desc">Café identity <span>·</span> Digital</p>
            </div>
          </article>
        </div>
      </section>

      <section id="strategy" className="reference-strategy" data-testid="section-strategy">
        <div className="strategy-grid">
          <div className="strategy-lead">
            <span className="strategy-arrow" aria-hidden="true">&#8600;</span>
            <h2 data-testid="text-strategy-title">The cost of an overlooked website.</h2>
          </div>

          <div className="strategy-details">
            <div className="strategy-facts">
              <div className="strategy-fact" data-testid="strategy-fact-diagnosis">
                <span className="strategy-label">Diagnosis</span>
                <p>Revenue leaks</p>
                <span className="strategy-label">Outcome</span>
                <p>
                  More direct bookings.<br />
                  Less revenue left behind.
                </p>
              </div>
              <div className="strategy-fact" data-testid="strategy-fact-leaks">
                <span className="strategy-label">The leaks</span>
                <p>
                  The vibe disconnect<br />
                  The booking friction<br />
                  The invisible menu<br />
                  The missing narrative
                </p>
              </div>
            </div>

            <div className="strategy-description" data-testid="strategy-description">
              <span className="strategy-label">Description</span>
              <p>
                Your dining room is full on Saturday, but how many covers did you
                lose on Tuesday because your digital front door was locked? An
                outdated website is not just a missed introduction. It is a quiet,
                continuous leak in revenue.
              </p>
              <p>
                Guests eat with their eyes first. A clearer digital front door
                turns more visits into action before a third-party marketplace
                takes the margin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="reference-services" data-testid="section-services">
        <h2 className="sr-only">What we do</h2>
        <div className="services-layout">
          <div className="services-copy">
            <p className="services-overview" data-testid="text-services-overview">
              We design and build restaurant websites that help more guests choose
              you, then make it easier to book, order, and come back.
            </p>
          </div>

          <div className="services-image" data-testid="img-service-active-container">
            <img src={serviceOptions[activeService].image} alt={serviceOptions[activeService].alt} data-testid="img-service-active" />
          </div>

          <nav className="services-list" aria-label="What we do" data-testid="nav-services">
            {serviceOptions.map((service, index) => (
              <button
                className={`service-item ${activeService === index ? 'service-item-active' : ''}`}
                key={service.label}
                type="button"
                aria-pressed={activeService === index}
                onClick={() => setActiveService(index)}
                data-testid={`button-service-${index}`}
              >
                <span>{service.label}</span>
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="services-proof" aria-label="Studio 1801 guarantees" data-testid="services-proof">
          <div className="proof-item" data-testid="proof-item-1">
            <strong>7 day</strong>
            <span>guarantee delivery</span>
          </div>
          <div className="proof-item" data-testid="proof-item-2">
            <strong>95%</strong>
            <span>satisfaction rate</span>
          </div>
          <div className="proof-item" data-testid="proof-item-3">
            <strong>Unlimited</strong>
            <span>revisions</span>
          </div>
        </div>
      </section>

      <section id="process" className="reference-process" data-testid="section-process">
        <div className="process-meta" aria-hidden="true" data-testid="process-meta">
          <span>How we work</span>
          <span>From first idea to launch</span>
          <span>Studio 1801</span>
          <span>01 / 06</span>
        </div>

        <div className="process-intro">
          <h2 data-testid="text-process-title">Design process</h2>
          <p data-testid="text-process-desc">
            Thoughtful work for restaurants that want to be chosen, remembered,
            and visited again.
          </p>
        </div>

        <div className="process-steps" data-testid="grid-process-steps">
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
            <article className={`process-step process-step-${index + 1}`} key={step.title} data-testid={`article-process-${index + 1}`}>
              <span className="process-duration" data-testid={`text-process-${index + 1}-duration`}>{step.duration}</span>
              <div className="process-step-image">
                <img src={step.image} alt={step.alt} data-testid={`img-process-${index + 1}`} />
              </div>
              <div className="process-step-copy">
                <h3 data-testid={`text-process-${index + 1}-title`}>{step.title}</h3>
                <p data-testid={`text-process-${index + 1}-desc`}>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="process-philosophy" data-testid="process-philosophy">
          <h3 data-testid="text-philosophy-title">A good website should feel like the first warm welcome.</h3>
          <p data-testid="text-philosophy-desc">
            Clear enough to guide a guest, distinctive enough to stay with them,
            and useful enough to bring them back.
          </p>
        </div>
      </section>

      <section id="contact" className="reference-contact" data-testid="section-contact">
        <div className="contact-meta" aria-hidden="true" data-testid="contact-meta">
          <span>Studio 1801</span>
          <span>New York / Worldwide</span>
          <span>07</span>
          <span>Contact</span>
        </div>

        <div className="contact-content">
          <div className="contact-editorial">
            <h2 data-testid="text-contact-title">
              The table is set.<br />
              Let's build something<br />
              worth remembering.
            </h2>
            <a href="mailto:hello@studio1801.com" className="contact-email" data-testid="link-contact-email">
              hello@studio1801.com <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="contact-footer" data-testid="footer-contact">
          <div className="contact-locations" data-testid="contact-locations">
            <span>Based in New York</span>
            <span>Working everywhere</span>
          </div>
          <div className="contact-signoff" data-testid="text-contact-signoff">
            Studio 1801
          </div>
        </div>
      </section>
    </main>
  );
}
