# Intelcom Broker Pay v27.6

Ajouts :
- Tableau financier du broker avec filtre par mois (par défaut), année ou toutes les périodes.
- Bénéfice broker calculé à partir des commissions et frais broker.
- Montant total versé aux chauffeurs.
- Tableau financier du chauffeur avec montant Intelcom, dépenses détaillées et net reçu.
- Filtre chauffeur par mois (par défaut), année ou toutes les périodes.
- Historique chauffeur filtré avec montant brut, dépenses et net.

Le calcul utilise les champs déjà enregistrés dans les relevés Firestore : totalIntelcom/subtotalIntelcom, commission, brokerFees, deduction, advance et total.
