# Intelcom Broker Pay — v27

Version v27 = migration stabilisée vers l'architecture multi-broker :

- `users/{uid}` pour les rôles et la redirection.
- `brokers/{brokerId}` pour le profil broker.
- `brokers/{brokerId}/drivers`
- `brokers/{brokerId}/weeks`
- `brokers/{brokerId}/settings`
- `brokers/{brokerId}/invitations`
- `brokers/{brokerId}/notifications`
- `brokers/{brokerId}/rates`
- `brokers/{brokerId}/vehicles`
- `brokers/{brokerId}/stations`

Un index global `invitations/{email}` est conservé uniquement pour permettre à un broker/chauffeur invité de créer son compte avant d'avoir un profil `users/{uid}`.

## Super Admin
Le Super Admin doit être créé manuellement :

`users/{UID_SUPERADMIN}`

```json
{
  "name": "Allaoua Boucheneb",
  "email": "allaouaboucheneb04@gmail.com",
  "role": "superadmin",
  "active": true
}
```

## Installation
1. Mettre `index.html`, `manifest.webmanifest`, `service-worker.js`, `icon-192.png`, `icon-512.png` sur GitHub Pages.
2. Copier `firestore.rules` dans Firebase Firestore Rules.
3. Activer Authentication email/mot de passe.
4. Autoriser le domaine GitHub Pages dans Firebase Authentication.
