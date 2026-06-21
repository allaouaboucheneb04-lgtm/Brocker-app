# Broker Intelcom Pay v19 simple stable

Version volontairement simple : email/mot de passe seulement, sans Google, sans Storage.

## Installation
1. Mets `index.html` dans ton GitHub Pages.
2. Active Firebase Authentication > Email/Password.
3. Colle les règles Firestore ci-dessous.
4. Ouvre l'app et crée ton Super Admin une seule fois.

## Notes
- Pour un broker créé par le super admin, crée son compte dans Firebase Auth, puis crée `users/{UID}` avec `{ role: 'broker', brokerId: 'broker_xxx' }`.
- Pour un chauffeur, même logique avec `{ role: 'driver', brokerId: 'broker_xxx' }`.
