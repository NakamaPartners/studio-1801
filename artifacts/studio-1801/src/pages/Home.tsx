import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import heroLead from '@assets/Image_7_1787435406771.jpeg';
import hero1 from '@assets/generated_images/hero-1.jpg';
import proj1 from '@assets/generated_images/project-1.jpg';
import proj2 from '@assets/generated_images/project-2.jpg';
import proj3 from '@assets/generated_images/project-3.jpg';

const Navbar = () => (
  <motion.nav 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-4 py-5 text-foreground/90 mix-blend-difference md:px-6 md:py-6"
    style={{ color: 'white' }}
  >
    <div className="font-sans text-base font-semibold tracking-wide md:text-lg">Studio 1801 <span className="align-super text-[9px] md:text-xs">®</span></div>
    <div className="flex gap-3 text-[11px] font-medium tracking-wide md:gap-8 md:text-sm">
      <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
      <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
      <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
    </div>
  </motion.nav>
);

const HeroGrid = () => {
  return (
    <div className="relative w-full px-2 pt-2 pb-12">
      <div className="hero-lead group">
        <img
          src={heroLead}
          alt="Soft-focus flowers against a blue sky"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white md:p-8">
          <div className="flex items-start justify-between gap-6 text-[10px] uppercase tracking-[0.18em] md:text-xs">
            <span>Image study 01</span>
            <span>New York · Worldwide</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 font-sans text-xs uppercase tracking-[0.22em] text-white/75 md:text-sm">
                Independent design studio
              </p>
              <h1 className="font-display text-[18vw] font-medium leading-[0.72] tracking-[-0.07em] md:text-[13vw]">
                Studio <em className="font-display font-normal">1801</em>
                <span className="ml-1 align-top font-sans text-[4vw] tracking-normal md:text-[2.2vw]">®</span>
              </h1>
            </div>
            <span className="hidden max-w-[18ch] pb-2 text-right font-sans text-sm leading-snug text-white/80 md:block">
              Brands, products, and spaces with a point of view.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mission = () => {
  return (
    <div id="about" className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-32 text-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl flex flex-col items-center"
      >
        <span className="text-xs font-mono tracking-widest uppercase mb-12 text-muted-foreground flex items-center gap-4">
          <span className="w-8 h-px bg-muted-foreground/30 block"></span>
          Studio 1801 ®
          <span className="w-8 h-px bg-muted-foreground/30 block"></span>
        </span>
        
        <p className="font-sans text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-medium tracking-tight mb-16 max-w-[32ch] text-foreground/90">
          We are a design studio working at the intersection of brand identity, product design, and creative direction. 
          <br className="hidden md:block"/> 
          <span className="text-foreground/40 italic font-display pr-2">Designing</span> brands and digital products that move culture forward.
        </p>

        <a 
          href="#contact" 
          className="group relative inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-full font-sans text-sm font-medium hover:bg-foreground/90 transition-all hover:gap-6"
        >
          <span className="w-2 h-2 rounded-full bg-background group-hover:scale-[2] transition-transform"></span>
          Let's chat
        </a>
      </motion.div>

      {/* Services grid below mission */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 text-left border-t border-border pt-12"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-muted-foreground">01</span>
          <h4 className="font-display text-lg font-bold">Brand Identity</h4>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-muted-foreground">02</span>
          <h4 className="font-display text-lg font-bold">Art Direction</h4>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-muted-foreground">03</span>
          <h4 className="font-display text-lg font-bold">Digital Products</h4>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-muted-foreground">04</span>
          <h4 className="font-display text-lg font-bold">Web Experiences</h4>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    { id: '01', title: 'Onyx Archive', category: 'Digital / Brand', image: proj1, year: '2024' },
    { id: '02', title: 'Maison Brut', category: 'Art Direction', image: proj2, year: '2023' },
    { id: '03', title: 'Aether OS', category: 'Product Design', image: proj3, year: '2024' },
    { id: '04', title: 'Synapse', category: 'Web Experience', image: hero1, year: '2023' },
  ];

  return (
    <div id="work" className="w-full py-24 px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
      >
        <h2 className="font-display font-bold text-[14vw] leading-[0.8] tracking-tighter">
          Latest <br/> projects
        </h2>
        <div className="flex flex-col items-start md:items-end gap-2 text-muted-foreground mb-4">
          <span className="font-mono text-sm">(Selected Works)</span>
          <span className="font-mono text-sm">[ 2023 — 2024 ]</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-24 mt-24">
        {projects.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i % 2 === 0 ? 0 : 0.2 }}
            className={`group block cursor-pointer ${i % 2 !== 0 ? 'md:mt-48' : ''}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              
              <div className="absolute top-4 right-4 bg-background text-foreground w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-start border-t border-border pt-4">
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight">{p.title}</h3>
                <p className="font-sans text-muted-foreground mt-2">{p.category}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-mono text-sm text-foreground">{p.id}</span>
                <span className="font-mono text-xs text-muted-foreground mt-2">{p.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-foreground text-background py-24 px-4 md:px-8 mt-24 relative overflow-hidden">
      {/* Huge subtle text in the background of the footer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h2 className="font-display font-bold text-[30vw] leading-none whitespace-nowrap">1801</h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh] relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xl">
            <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">Have a project <br/>in mind?</h3>
            <p className="font-sans text-background/60 text-xl mb-12 max-w-md leading-relaxed">
              We collaborate with ambitious brands and people. Let's build something that matters.
            </p>
            <a 
              href="mailto:hello@studio1801.com" 
              className="group inline-flex items-center gap-4 bg-background text-foreground px-8 py-5 rounded-full font-sans text-base font-medium hover:bg-background/90 transition-all hover:gap-6"
            >
              hello@studio1801.com
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-16 font-sans text-sm mt-8 md:mt-0">
            <div className="flex flex-col gap-6">
              <span className="text-background/40 uppercase tracking-widest text-xs font-mono">Socials</span>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-lg">Instagram</a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-lg">Twitter (X)</a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-lg">LinkedIn</a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-lg">Behance</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-background/40 uppercase tracking-widest text-xs font-mono">Studio</span>
              <p className="text-background/80 text-lg">San Francisco, CA</p>
              <p className="text-background/80 text-lg">Available Worldwide</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-32 border-t border-background/20 pt-8 font-mono text-xs text-background/50 uppercase tracking-widest gap-4">
          <div className="flex gap-8">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
          <div className="flex gap-8">
            <span>© 2024 Studio 1801 ®</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-background text-foreground overflow-hidden selection:bg-foreground selection:text-background">
      {/* Noise Texture */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <Navbar />
      <HeroGrid />
      <Mission />
      <Projects />
      <Footer />
    </div>
  );
}
