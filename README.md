# Dispatch stable v2 — correction compte chauffeur

Corrections ciblées, sans module finances :

- `driverId` est maintenant enregistré dans `users/{uid}` lors de l'acceptation d'une invitation chauffeur.
- Réparation automatique des anciens comptes Auth dont le profil application manque encore, à partir de l'invitation.
- Réparation automatique des profils chauffeur qui ont `brokerId` mais pas `driverId`.
- Liaison de la fiche chauffeur avec l'UID Firebase.
- Le chauffeur n'entre dans l'application que lorsque sa fiche est réellement reliée.
- Cache PWA changé pour forcer GitHub Pages à charger la nouvelle version.

Publier tous les fichiers du dossier, pas seulement `index.html`.
