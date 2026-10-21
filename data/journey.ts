export type JourneyKind = 'formation' | 'experience' | 'certification' | 'projet';

export type JourneyEntry = {
  kind: JourneyKind;
  /** Période ou date affichée telle quelle. */
  period: string;
  title: string;
  place: string;
  detail?: string;
  /** Lien interne (page projet) ou externe. */
  href?: string;
};

export type JourneyYear = { year: string; entries: JourneyEntry[] };

// Du plus récent au plus ancien. Chaque étape apparaît une seule fois, dans l'année où elle se termine
// ou, si elle est en cours, dans l'année la plus récente. Dates à relire avant publication.
export const journey: JourneyYear[] = [
  {
    year: '2026',
    entries: [
      {
        kind: 'certification',
        period: '25 septembre 2026',
        title: 'AI for Good Impact Initiative — Training of trainers',
        place: 'UIT (ITU), avec IHFC / IIT Delhi, en partenariat avec Google et Giga',
        detail: 'Atelier de formation de formateurs destiné aux enseignants en Côte d’Ivoire. Certificat de participation.',
      },
      {
        kind: 'certification',
        period: '15 août 2026',
        title: 'Apply AI : Analyze Customer Reviews',
        place: 'Cisco Networking Academy',
      },
      {
        kind: 'projet',
        period: 'Juin – juillet 2026',
        title: 'GreenGrow',
        place: 'Startup et projet de fin d’études · présenté à l’Orange Summer Challenge',
        detail: 'Agriculture urbaine : diagnostic des maladies des plantes par IA et suivi de capteurs.',
        href: '/projets/greengrow',
      },
      {
        kind: 'projet',
        period: '2026',
        title: 'SIREXE Hackathon — Vigie des Eaux',
        place: 'Équipe de cinq · thème Mines, Pétrole et Énergie',
        detail: 'Surveillance des impacts hydriques des activités minières.',
        href: '/projets/vigie-des-eaux',
      },
      {
        kind: 'formation',
        period: '2025 – 2027',
        title: 'Master MBDS — Mobiquité, Big Data et Systèmes',
        place: 'ESATIC, Abidjan',
        detail: 'M1 en 2025, M2 en cours (2026-2027).',
      },
    ],
  },
  {
    year: '2025',
    entries: [
      {
        kind: 'formation',
        period: '2023 – 2025',
        title: 'Licence professionnelle en développement d’applications et systèmes d’information',
        place: 'ESATIC, Abidjan',
        detail: 'Soutenance et obtention de la licence en 2025.',
      },
      {
        kind: 'experience',
        period: '22 janvier – 21 avril 2025',
        title: 'Stage de développeur full-stack',
        place: 'CODIVAL',
        detail: 'Laravel : plateforme de gestion des incidents de sécurité, réalisée dans le cadre de la licence.',
      },
    ],
  },
  {
    year: '2024',
    entries: [
      {
        kind: 'certification',
        period: '27 novembre 2024',
        title: 'Je fabrique mon objet connecté',
        place: 'Orange Digital Center · FabLab Solidaire',
        detail: 'Atelier de 12 heures sur la conception d’un objet connecté.',
      },
    ],
  },
  {
    year: '2023',
    entries: [
      {
        kind: 'projet',
        period: '2023',
        title: 'Projets académiques à l’ESATIC',
        place: 'ESATIC, Abidjan',
        detail: 'Automatisation d’un parking (React et OpenCV) et gestion d’un parc de véhicules (Windev).',
      },
    ],
  },
  {
    year: '2019',
    entries: [
      {
        kind: 'formation',
        period: '2019 – 2022',
        title: 'Licence en informatique, option génie logiciel',
        place: 'UTA, Abidjan',
      },
    ],
  },
];

export type SkillGroup = { title: string; tone: 'solid' | 'growing'; items: string[] };

// Niveaux tels que déclarés. « Solides » = utilisés en projet ; « En progression » = en cours d'apprentissage.
export const skillGroups: SkillGroup[] = [
  { title: 'Solides', tone: 'solid', items: ['Python', 'FastAPI', 'Laravel', 'SQL', 'MongoDB', 'Git', 'HTML / CSS'] },
  { title: 'En progression', tone: 'growing', items: ['React', 'TypeScript', 'Ingénierie des données', 'IA appliquée'] },
];
