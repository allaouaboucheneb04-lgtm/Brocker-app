# Intelcom Broker Pay v18 — Invitations

Version avec 3 rôles : superadmin, broker, chauffeur.

## Première configuration
1. Crée ton compte dans Firebase Authentication.
2. Copie son UID.
3. Dans Firestore, crée `users/{UID}` :
```json
{
  "name": "Allaoua Boucheneb",
  "email": "allaouaboucheneb06@gmail.com",
  "role": "superadmin",
  "active": true
}
```
4. Colle les règles `firestore.rules` dans Firebase > Firestore > Rules.

## Invitations
- Le superadmin crée une invitation broker.
- Le broker se connecte ou crée son compte avec le même email.
- Le broker clique sur "Accepter invitation".
- Le broker invite ses chauffeurs.
- Le chauffeur accepte l'invitation avec son email.

Aucun Firebase Storage requis. Les PDF sont générés à la demande.
