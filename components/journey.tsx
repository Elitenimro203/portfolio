'use client';
import Link from 'next/link';
import { ArrowDownRight, ArrowRight, Award, Briefcase, Download, GraduationCap, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { journey, skillGroups, type JourneyKind } from '@/data/journey';
import { site } from '@/data/site';

const rise = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

const kinds: Record<JourneyKind, { label: string; Icon: typeof Award }> = {
  formation: { label: 'Formation', Icon: GraduationCap },
  experience: { label: 'Expérience', Icon: Briefcase },
  certification: { label: 'Certification', Icon: Award },
  projet: { label: 'Projet', Icon: Rocket },
};

export function Journey() {
  // Rendu dans le MotionConfig de portfolio.tsx (reducedMotion="user").
  const reveal = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.15 }, variants: rise, transition: { duration: 0.55, ease: 'easeOut' as const } };

  return (
    <section className="journey-section section-band" id="parcours">
      <div className="shell journey-grid">
        <motion.div className="section-intro" {...reveal}>
          <p className="section-index">03 — Parcours &amp; compétences</p>
          <h2>Une progression, pas un <em>inventaire.</em></h2>
          <p>Du génie logiciel à la donnée et à l’IA : les étapes qui m’ont formé, ce que je maîtrise déjà et ce que je construis en ce moment.</p>
          <div className="journey-actions">
            {site.cv.fr && <a className="button button-small button-primary" href={site.cv.fr} download><Download size={15} /> CV (français)</a>}
            {site.cv.en && <a className="button button-small button-outline" href={site.cv.en} download><Download size={15} /> CV (English)</a>}
            <a className="text-link" href="#contact">Échanger avec moi <ArrowRight size={15} /></a>
          </div>
        </motion.div>

        <motion.div className="journey-panel" {...reveal}>
          <h3>Compétences</h3>
          {skillGroups.map((group) => (
            <div className={`skill-group is-${group.tone}`} key={group.title}>
              <h4>{group.title}</h4>
              <ul className="skill-chips">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </motion.div>

        <motion.aside className="principle-card" {...reveal}>
          <div className="sun-mark" />
          <p>Apprendre aujourd’hui,<br />construire demain.</p>
          <span>— LOYI Peniel</span>
          <ArrowDownRight className="principle-arrow" />
        </motion.aside>
      </div>

      <div className="shell timeline-wrap">
        <p className="section-index">Chronologie</p>
        <ol className="timeline">
          {journey.map((group) => (
            <motion.li className="timeline-year" key={group.year} {...reveal}>
              <h3>{group.year}</h3>
              <ul className="timeline-items">
                {group.entries.map((entry) => {
                  const { label, Icon } = kinds[entry.kind];
                  return (
                    <li className={`timeline-item kind-${entry.kind}`} key={entry.title}>
                      <span className="timeline-icon" aria-hidden="true"><Icon size={18} /></span>
                      <div>
                        <p className="timeline-meta"><b>{label}</b> · {entry.period}</p>
                        <h4>{entry.title}</h4>
                        <p className="timeline-place">{entry.place}</p>
                        {entry.detail && <p className="timeline-detail">{entry.detail}</p>}
                        {entry.href && <Link className="text-link" href={entry.href}>Voir le projet <ArrowRight size={14} /></Link>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
