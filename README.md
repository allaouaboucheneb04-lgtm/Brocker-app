# Intelcom Broker Pay — v26.2 Application Web (PWA)

Cette version transforme la v26.1 en application web installable.

## Inclus
- `index.html` : application principale
- `manifest.webmanifest` : configuration PWA
- `service-worker.js` : cache local de l'application
- `icon-192.png` et `icon-512.png` : icônes d'installation
- `firestore.rules` : règles Firestore multi-broker

## Installation sur iPhone
1. Publier les fichiers sur GitHub Pages.
2. Ouvrir le lien dans Safari.
3. Appuyer sur Partager.
4. Choisir **Ajouter à l’écran d’accueil**.

## Installation sur Android / Chrome
Un bouton **Installer l’application** apparaît automatiquement lorsque Chrome détecte la PWA.

## Firebase
Garde le domaine GitHub Pages dans Firebase Authentication > Authorized domains.
