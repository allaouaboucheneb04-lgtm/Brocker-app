# v27.3 — PDF sans valeurs par défaut codées en dur

Corrections :
- Suppression des valeurs démo dans le PDF : Allaoua Boucheneb, 9486-5482 QUÉBEC INC, Wilfrid-Hamel, etc.
- Le PDF utilise maintenant les données du broker depuis `brokers/{brokerId}` + `brokers/{brokerId}/settings/company`.
- Si le broker n’a pas encore rempli ses paramètres, le PDF affiche “Entreprise non configurée” au lieu d’informations fausses.
- Le téléchargement PDF fonctionne côté broker et chauffeur avec les paramètres de l’entreprise.

À faire dans l’app : Paramètres > Entreprise, remplir les coordonnées du broker avant de générer les relevés.
