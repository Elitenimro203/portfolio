export type ProjectLink = { label: string; href: string };
export type ProjectShot = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: string;
  description: string;
  stack: string[];
  number: string;
  accent: 'blue' | 'orange' | 'navy' | 'cyan' | 'green';
  /** Carte mise en avant (large) sur la grille d'accueil. */
  featured?: boolean;
  /** Contexte factuel : d'où vient le projet, pour qui, dans quel cadre. */
  context: string;
  /** Ton rôle précis, écrit par toi : ce que tu as conçu, écrit, piloté. `null` tant que non rédigé. */
  role: string | null;
  /** Ce que le projet t'a appris (concret : un concept, une erreur, une décision). */
  learned: string[];
  /** Dépôt public, démo en ligne… */
  links: ProjectLink[];
  /** Dépôt privé : affiche une mention à la place d'un lien GitHub. */
  privateRepo?: boolean;
  /** Captures dans `public/images/projets/<slug>/`. */
  screenshots: ProjectShot[];
};

// Les descriptions restent volontairement factuelles. `role`, `learned`, `links` et
// `screenshots` doivent être renseignés par l'auteur : rien ici n'est inventé pour lui.
export const projects: Project[] = [
  {
    slug: 'greengrow',
    name: 'GreenGrow',
    category: 'Agriculture · IA',
    status: 'Prototype',
    description: 'Plateforme d’agriculture urbaine : diagnostic des maladies des plantes par IA à partir d’une photo, suivi de capteurs et estimation du coût des traitements.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'IA (Gemini)'],
    number: '01',
    accent: 'green',
    featured: true,
    context:
      'Projet de startup et de projet de fin d’études, réalisé de juin à juillet 2026 et présenté à l’Orange Summer Challenge, à l’Orange Digital Center. L’application web propose un tableau de bord de capteurs, un diagnostic des maladies à partir d’une photo (avec bascule automatique entre deux fournisseurs d’IA) et une estimation du coût des traitements en FCFA.',
    role: null,
    learned: [],
    links: [],
    screenshots: [],
  },
  {
    slug: 'vigie-des-eaux',
    name: 'Vigie des Eaux',
    category: 'Environnement · Données',
    status: 'Projet de hackathon',
    description: 'Plateforme de surveillance et de suivi des impacts hydriques liés aux activités minières.',
    stack: ['React', 'Laravel', 'PostgreSQL / PostGIS'],
    number: '02',
    accent: 'blue',
    featured: true,
    context:
      'Réalisé en équipe de cinq pour le SIREXE Hackathon 2026 (thème Mines, Pétrole et Énergie). La plateforme relie les points d’eau, les signalements citoyens, les preuves, les activités minières et l’historique des interventions pour détecter, mesurer et suivre les anomalies environnementales.',
    role: null,
    learned: [],
    links: [],
    privateRepo: true,
    screenshots: [],
  },
  {
    slug: 'yiri',
    name: 'Yiri / Wakati',
    category: 'Produit numérique',
    status: 'En développement',
    description: 'Application de suivi personnel pour organiser ses objectifs et ses habitudes au quotidien.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    number: '03',
    accent: 'orange',
    context:
      'Application web progressive de développement personnel, déployée en ligne. Une plante grandit chaque semaine et devient arbre au fil de la progression. Le nom vient du dioula et du bambara, où « yiri » signifie à la fois l’arbre et l’esprit.',
    role: null,
    learned: [],
    links: [],
    screenshots: [],
  },
  {
    slug: 'gestion-de-pressing',
    name: 'Gestion de pressing',
    category: 'Gestion · Traçabilité',
    status: 'En développement',
    description: 'Application de suivi des dépôts, retraits et paiements afin de renforcer la traçabilité des opérations.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    number: '04',
    accent: 'navy',
    context:
      'Logiciel conçu pour un pressing familial réel, à partir d’un entretien avec la gérante. Projet d’apprentissage de FastAPI et de la modélisation Merise : les tables sont créées dans PostgreSQL et les prestations disposent d’un CRUD complet, testé via Swagger.',
    role: null,
    learned: [],
    links: [],
    screenshots: [],
  },
  {
    slug: 'gestpresence',
    name: 'GestPresence',
    category: 'Gestion · Présences',
    status: 'Projet de développement',
    description: 'Application de gestion des présences et d’enregistrement des absences.',
    stack: ['PHP', 'MariaDB'],
    number: '05',
    accent: 'cyan',
    context:
      'Application de gestion de présence en milieu universitaire, réalisée en 2026. Le dépôt est public sur GitHub.',
    role: null,
    learned: [],
    links: [],
    screenshots: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Champs encore à renseigner avant publication. Un dépôt privé dispense de lien. */
export function missingFields(project: Project): string[] {
  const missing: string[] = [];
  if (!project.role) missing.push('rôle précis');
  if (project.learned.length === 0) missing.push('ce que j’ai appris');
  if (project.screenshots.length === 0) missing.push('captures');
  if (project.links.length === 0 && !project.privateRepo) missing.push('lien (GitHub ou démo)');
  return missing;
}
