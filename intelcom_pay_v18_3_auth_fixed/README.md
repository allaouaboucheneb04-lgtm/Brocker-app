# Intelcom Broker Pay v18.3 Auth Fixed

Correction:
- Google Sign-In sur iPhone utilise Redirect.
- Plus de création automatique du superadmin par le code. Crée le document users/{uid} une seule fois dans Firebase.
- Invitations par email Google.
- Règles Firestore renforcées.

## Étape obligatoire Super Admin
1. Connecte-toi une fois avec Google.
2. Si l'app donne le UID dans l'erreur ou dans Firebase Auth, copie le UID.
3. Dans Firestore, crée:

Collection: users
Document ID: UID Firebase

{
  "name": "Allaoua Boucheneb",
  "email": "allaouaboucheneb06@gmail.com",
  "role": "superadmin"
}

## Domaine autorisé Firebase
Authentication > Settings > Authorized domains:
allaouaboucheneb04-lgtm.github.io
