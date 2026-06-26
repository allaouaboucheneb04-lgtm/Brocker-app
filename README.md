# Intelcom Broker Pay — v25.5 Sécurité

Cette version supprime complètement la création de Super Admin depuis l'application.

## Changements
- Suppression du panneau `Créer Super Admin` de la page login.
- Suppression du code JavaScript `createSuperBtn` qui créait un rôle `superadmin`.
- Les invitations ne peuvent créer que des rôles `broker` ou `driver`.
- Message de connexion corrigé : le Super Admin doit être créé manuellement dans Firebase.
- Ajout d'un fichier `firestore.rules` plus sécurisé.

## Création du Super Admin
1. Créer le compte dans Firebase Authentication.
2. Copier son UID.
3. Créer le document Firestore `users/{UID}` :

```json
{
  "name": "Allaoua Boucheneb",
  "email": "allaouaboucheneb04@gmail.com",
  "role": "superadmin",
  "active": true
}
```

Aucun utilisateur ne peut créer un Super Admin depuis l'application.
