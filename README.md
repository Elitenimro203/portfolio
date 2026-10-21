# Portfolio LOYI Peniel — migration Next.js

Première base de migration depuis l'ébauche React + Vite. Cette version adopte Next.js App Router, TypeScript, Tailwind CSS v4, Motion et Lucide React.

## Lancer le projet

Prérequis : Node.js 20.9 ou plus récent.

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Structure

- `app/`: route d'accueil, layout global, métadonnées et design tokens CSS.
- `components/portfolio.tsx`: sections de la page et animations Motion.
- `components/theme-toggle.tsx`: bascule clair/sombre.
- `data/projects.ts`: contenu structuré des projets.
- `public/images/peniel-portrait.png`: portrait personnel détouré et intégré au hero.

## À vérifier avant publication

- Vérifier le détourage du portrait sur différents écrans et fonds. Le fond a été retiré automatiquement et peut nécessiter une retouche fine autour des cheveux et des épaules.
- Mettre à jour l'adresse email et les URL LinkedIn/GitHub dans `components/portfolio.tsx`.
- Vérifier descriptions, statuts, technologies et contribution exacte de chaque projet dans `data/projects.ts`.
- Ajouter un CV PDF réel si le bouton de téléchargement est souhaité.

## Notes pédagogiques

Le composant principal est client car Motion, le menu mobile et le thème nécessitent de l'interactivité. Le layout reste côté serveur et porte les métadonnées. Les données projets sont séparées des composants pour faciliter la maintenance.


## Ajustements Hero V3

- Portrait réduit et remonté pour éviter le débordement sur la section À propos.
- Forme bleue et cercles décoratifs allégés, avec le portrait au premier plan.
- Ajustements de dimensions desktop, tablette et mobile.
- Le badge rouge « 1 Issue » visible en mode développement n'est pas un élément du design : consulter le terminal et l'overlay Next.js pour identifier la cause exacte.


## Pages projet (étape 1 du plan d'amélioration)

- Chaque carte de l'accueil mène à `/projets/<slug>` (`app/projets/[slug]/page.tsx`, pages statiques générées au build).
- Tout le contenu vient de `data/projects.ts`. Champs à renseigner par toi : `role`, `learned`, `links`, `screenshots`. Une section vide n'est pas affichée.
- En `npm run dev`, un encadré en pointillés liste ce qu'il reste à compléter sur chaque page (masqué en production).
- Captures : à déposer dans `public/images/projets/<slug>/` puis à déclarer dans `screenshots`.
- Dépôt privé : `privateRepo: true` affiche une mention à la place d'un lien.
