# DRITZ Website

Spletna stran Društva DRITZ je pripravljena kot statična GitHub Pages stran v slovenščini.

## Struktura

- `index.html` – glavna enostranska spletna stran (sekcije: Društvo DRITZ, O društvu, Aktivnosti, Podporniki, Kontakt)
- `assets/css/styles.css` – slogovna podoba (moderno, igrivo, tech/science tema)
- `assets/js/main.js` – mobilni meni, vrteča galerija in leto v nogi strani
- `assets/images/` – prostor za fotografije in logotipe
- `CNAME` – nastavljen custom domain: `dritz.si`

## Kasnejši deployment na GitHub Pages (koraki)

1. Odprite repozitorij na GitHubu in pojdite na **Settings → Pages**.
2. V **Build and deployment** izberite:
   - **Source**: *Deploy from a branch*
   - **Branch**: *main* (ali vaš produkcijski branch), mapa */root*
3. Shranite nastavitve in počakajte, da GitHub objavi stran.
4. V DNS upravljalniku domene `dritz.si` nastavite:
   - **A zapise** za apex domeno na GitHub Pages IP-je:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - po želji **CNAME** za `www` na `matijapi.github.io`
   - pred objavo vedno preverite aktualne DNS vrednosti v uradni GitHub Pages dokumentaciji
5. Počakajte na DNS propagacijo (lahko traja nekaj ur).
6. V **Settings → Pages** preverite status in vključite **Enforce HTTPS**, ko je na voljo.

## Praktični nasveti

- Pred objavo zamenjajte placeholder slike z dejanskimi fotografijami in logotipi v `assets/images/`.
- Ohranite relativno preprosto strukturo datotek, da ostane vzdrževanje enostavno.
- Novice dodajajte v `index.html` po vrstnem redu od najnovejše do najstarejše.
- Po večjih spremembah vedno preverite delovanje na mobilnem telefonu in namizju.
