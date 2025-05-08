# Portfolio Ahmed Ghliss

Ce projet est un portfolio personnel moderne développé en React, mettant en avant les compétences, projets et parcours d'Ahmed Ghliss.

## Fonctionnalités principales
- Design moderne, responsive et animé
- Thème clair/sombre avec palette personnalisée
- Navigation fluide entre les sections (SPA)
- Animations subtiles avec Framer Motion
- Sections : Accueil, À propos, Projets, Blog, Contact
- Cartes projets et blog dynamiques
- Formulaire de contact interactif

## Technologies utilisées
- React 19
- styled-components
- framer-motion
- react-router-dom
- FontAwesome

## Installation
1. Clonez le dépôt :
   ```bash
   git clone <https://github.com/Aymenjallouli/AhmedGhliss.git>
   cd portfolio
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement :
   ```bash
   npm start
   ```

## Structure du projet
```
portfolio/
  public/
  src/
    assets/
    Components/
    pages/
    style/
  package.json
  webpack.config.js
```

## Personnalisation
- Modifiez les informations dans `src/pages/Home.jsx` et `src/pages/About.jsx`.
- Ajoutez vos projets dans `src/pages/Projects.jsx` et vos articles dans `src/pages/Blog.jsx`.
- Les couleurs et polices sont configurables dans `src/style/theme.js` et `src/style/GlobalStyles.js`.

## Déploiement
Pour générer une version de production :
```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers prêts à être déployés sur un hébergement statique.

## Auteur
Ahmed Ghliss

Licence MIT
