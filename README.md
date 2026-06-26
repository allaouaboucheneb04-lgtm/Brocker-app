# Broker Intelcom Pay v27.2

Correction de l'import PDF avec architecture multi-broker.

## Changements
- Import PDF conserve les écritures dans `brokers/{brokerId}/...`.
- Création automatique de chauffeur inconnu dans `brokers/{brokerId}/drivers`.
- Notification chauffeur manquant dans `brokers/{brokerId}/notifications` sans bloquer l'import si une règle est incomplète.
- Rules v27.2 incluses avec accès broker complet à ses sous-collections.
- Version PWA conservée.

## Important
Publier `firestore.rules` dans Firebase avant de tester.
