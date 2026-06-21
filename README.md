# Intelcom Broker Pay v18.2 vérifiée

Corrections principales:
- Connexion Google + invitations
- Menu Super Admin corrigé: Invitations visible pour superadmin
- Création profil Google sécurisée par Firestore Rules
- Création chauffeur automatique après invitation
- Sauvegarde relevé: alerte si le code chauffeur du PDF n'existe pas
- Pas de Firebase Storage: PDF généré à la demande

Installation:
1. Déployer `index.html` sur GitHub Pages ou Firebase Hosting.
2. Ajouter le domaine dans Firebase Auth > Authorized domains.
3. Activer Google provider.
4. Coller `firestore.rules` dans Firestore Rules.
5. Se connecter avec l'email superadmin: allaouaboucheneb06@gmail.com
