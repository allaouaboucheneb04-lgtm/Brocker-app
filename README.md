# Intelcom Pay App V15 Firebase

Projet complet React + Firebase pour broker Intelcom.

## Installation
```bash
npm install
cp .env.example .env
npm run dev
```

## Firebase à activer
1. Authentication > Email/Password
2. Firestore Database
3. Publier les règles dans `firebase.rules`

## Premier admin
Crée un compte dans l'app, puis dans Firestore change son document `users/{uid}` :
```json
{ "role": "admin" }
```

## Fonctionnalités
- Connexion admin/chauffeur
- Gestion chauffeurs
- Import jusqu'à 40 PDF Intelcom
- Extraction chauffeur, semaine, période, jours, colis, total, détails colis
- Barèmes par colis ou frais fixe par jour travaillé
- Véhicule par journée
- Relevés visibles par chauffeur
- PDF généré à la demande, sans Firebase Storage
