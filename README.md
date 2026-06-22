# Broker Intelcom Pay — v23 intégrée depuis v22

Cette version repart du ZIP v22 SaaS existant et ajoute un vrai onglet **Factures** sans casser le reste.

## Gardé de v22
- Connexion Firebase Auth
- Super Admin
- Brokers
- Chauffeurs
- Invitations
- Plans Free / Pro / Enterprise
- Désactivation / suppression broker
- Historique Firestore

## Ajout principal
### Onglet Broker > Factures
- Import jusqu'à 40 PDF Intelcom
- Lecture PDF avec PDF.js
- Détection chauffeur / code / semaine / période
- Tableau avant génération
- Avance et déduction par chauffeur
- Commission broker
- Frais fixe par jour travaillé
- Barème par colis selon véhicule
- Véhicule modifiable par journée
- PDF compact type v13.1
- ZIP de toutes les factures
- Sauvegarde dans `weeks` Firestore

## Fichiers
- `index.html`
- `firestore.rules`
- `README.md`

## Déploiement
Remplace ton `index.html` actuel sur GitHub Pages par celui-ci.
