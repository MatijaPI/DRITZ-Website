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
   - **Source**: _Deploy from a branch_
   - **Branch**: _main_ (ali vaš produkcijski branch), mapa _/root_
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
- Po večjih spremembah vedno preverite delovanje na mobilnem telefonu in namizju.

## SEO

### Dodajanje novice

1. Ustvarite mapo `novice/<ascii-slug>/` in v njej datoteko `index.html`. Uporabite obstoječo stran novice kot vzorec; slug naj vsebuje samo male ASCII črke, številke in vezaje.
2. Na domači strani v razdelku »Dogodki in dosežki« ter na `/novice/index.html` dodajte kartico s sliko, datumom, naslovom, kratkim povzetkom in povezavo na polno novico. Seznam naj bo od najnovejše proti najstarejši; novice brez datuma naj bodo na koncu.
3. Na strani novice dodajte eno oznako H1, celotno besedilo, opisno nadomestno besedilo slike, drobtinice, povezavo na seznam in dve sorodni novici. Datum dodajte v `<time datetime="YYYY-MM-DD">` in `NewsArticle.datePublished` samo, če je datum znan.
4. V `sitemap.xml` dodajte absolutni URL `https://dritz.si/novice/<ascii-slug>/` in nastavite `<lastmod>` na datum zadnje vsebinske spremembe.
5. Posodobite `og:url`, canonical in vse absolutne URL-je v JSON-LD za novo stran.

### Naslovi, opisi in slike

- Vsaka stran naj ima svoj naslov (`<title>`, približno 60 znakov) in opis (`meta description`, 120–155 znakov), ki natančno povzameta vsebino.
- Slike naj imajo kratek, vsebinski `alt` v slovenščini; dekorativne slike naj imajo `alt=""`. Ne uporabljajte imen datotek ali besed »slika« in »fotografija« kot nadomestnega besedila.
- Imena datotek naj bodo z malimi ASCII črkami in vezaji. Za nove fotografije pripravite WebP različice v širinah 480, 800 in 1200 px, vendar ne povečujte izvirnika; uporabite `srcset`, `sizes`, `width` in `height`. Kakovost okoli 80 je dobro izhodišče. Priročni ukazi s `cwebp` so na primer `cwebp -q 80 -resize 800 0 vhod.jpg -o izhod-800.webp`; pred izdelavo različice preverite, ali izvirnik dosega zahtevano širino.

### Kontrolni seznam po objavi

- V Google Search Console preverite, da je lastništvo domene `dritz.si` potrjeno, nato ponovno oddajte `https://dritz.si/sitemap.xml`.
- Z orodjem za pregled URL-jev zahtevajte indeksiranje domače strani, arhiva novic in novih strani posameznih novic.
- Po ponovnem iskanju preverite poročila o indeksiranju, uporabniški izkušnji in mobilni uporabnosti ter odpravite morebitne napake.
