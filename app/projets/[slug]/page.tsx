import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Lock } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { getProject, missingFields, projects } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.name} — LOYI Peniel`, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const missing = process.env.NODE_ENV !== 'production' ? missingFields(project) : [];

  return (
    <main className={`project-page accent-${project.accent}`}>
      <header className="site-header shell">
        <Link href="/" className="brand" aria-label="LOYI Peniel, accueil">
          <span className="brand-mark">P<span>L</span></span><span>LOYI Peniel</span>
        </Link>
        <div className="header-actions">
          <Link className="button button-small button-outline" href="/#projets"><ArrowLeft size={15} /> Tous les projets</Link>
          <ThemeToggle />
        </div>
      </header>

      <section className="shell project-hero">
        <p className="eyebrow">{project.category} <span>·</span> {project.status}</p>
        <h1>{project.name}</h1>
        <p className="project-lead">{project.description}</p>
        <span className="project-bignumber" aria-hidden="true">{project.number}</span>
      </section>

      <div className="shell project-body">
        <div className="project-main">
          {missing.length > 0 && (
            <aside className="draft-note" role="note">
              <strong>À compléter avant publication</strong> (visible en développement uniquement) : {missing.join(', ')}.
            </aside>
          )}

          <section aria-labelledby="ctx">
            <h2 id="ctx">Contexte</h2>
            <p>{project.context}</p>
          </section>

          {project.role && (
            <section aria-labelledby="role">
              <h2 id="role">Mon rôle</h2>
              <p>{project.role}</p>
            </section>
          )}

          {project.learned.length > 0 && (
            <section aria-labelledby="learned">
              <h2 id="learned">Ce que j’en ai appris</h2>
              <ul className="learned-list">
                {project.learned.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          )}

          {project.screenshots.length > 0 && (
            <section aria-labelledby="shots">
              <h2 id="shots">Aperçu</h2>
              <div className="shot-grid">
                {project.screenshots.map((shot) => (
                  <figure key={shot.src}>
                    <Image src={shot.src} alt={shot.alt} width={1280} height={800} sizes="(max-width: 900px) 100vw, 720px" />
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="project-aside" aria-label="Fiche du projet">
          <dl>
            <div><dt>Statut</dt><dd>{project.status}</dd></div>
            <div><dt>Domaine</dt><dd>{project.category}</dd></div>
            <div><dt>Technologies</dt><dd className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</dd></div>
            <div>
              <dt>Code &amp; démo</dt>
              <dd>
                {project.links.map((link) => (
                  <a key={link.href} className="aside-link" href={link.href} target="_blank" rel="noreferrer">
                    {link.href.includes('github.com') ? <Github size={15} /> : <ArrowUpRight size={15} />} {link.label}
                  </a>
                ))}
                {project.privateRepo && (
                  <span className="aside-private"><Lock size={14} /> Dépôt privé — extraits et architecture présentés sur demande.</span>
                )}
                {project.links.length === 0 && !project.privateRepo && <span className="aside-private">Lien à venir.</span>}
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <nav className="shell project-next" aria-label="Projet suivant">
        <Link href={`/projets/${next.slug}`}><small>Projet suivant</small><span>{next.name} <ArrowRight size={18} /></span></Link>
      </nav>
    </main>
  );
}
