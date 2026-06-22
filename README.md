# Broker Intelcom Pay v20

Version corrigée :
- Créer Broker crée réellement un document `brokers` et un document `invitations`.
- Bouton Gmail ouvre seulement Gmail, mais l'invitation existe déjà dans Firebase.
- Bouton Copier invitation.
- Désactiver / Réactiver broker.
- Supprimer broker + données liées.
- Broker crée chauffeur + invitation Firebase.
- Nouveau compte invité : onglet "Créer compte avec invitation".

## Installation
1. Décompresser le ZIP.
2. Envoyer `index.html` sur GitHub Pages dans `Brocker-app`.
3. Copier `firestore.rules` dans Firebase > Firestore > Rules.
4. Activer Firebase Auth : Email/Password.
5. Ajouter le domaine autorisé : `allaouaboucheneb04-lgtm.github.io`.

## Important
Le bouton Gmail n'envoie pas automatiquement l'email sans confirmation : il ouvre Gmail avec le message rempli. L'utilisateur doit cliquer Envoyer.
