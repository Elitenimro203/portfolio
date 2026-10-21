import type { Metadata } from 'next';
import './globals.css';
import './journey.css';

export const metadata: Metadata = {
  title: 'LOYI Peniel — Ingénierie logicielle, données & IA',
  description: 'Portfolio de LOYI Peniel, étudiant en Master à Abidjan : des projets numériques nés de besoins concrets, de l’agriculture urbaine à la surveillance des cours d’eau.',
  openGraph: {
    title: 'LOYI Peniel — Ingénierie logicielle, données & IA',
    description: 'Portfolio de LOYI Peniel, étudiant en Master à Abidjan : des projets numériques nés de besoins concrets, de l’agriculture urbaine à la surveillance des cours d’eau.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
