# Intelcom Broker Pay — v26 Multi-Broker Architecture

Cette version restructure la base de données pour mieux supporter plusieurs brokers.

## Nouvelle structure Firestore

Les collections globales restent limitées à :

```text
users/
brokers/
invitations/   (index global par email pour accepter une invitation)
plans/
```

Toutes les données d'un broker sont maintenant stockées sous son document :

```text
brokers/{brokerId}/drivers/
brokers/{brokerId}/weeks/
brokers/{brokerId}/settings/
brokers/{brokerId}/notifications/
brokers/{brokerId}/duplicateInvoices/
brokers/{brokerId}/dailyVehicles/
brokers/{brokerId}/parcelDetails/
brokers/{brokerId}/history/
brokers/{brokerId}/stations/
brokers/{brokerId}/subscriptions/
```

## Pourquoi cette v26

- Isolation plus propre entre brokers.
- Règles Firestore plus faciles à sécuriser.
- Suppression plus simple d'un broker et de ses données.
- Meilleure base pour vendre l'application à plusieurs brokers.
- Les chauffeurs lisent leurs relevés via `collectionGroup('weeks')`.

## Important

Le Super Admin doit toujours être créé manuellement dans Firebase :

```json
{
  "name": "Allaoua Boucheneb",
  "email": "allaouaboucheneb04@gmail.com",
  "role": "superadmin",
  "active": true
}
```

Document ID = UID Firebase Auth du Super Admin.

## Notes de migration

Si tu as déjà des données dans les anciennes collections globales (`drivers`, `weeks`, etc.), il faudra les migrer vers :

```text
brokers/{brokerId}/{collection}/{docId}
```

La v26 fonctionne avec la nouvelle structure. Les nouvelles données créées depuis l'application seront enregistrées dans les sous-collections du broker.
