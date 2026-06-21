# Intelcom Broker Pay v18.1 — Google + Invitations

## Nouveautés
- Bouton **Continuer avec Google**.
- Le compte Google est accepté seulement si :
  - l’email est le superadmin configuré dans `index.html`, ou
  - une invitation existe dans `invitations/{email}`.
- Le profil `users/{uid}` est créé automatiquement au premier login.
- Les chauffeurs sont créés automatiquement après invitation.
- Aucun Firebase Storage : les PDF sont générés à la demande.

## À activer dans Firebase
1. Authentication > Méthodes de connexion > Google : activé.
2. Optionnel : Email / mot de passe : activé.
3. Firestore Database : créer la base.
4. Copier `firestore.rules` dans Firestore Rules.

## Superadmin
Le premier login Google avec :
`allaouaboucheneb06@gmail.com`
créera automatiquement :
```json
{
  "role": "superadmin",
  "email": "allaouaboucheneb06@gmail.com"
}
```

## Invitations
Les invitations sont sauvegardées avec l’email comme ID de document :
`invitations/email@gmail.com`

Le broker ou chauffeur clique ensuite sur Google et l’app crée son accès automatiquement.
