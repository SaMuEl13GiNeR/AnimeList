# AnimeList

\*\*\*\***\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***FUNCIONAMENT**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\*

L'aplicació serveix per anotar el seguiment d'Animes, de tal forma que si estas vegent diferents animes al mateix temps podes saber per quin capítol t'has quedat en cada un d'ells.
També pots veure en l'apartat general diferents animes que pots tindre o no en la teua propia llista, de forma que serveix com a recomanació ja que están ordenat per popularitat (l'ordre l'he tret d'una altra pàgina que té una base de dades amb tots els animes existents ordenats de diferents formes).
Cada usuari té una llita d'anime (manga en un futur) en el que pots veure els animes que estas vegent, els que tens en "pendent per a veure", els que has deixat de veure (abandonats) i els que ja has acabat.

\*\*\*\***\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***PAGINES**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\*

**\*\***\***\*\*\*HOME**\*\***\***\*\*\*\*

La pàgina home, es la inicial i té una llista de animes ordenats per la popularitat que tenen.
Aquesta pàgina la pots veure tant si has iniciat sessió o si no.
Cada anime te n botó d'afegir en el que si estas logueat l'afegirà a la teua llista en "watching".

**\*\***\***\*\*\*LOGIN**\*\***\***\*\*\*\*

La pàgina login, es un formulari en el que si ja tens un compte creat podrás iniciar sessió, si no estas, hi ha un botó de Registrar-se que envia a la pàgina per a registrar-se.
Si inicies sessió correctament enviarà a la pàgina inicial on mostrarà els animes més populars per a poder afegi-los a la llista de l'usuari. També apareixerà un el gmail de l'usuari per a saber si has iniciat sessí i amb quin compte.
Si no has iniciat correctament la sessió, mostrarà l'error del que has posat mal o si l'ususari n existeix.

**\*\***\***\*\*\*REGISTRE**\*\***\***\*\*\*\*

La pàgina de registre, es un formulari per a crear un compte de la pàgina per a poder iniciar sessió en la pàgian de login.
Si crees el compote en registrar i no esta tot correctament donarà un error i no es registrará en la "base de dades" ni en "usuaris" de firebase.
Si està tot correctament, crearà l'usuari i l'afegirà a la base de dades en una llista buida i mostrarà el login per a que inicie sessió després de registrar-se.
Hi ha tres tipus d'usuaris: Usuario (usuari per a fer us normal de la pàgina), Convidat (no tens una llista per a mostrar però pots veure la llista general), admin (serveix per a fer funcions d'administració i es l'unic que pot veure l'apartat de tests).

**\*\***\***\*\*\*LLISTA_ANIME**\*\***\***\*\*\*\*

La pàgina de llista d'anime mostra una llista dels animes que tens afegits.
Els animes tenen un estat en el que pots mostrar la llista dels que tenene aquest estat.
En els animes en "watching" tenen un botó "+" per a afegir un cap més i anotar per quin vas, ja que els animes en emisió emiteixen un capitul per semana i aquest botó llevaría la necessitat d'entrar al boto de modificar cada anime i cambiar el capitol pel que vas.

**\*\***\***\*\*\*LLISTA_MANGA**\*\***\***\*\*\*\*

La pàgina de llista de manga te la mateixa funcionalitat que la d'anime però per al manga.

**\*\***\***\*\*\*LOGOUT**\*\***\***\*\*\*\*

El botó de logout serveix per a quan estas logeat tancar la sessió, de forma que borra la sessió de localStorage.
