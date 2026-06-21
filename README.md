# Intelcom Broker Pay v16 Firebase

Application web statique Firebase Auth + Firestore. Aucun Firebase Storage: les PDF sont générés à la demande.

## Installation rapide
1. Active Authentication > Email/Password dans Firebase.
2. Crée ton compte admin dans Authentication.
3. Dans Firestore, crée `users/{UID_ADMIN}` avec: `{ "role": "admin" }`.
4. Colle `firestore.rules` dans Firestore Rules puis Publish.
5. Ouvre `index.html` ou héberge-le sur Firebase Hosting/Netlify.

## Collections
- users
- drivers
- weeks
- settings
