'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BrainCircuit, Code2, Database, Download, Github, Linkedin, Mail, Menu, Palette, Smartphone, Sprout, UsersRound, X } from 'lucide-react';
import { MotionConfig, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { site } from '@/data/site';
import { Journey } from './journey';
import { ThemeToggle } from './theme-toggle';

function projectIcon(slug: string) {
  switch (slug) {
    case 'greengrow': return <Sprout />;
    case 'vigie-des-eaux': return <Database />;
    case 'gestion-de-pressing': return <Smartphone />;
    case 'gestpresence': return <UsersRound />;
    default: return <Code2 />;
  }
}

const rise = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  // Toujours appliqué : MotionConfig (reducedMotion="user") retire les déplacements pour les personnes qui ont réduit les animations,
  // mais l'apparition se fait quand même. Sans cela, le HTML rendu côté serveur (opacity 0) ne devenait jamais visible.
  const reveal = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.15 }, variants: rise, transition: { duration: 0.55, ease: 'easeOut' as const } };
  const closeMenu = () => setMenuOpen(false);

  return <MotionConfig reducedMotion="user"><main>
    <header className="site-header shell">
      <a href="#accueil" className="brand" aria-label="LOYI Peniel, accueil"><span className="brand-mark">P<span>L</span></span><span>LOYI Peniel</span></a>
      <button className="mobile-menu-button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navigation principale">
        {[['Accueil','#accueil'],['À propos','#apropos'],['Projets','#projets'],['Parcours','#parcours'],['Contact','#contact']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
      </nav>
      <div className="header-actions"><ThemeToggle />{site.cv.fr && <a className="button button-small button-primary cv-button" href={site.cv.fr} download><Download size={15} /> Télécharger mon CV <ArrowUpRight size={14} /></a>}</div>
    </header>

    <section className="hero shell" id="accueil">
      <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <p className="eyebrow">Ingénierie logicielle <span>·</span> Données <span>·</span> Intelligence artificielle</p>
        <h1>Je transforme les idées en solutions qui ont <em>du sens.</em></h1>
        <p className="hero-description">Étudiant en Master à Abidjan, je vois l’informatique comme un moyen de changer le quotidien des gens. Mes projets naissent de ce que j’observe autour de moi : Vigie des Eaux, pour surveiller les cours d’eau de mon pays, et GreenGrow, un écosystème de culture urbaine que je veux voir sortir de terre.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projets">Voir mes projets <ArrowRight size={16} /></a><a className="button button-outline" href="#contact"><Mail size={16} /> Me contacter</a></div>
        <div className="discipline-list"><span><Code2 /> Développement</span><span><Database /> Données</span><span><BrainCircuit /> IA en exploration</span><span><Palette /> Design produit</span></div>
      </motion.div>
      <motion.div className="hero-art" initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }} aria-label="Portrait de LOYI Peniel dans une composition graphique bleue et orange">
        <div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-blue-shape" /><div className="art-orange-shape" />
        <div className="portrait-placeholder"><Image src="/images/peniel-portrait.png" alt="Portrait professionnel de LOYI Peniel" width={478} height={549} priority sizes="(max-width: 720px) 80vw, (max-width: 1050px) 42vw, 38vw" /></div>
        <p className="hand-note">Code<br />Build<br />Impact<span /></p><span className="art-dot" />
      </motion.div>
      <a className="scroll-cue" href="#apropos"><span /> Défiler</a>
    </section>

    <section className="about-section section-band" id="apropos"><div className="shell about-grid">
      <motion.div className="section-intro" {...reveal}><p className="section-index">01 — À propos</p><h2>Comprendre avant de <em>construire.</em></h2><p>Je suis un profil en ingénierie logicielle, curieux des données, du design et des usages de l’intelligence artificielle. J’aime comprendre un problème avant de choisir la technologie pour le résoudre.</p><a className="text-link" href="#parcours">Découvrir mon approche <ArrowRight size={15} /></a></motion.div>
      <div className="value-grid">
        {[{icon:Code2,title:'Développement',text:'Web, API et systèmes conçus avec méthode.'},{icon:BrainCircuit,title:'Données & IA',text:'Explorer, expérimenter et comprendre les limites.'},{icon:Palette,title:'Design & produit',text:'Des interfaces utiles, claires et accessibles.'}].map((item) => <motion.article className="value-card" key={item.title} {...reveal}><span className="icon-bubble"><item.icon size={23} /></span><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}
        <motion.blockquote className="quote-card" {...reveal}><span>“</span><p>La technologie est utile lorsqu’elle améliore la vie des gens.</p><cite>— LOYI Peniel</cite></motion.blockquote>
      </div>
    </div></section>

    <section className="projects-section shell" id="projets"><motion.div className="projects-heading" {...reveal}><div className="section-intro"><p className="section-index">02 — Projets sélectionnés</p><h2>Des solutions concrètes pour un <em>impact réel.</em></h2><p>Des projets pour apprendre, expérimenter et transformer des besoins en solutions numériques.</p></div><a className="text-link" href="#contact">Parlons d’un projet <ArrowRight size={15} /></a></motion.div>
      <div className="project-grid">{projects.map((project, index) => <motion.article className={`project-card project-${project.accent}${project.featured ? ' is-featured' : ''}`} key={project.name} {...reveal} transition={{ duration: 0.5, delay: index * 0.07 }}><div className="project-visual"><span className="project-number">{project.number}</span><div className="visual-symbol">{projectIcon(project.slug)}</div><span className="project-category">{project.category}</span></div><div className="project-content"><div className="project-status">{project.status}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><Link className="project-link" href={`/projets/${project.slug}`} aria-label={`Voir le détail du projet ${project.name}`}>Voir le projet <ArrowRight size={16} /></Link></div></motion.article>)}</div>
      <p className="content-note">Les projets présentés reflètent des travaux de développement et d’expérimentation à différents stades d’avancement.</p>
    </section>

    <Journey />

    <section className="contact-section" id="contact"><div className="shell contact-grid"><motion.div {...reveal}><p className="section-index">04 — Contact</p><h2>Construisons quelque chose d’<em>utile.</em></h2><p>Une idée, un projet ou une collaboration ? Je suis ouvert aux échanges autour du développement, des données et de l’IA.</p><a className="button button-primary" href="mailto:loyipeniel69@gmail.com">Me contacter <ArrowRight size={16} /></a></motion.div><motion.div className="contact-links" {...reveal}><a href="mailto:loyipeniel69@gmail.com"><Mail /> <span><small>Email</small>loyipeniel69@gmail.com</span><ArrowUpRight /></a><a href="https://www.linkedin.com/in/peniel-loyi-010b82232/" target="_blank" rel="noreferrer"><Linkedin /><span><small>LinkedIn</small>Profil LinkedIn</span><ArrowUpRight /></a><a href="https://github.com/Elitenimro203" target="_blank" rel="noreferrer"><Github /><span><small>GitHub</small>Elitenimro203</span><ArrowUpRight /></a></motion.div></div></section>

    <footer className="site-footer shell"><a href="#accueil" className="brand"><span className="brand-mark">P<span>L</span></span><span>LOYI Peniel</span></a><p>Code · Données · Impact</p><span>© {new Date().getFullYear()} LOYI Peniel</span></footer>
  </main></MotionConfig>;
}
