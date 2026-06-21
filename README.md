# Intelcom Broker Pay v17 — Super Admin

Version Firebase sans Storage avec 3 rôles :

- `superadmin` : contrôle tous les brokers
- `broker` : contrôle seulement son entreprise
- `driver` : voit seulement ses relevés et véhicules

## Installation rapide

1. Mets `firestore.rules` dans Firebase > Firestore Database > Rules.
2. Active Firebase Authentication > Email/Password.
3. Crée ton compte dans Authentication.
4. Dans Firestore, crée un document :

Collection: `users`
Document ID: UID de ton compte Firebase

```json
{
  "name": "Allaoua Boucheneb",
  "email": "allaouaboucheneb06@gmail.com",
  "role": "superadmin"
}
```

5. Ouvre `index.html`.

## Collections utilisées

- `users`
- `brokers`
- `drivers`
- `weeks`
- `settings`

Les PDF sont générés à la demande dans le navigateur, donc pas besoin de Firebase Storage.
