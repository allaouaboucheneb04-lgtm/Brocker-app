# Broker Intelcom Pay — v23.1

Version basée sur la v22/v23 intégrée, avec le module principal **Factures Intelcom** et la gestion des **chauffeurs inconnus**.

## Nouveautés v23.1

- Import PDF Intelcom jusqu’à 40 fichiers.
- Détection automatique chauffeur / code / semaine / colis / montants.
- Si un chauffeur n’existe pas dans Firebase :
  - création automatique dans `drivers` avec statut `pending`;
  - facture sauvegardée avec statut `waiting_driver_info`;
  - notification broker dans `notifications`;
  - section “Chauffeurs à compléter”.
- Le broker peut compléter le profil chauffeur : email, téléphone, adresse, paiement.
- Création automatique d’une invitation chauffeur après profil complété.
- Gmail s’ouvre ensuite pour envoyer l’invitation.

## Collections utilisées

`users`, `brokers`, `drivers`, `invitations`, `weeks`, `dailyVehicles`, `parcelDetails`, `settings`, `stats`, `notifications`.

## Important

Le cœur de l’application reste : importer PDF Intelcom → calculer → créer facture PDF → sauvegarder historique Firebase.
