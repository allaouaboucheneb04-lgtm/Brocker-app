# Broker Intelcom Pay — v22 SaaS Dashboard

Version basée sur la v21 fonctionnelle, avec de vraies nouveautés :

## Nouveautés v22

### Super Admin
- Dashboard SaaS avec statistiques globales
- Total brokers, chauffeurs, utilisateurs, invitations
- Brokers actifs/désactivés
- Plans Free / Pro / Enterprise
- Modification du plan d’un broker
- Station Intelcom par broker
- Recherche dans les brokers et invitations
- Désactiver / réactiver / supprimer broker

### Broker
- Dashboard broker plus complet
- Limite chauffeurs selon le plan
- Recherche chauffeurs
- Désactiver / réactiver / supprimer chauffeur
- Onglet Relevés prêt pour l’import PDF
- Paramètres broker modifiables

### Chauffeur
- Espace Mes relevés
- Onglet Véhicules par jour
- Profil chauffeur

## Plans
- Free : 5 chauffeurs
- Pro : 50 chauffeurs
- Enterprise : illimité

## Firebase
Utilise Auth + Firestore. Pas de Storage : les PDF seront générés à la demande.

