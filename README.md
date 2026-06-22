# Broker Intelcom Pay v21

Version vérifiée pour stabiliser Firebase Auth + Firestore.

## Ce qui est corrigé

- Flux invitation corrigé : l'utilisateur invité crée d'abord son compte Auth, puis l'app lit `invitations/{email}`.
- Les invitations utilisent maintenant l'email en minuscule comme ID de document.
- Création Broker = crée aussi `brokers/{brokerId}` + `invitations/{email}`.
- Le bouton Gmail ouvre seulement Gmail, mais l'invitation existe déjà dans Firestore.
- Désactiver / réactiver / supprimer broker.
- Création chauffeur + invitation par le broker.
- Messages d'erreurs plus clairs.

## Installation

1. Mets `index.html` sur GitHub Pages.
2. Active Firebase Authentication > Email / Mot de passe.
3. Ajoute le domaine autorisé : `allaouaboucheneb04-lgtm.github.io`.
4. Copie `firestore.rules` dans Firestore Rules.
5. Ouvre l'application.
6. Crée ton Super Admin avec `allaouaboucheneb04@gmail.com` ou `allaouaboucheneb06@gmail.com`.

## Première invitation broker

1. Super Admin > Brokers > Créer Broker + Invitation.
2. L'app crée l'invitation dans Firestore.
3. Gmail s'ouvre pour envoyer le lien.
4. Le broker ouvre le lien.
5. Il utilise **Créer compte avec invitation**.
6. Après ça, il peut utiliser **Connexion**.

