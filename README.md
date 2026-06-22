# Broker Intelcom Pay — v19.1 Gmail Invitation

Version stable email/mot de passe avec boutons Gmail.

## Nouveautés
- Bouton **Gmail** pour envoyer l'invitation broker.
- Bouton **Gmail** pour envoyer l'invitation chauffeur.
- Le message contient le lien de connexion, l'email, le mot de passe temporaire/note et l'ID broker.
- Aucun Firebase Storage : les PDF sont générés à la demande.

## Important
Firebase n'envoie pas les emails tout seul. Le bouton Gmail ouvre une fenêtre Gmail préremplie. Il reste à cliquer sur **Envoyer** dans Gmail.

## Déploiement
Remplace le fichier `index.html` sur GitHub Pages par celui-ci.

## v19.2 code fixed
Correction importante : le fichier v19.1 avait une erreur JavaScript dans les boutons Gmail des listes broker/chauffeur. Cette erreur bloquait tout le script, donc même la connexion ne pouvait pas fonctionner.
