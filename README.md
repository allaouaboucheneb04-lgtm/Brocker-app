# Broker Intelcom Pay v23.2

Correction principale : les relevés sauvegardés sont maintenant liés au compte chauffeur.

## Nouveautés v23.2
- Lorsqu'un chauffeur accepte une invitation, ses anciennes factures importées sont reliées à son UID Firebase.
- Les factures sauvegardées gardent `driverId`, `driverDocId`, `driverUid` et `driverEmail`.
- L'espace chauffeur cherche les relevés par `driverUid`, ancien `driverId`, et `driverEmail`.
- Quand le broker complète un chauffeur inconnu, les anciennes factures sont liées à son email.

## Important
Garde les rules de développement v23 pendant les tests.
