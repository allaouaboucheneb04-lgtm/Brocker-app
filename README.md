# Dispatch stable v2 — correction connexion

Corrections appliquées :
- bouton **Se connecter** relié à une fonction dédiée et robuste ;
- validation email/mot de passe ;
- état visuel « Connexion… » ;
- connexion avec la touche Entrée ;
- message visible si le SDK Firebase ne charge pas ;
- service worker passé en **network-first** pour `index.html` afin d'éviter qu'une ancienne version GitHub Pages reste bloquée dans le cache ;
- nouveau cache PWA `driver-login-fix-2`.

Après publication sur GitHub Pages, ouvrir une fois l'URL avec :
`?v=driver-login-fix-2`
