/**
 * Slovenian strings (default language). Every key here must exist in en.ts —
 * `npm run check:i18n` (part of `npm run build`) fails otherwise.
 * Placeholders in curly braces, e.g. {year}, are filled in by `fmt()`.
 */
const sl = {
  meta: {
    siteName: 'Društvo DRITZ',
    titleSeparator: ' | ',
    defaultOgAlt: 'Društvo DRITZ – robotika, znanost in FIRST LEGO League za mlade',
  },

  a11y: {
    skipToContent: 'Preskoči na vsebino',
    mainNav: 'Glavna navigacija',
    footerNav: 'Povezave v nogi strani',
    breadcrumbs: 'Drobtinice',
    openMenu: 'Odpri meni',
    closeMenu: 'Zapri meni',
    menu: 'Meni',
    themeToLight: 'Preklopi na svetlo temo',
    themeToDark: 'Preklopi na temno temo',
    languageSwitcher: 'Izbira jezika',
    currentLanguage: 'trenutni jezik',
    homeLink: 'Društvo DRITZ – domača stran',
    externalLink: '(odpre se v novem zavihku)',
    logoAlt: 'Logotip Društva DRITZ',
    backToTop: 'Na vrh',
    scrollHint: 'Pomaknite se navzdol',
  },

  nav: {
    home: 'Domov',
    about: 'O nas',
    activities: 'Aktivnosti',
    fll: 'FIRST LEGO League',
    fllShort: 'FLL',
    news: 'Novice',
    supporters: 'Podporniki',
    join: 'Pridružite se',
    contact: 'Kontakt',
    privacy: 'Zasebnost',
  },

  cta: {
    join: 'Pridružite se',
    contact: 'Pišite nam',
    support: 'Postanite podpornik',
    readMore: 'Preberite več',
    allNews: 'Vse novice',
    discoverFll: 'Spoznajte FLL',
    whatWeDo: 'Kaj počnemo',
    aboutUs: 'Več o društvu',
    backToNews: 'Nazaj na novice',
  },

  langBanner: {
    text: 'Ta stran je na voljo tudi v slovenščini.',
    action: 'Preklopi v slovenščino',
    dismiss: 'Zapri obvestilo',
  },

  footer: {
    tagline:
      'Neprofitno društvo za raziskovanje in izobraževanje o tehnologiji in znanosti. Robotika, delavnice in FIRST LEGO League v Sloveniji, na Hrvaškem, v Srbiji in v Črni gori.',
    explore: 'Raziščite',
    involved: 'Sodelujte',
    reach: 'Stik',
    legal: 'Pravno',
    copyright: '© {year} Društvo DRITZ. Vse pravice pridržane.',
    built: 'Narejeno s spoštovanjem do vaše zasebnosti: brez piškotkov in sledilnikov.',
    social: 'Družbena omrežja',
  },

  breadcrumbs: { home: 'Domov' },

  dates: {
    published: 'Objavljeno',
    updated: 'Posodobljeno',
  },

  brand: {
    acronymLabel: 'Kaj pomeni DRITZ?',
    /** The letters of DRITZ and the Slovenian words they stand for (first capital is highlighted). */
    acronym: [
      { letter: 'D', word: 'Društvo', note: 'skupnost prostovoljcev in mladih' },
      { letter: 'R', word: 'za Raziskovanje', note: 'vprašanja, hipoteze in poskusi' },
      { letter: 'I', word: 'in Izobraževanje', note: 'delavnice in mentorstvo' },
      { letter: 'T', word: 'o Tehnologiji', note: 'robotika in programiranje' },
      { letter: 'Z', word: 'in Znanosti', note: 'od radovednosti do dokaza' },
    ],
  },

  home: {
    meta: {
      title: 'Društvo DRITZ – robotika, znanost in FIRST LEGO League',
      description:
        'Društvo DRITZ iz Celja mladim odpira svet robotike, programiranja in znanosti: delavnice, mentorstvo in tekmovanja FIRST LEGO League v Sloveniji in regiji.',
    },
    hero: {
      eyebrow: 'Društvo DRITZ',
      lead: 'Mladim odpiramo vrata v robotiko, programiranje in znanost – z delavnicami, mentorstvom in tekmovanji FIRST LEGO League v Sloveniji in regiji.',
      primary: 'Pridružite se',
      secondary: 'Kaj počnemo',
    },
    who: {
      eyebrow: '01 // Kdo smo',
      title: 'Društvo, ki radovednost spreminja v znanje',
      body: 'Društvo DRITZ je neprofitno društvo za raziskovanje in izobraževanje o tehnologiji in znanosti. Uradno delujemo od leta 2024, naši člani pa so v delavnicah in na tekmovalnih odrih aktivni že dlje. Mladim pomagamo, da vprašanja spremenijo v poskuse, poskuse v kodo in kodo v delujoče robote.',
      link: 'Več o društvu',
    },
    manifesto: {
      eyebrow: '02 // Zakaj obstajamo',
    },
    activities: {
      eyebrow: '03 // Kaj počnemo',
      title: 'Od prve kocke do mednarodnega odra',
      intro: 'Robotika, programiranje in znanost – vedno z rokami pri delu in glavo v oblakih.',
      link: 'Vse aktivnosti',
    },
    stats: {
      eyebrow: 'V številkah',
      title: 'Majhno društvo, velik doseg',
      items: [
        { value: 4, label: 'države v regiji, kjer pomagamo pri tekmovanjih FIRST LEGO League' },
        { value: 5, label: 'tekmovanj FLL v tujini s sodniki DRITZ od leta 2023' },
        { value: 6, label: 'podpornikov v sezonah 2024/25 in 2025/26' },
        { value: 2024, label: 'leto, od katerega društvo uradno deluje' },
      ],
    },
    region: {
      eyebrow: '04 // FLL v regiji',
      title: 'Ena liga, štiri države',
      body: 'Vsako leto pomagamo pri organizaciji državnih tekmovanj FIRST LEGO League na Hrvaškem, v Srbiji in v Črni gori, naši člani pa na turnirjih prevzemajo organizacijske in sodniške vloge. Doma v Sloveniji mlade pripravljamo na tekmovanja in jih spodbujamo na poti do mednarodnih odrov.',
      link: 'O FIRST LEGO League',
      mapLabel: 'Shema regije: Slovenija, Hrvaška, Srbija in Črna gora, povezane v mrežo FIRST LEGO League',
    },
    timeline: {
      eyebrow: '05 // Naša pot',
      title: 'Mejniki, na katere smo ponosni',
    },
    news: {
      eyebrow: '06 // Novice',
      title: 'Iz delavnice in s tekmovanj',
    },
    supporters: {
      eyebrow: '07 // Podporniki',
      title: 'Hvala, ker verjamete v mlade',
      body: 'Z vašo pomočjo lahko mladim omogočamo kakovostne izobraževalne programe, mednarodne povezave in razvoj praktičnih znanj.',
      link: 'Vsi podporniki',
    },
    cta: {
      title: 'Imate ekipo, idejo ali podjetje, ki verjame v mlade?',
      body: 'Ne glede na to, ali ste učenec, starš, mentor, učitelj ali partner – v Društvu DRITZ je prostor za vas.',
      primary: 'Pridružite se',
      secondary: 'Postanite podpornik',
    },
    contact: {
      eyebrow: '08 // Kontakt',
      title: 'Zdravo, partner!',
      body: 'Vprašanje, ideja za delavnico ali predlog za sodelovanje? Pišite nam – z veseljem odgovorimo.',
      link: 'Odprite kontaktni obrazec',
    },
  },

  manifesto: {
    title: 'Vsak robot se začne z vprašanjem.',
    lines: [
      'Vprašanja spreminjamo v *poskuse*, poskuse v *kodo*, kodo v *gibanje*.',
      'Napaka pri nas ni poraz. Je *podatek*.',
      'Gradimo *skupaj* – v učilnici, ob tekmovalni mizi in onkraj meja.',
      'Prihodnosti ne čakamo. *Sestavljamo* jo.',
    ],
  },

  values: {
    eyebrow: 'Naše vrednote',
    title: 'Štirje zobniki, ki poganjajo DRITZ',
    items: [
      {
        title: 'Radovednost',
        text: 'Dobro vprašanje je najboljše orodje v delavnici. Mlade spodbujamo, da ga uporabljajo pogosto in pogumno.',
      },
      {
        title: 'Učenje z rokami',
        text: 'Kar sam sestaviš, sprogramiraš in preizkusiš, si tudi zapomniš. Zato se učimo z delom, ne le s poslušanjem.',
      },
      {
        title: 'Sodelovanje',
        text: 'Najboljše rešitve nastajajo v ekipi – med vrstniki, mentorji in prostovoljci, doma in v tujini.',
      },
      {
        title: 'Dostopnost',
        text: 'Tehnologija ne sme biti privilegij. Prizadevamo si za družbo, v kateri je tehnično znanje dostopno vsakomur.',
      },
    ],
  },

  activities: {
    fll: {
      title: 'FIRST LEGO League',
      text: 'Pomagamo pri organizaciji tekmovanj v Sloveniji, na Hrvaškem, v Srbiji in v Črni gori, naši člani pa sodijo tudi na mednarodnih prvenstvih.',
    },
    workshops: {
      title: 'Delavnice robotike in programiranja',
      text: 'Lego robotika in programiranje za mlade: sestavi, sprogramiraj, preizkusi – in ponovi, dokler robot ne naredi točno tega, kar želiš.',
    },
    mentoring: {
      title: 'Mentorstvo in priprave na tekmovanja',
      text: 'Ekipe spremljamo na poti do tekmovalne mize – od prve ideje do zadnjega preizkusa pred nastopom.',
    },
    research: {
      title: 'Raziskovanje in znanost',
      text: 'Raziskovalne metode spoznavamo v praksi: postavi hipotezo, izmeri, preveri in pogumno predstavi rezultate.',
    },
  },

  timeline: {
    readStory: 'Preberite novico',
    items: {
      marrakech: {
        title: 'Prvi afriški oder FLL',
        text: 'Trije naši prostovoljci sodijo na prvenstvu Morocco Open International v Marakešu. Valentin Šeško prejme pokal za najboljšega prostovoljca tekmovanja.',
      },
      founded: {
        title: 'Društvo DRITZ uradno začne delovati',
        text: 'Prostovoljno delo naših članov dobi formalni okvir: Društvo za raziskovanje in izobraževanje o tehnologiji in znanosti.',
      },
      harrogate24: {
        title: 'Sodniki na britanskem finalu',
        text: 'Trije ocenjevalci iz društva so del uradne žirije na finalu FIRST LEGO League UK National Final v Harrogateu.',
      },
      bodo: {
        title: 'Evropski prvaki v Bodøju',
        text: 'Slovenska ekipa Black&White postane evropski prvak, dva naša ocenjevalca pa skrbita za strokovno sojenje.',
      },
      harrogate25: {
        title: 'Znova v Harrogateu',
        text: 'Ocenjevalec in ocenjevalka iz društva sodita na finalu FIRST LEGO League UK Finals 2025.',
      },
      greece: {
        title: 'Pokal in prostovoljci v Grčiji',
        text: 'Trije prostovoljci DRITZ sodijo v Korintu, slovenska ekipa Eco Robots (OŠ Šentvid) pa osvoji pokal.',
      },
    },
  },

  about: {
    meta: {
      title: 'O društvu – poslanstvo, vizija in vrednote',
      description:
        'Spoznajte Društvo DRITZ: neprofitno društvo za raziskovanje in izobraževanje o tehnologiji in znanosti iz Celja, ki deluje od leta 2024. Poslanstvo, vizija in ekipa.',
    },
    hero: {
      eyebrow: 'O društvu',
      title: 'Radovedni ljudje, ki gradijo prostor za radovedne ljudi',
      lead: 'Društvo DRITZ povezuje mlade, mentorje in prostovoljce, ki verjamejo, da se najboljše učimo, ko nekaj sestavimo, sprogramiramo in preizkusimo sami.',
    },
    imageAlts: [
      'Otroci sestavljajo in preizkušajo LEGO robota na delavnici Društva DRITZ',
      'Otroci in mentor ob tekmovalni mizi FIRST LEGO League na delavnici Društva DRITZ',
    ],
    story: {
      title: 'Naša zgodba',
      paragraphs: [
        'Društvo DRITZ v Sloveniji uradno deluje od leta 2024 z jasnim ciljem: spodbujati znanstveno raziskovanje, inovacije in izobraževanje na področju tehnologije in znanosti.',
        'Naši člani so v svetu robotike aktivni že dlje – kot mentorji, organizatorji in mednarodni sodniki tekmovanj FIRST LEGO League. Društvo je temu delu dalo dom, ime in skupno smer.',
        'Skozi delavnice, mentorstvo in tekmovanja gradimo okolje, v katerem lahko mladi varno preizkušajo ideje, sodelujejo in rastejo.',
      ],
    },
    mission: {
      title: 'Poslanstvo',
      text: 'Mlade povezujemo z znanostjo in tehnologijo – skozi praktično učenje, raziskovanje in tekmovanja. Razvijamo radovednost, ustvarjalnost in tehnično znanje.',
    },
    vision: {
      title: 'Vizija',
      text: 'Družba, v kateri so inovativnost, sodelovanje in tehnično znanje dostopni vsakomur.',
    },
    team: {
      title: 'Ekipa',
      text: 'Za DRITZ stojijo prostovoljci: mentorji, sodniki in organizatorji, ki svoj prosti čas namenjajo mladim in tehnologiji. Bi se nam pridružili?',
      link: 'Postanite prostovoljec',
    },
    legal: {
      title: 'Podatki o društvu',
      rows: {
        legalName: 'Polno ime',
        shortName: 'Skrajšano ime',
        seat: 'Sedež',
        since: 'Deluje od',
        email: 'E-pošta',
        phone: 'Telefon',
      },
    },
  },

  activitiesPage: {
    meta: {
      title: 'Aktivnosti – delavnice robotike in FLL',
      description:
        'Delavnice lego robotike in programiranja, mentorstvo, priprave na tekmovanja in FIRST LEGO League: preverite, kaj Društvo DRITZ pripravlja za mlade.',
    },
    hero: {
      eyebrow: 'Aktivnosti',
      title: 'Kjer ideje oživijo',
      lead: 'Naše aktivnosti imajo skupni imenovalec: mladi se učijo tako, da gradijo, programirajo in raziskujejo sami – mi pa poskrbimo za orodje, izziv in podporo.',
    },
    imageAlts: {
      fll: 'Množica tekmovalcev in prostovoljcev na tekmovanju FIRST LEGO League v regiji Adrija',
      workshops: 'Otroci sestavljajo in preizkušajo LEGO robota na delavnici Društva DRITZ',
      mentoring: 'Otroci in mentor ob tekmovalni mizi FIRST LEGO League na delavnici Društva DRITZ',
    },
    detail: {
      fll: {
        points: [
          'pomoč pri organizaciji tekmovanj v Sloveniji in regiji',
          'organizacijske in sodniške vloge na državnih turnirjih na Hrvaškem, v Srbiji in v Črni gori',
          'prostovoljni sodniki na mednarodnih prvenstvih',
        ],
      },
      workshops: {
        points: ['lego robotika', 'programiranje robotov', 'delo v ekipah ob tekmovalni mizi FLL'],
      },
      mentoring: {
        points: [
          'podpora ekipam in mladim raziskovalcem',
          'priprave na tekmovanja doma in v tujini',
          'izkušnje mednarodnih sodnikov FLL',
        ],
      },
      research: {
        points: ['raziskovalne metode v praksi', 'od vprašanja do poskusa in meritve', 'predstavitev rezultatov'],
      },
    },
    schools: {
      title: 'Za šole, mentorje in starše',
      text: 'Bi radi delavnico za svojo šolo, podporo ekipi ali informacije o tekmovanjih? Pišite nam in skupaj poiščemo obliko sodelovanja, ki ustreza vašim mladim.',
    },
  },

  fllPage: {
    meta: {
      title: 'FIRST LEGO League Slovenija in regija',
      description:
        'Kaj je FIRST LEGO League in kako Društvo DRITZ pomaga pri tekmovanjih FLL v Sloveniji, na Hrvaškem, v Srbiji in v Črni gori ter na mednarodnih prvenstvih.',
    },
    hero: {
      eyebrow: 'FIRST LEGO League',
      title: 'Tekmovanje, kjer robotika sreča domišljijo',
      lead: 'FIRST LEGO League (FLL) je mednarodni program robotike za otroke in mladostnike. Društvo DRITZ pomaga pri tekmovanjih v Sloveniji, na Hrvaškem, v Srbiji in v Črni gori, naši člani pa sodijo tudi na mednarodnih prvenstvih.',
    },
    what: {
      title: 'Kaj je FIRST LEGO League?',
      paragraphs: [
        'FIRST LEGO League je mednarodni izobraževalni program organizacije FIRST v sodelovanju z LEGO Education. Ekipe mladih vsako sezono dobijo nov tematski izziv: sestavijo in sprogramirajo robota iz kock LEGO ter raziščejo resničen problem in zanj predlagajo inovativno rešitev.',
        'Na tekmovanju ne štejejo le točke na tekmovalni mizi. Sodniki ocenjujejo tudi zasnovo robota, inovacijski projekt in to, kako ekipa živi temeljne vrednote programa, kot so timsko delo, vključenost, inovativnost in zabava.',
      ],
      partsTitle: 'Štiri področja ocenjevanja',
      parts: [
        { title: 'Robotska igra', text: 'Avtonomni robot v omejenem času rešuje naloge na tekmovalni mizi.' },
        { title: 'Zasnova robota', text: 'Ekipa sodnikom predstavi, kako je robota zasnovala, sestavila in sprogramirala.' },
        { title: 'Inovacijski projekt', text: 'Raziskava resničnega problema iz teme sezone in predlog rešitve.' },
        {
          title: 'Temeljne vrednote',
          text: 'Odkrivanje, inovativnost, vpliv, vključenost, timsko delo in zabava – pri vsaki nalogi.',
        },
      ],
    },
    role: {
      imageAlt: 'Člani sodniške žirije v črtastih majicah na tekmovanju FIRST LEGO League v Maroku',
      title: 'Vloga Društva DRITZ',
      text: 'Naši člani so prostovoljci z bogatimi izkušnjami: tekmovanja pomagajo organizirati, na njih sodijo in z ekipami delijo znanje. Tako prispevamo k dvigu ravni mladinske robotike v regiji in utrjujemo partnerske vezi z regijskimi organizatorji FLL.',
    },
    countries: {
      title: 'FLL po državah',
      items: [
        {
          code: 'SI',
          name: 'Slovenija',
          text: 'Doma pomagamo pri organizaciji tekmovanj, pripravljamo delavnice in mentoriramo ekipe. Slovenske ekipe so posegle tudi po mednarodnih lovorikah – Black&White je leta 2024 postala evropski prvak, Eco Robots (OŠ Šentvid) pa je leta 2026 osvojila pokal v Grčiji.',
        },
        {
          code: 'HR',
          name: 'Hrvaška',
          text: 'Vsako leto aktivno sodelujemo in pomagamo pri organizaciji državnega tekmovanja FIRST LEGO League. Naši člani prevzemajo organizacijske in sodniške vloge.',
        },
        {
          code: 'RS',
          name: 'Srbija',
          text: 'Pri organizaciji državnega tekmovanja FLL pomagamo z izkušnjami in strokovnim znanjem, naši člani pa sodelujejo tudi kot sodniki.',
        },
        {
          code: 'ME',
          name: 'Črna gora',
          text: 'Soustvarjamo državno tekmovanje FLL in skupaj z lokalnimi organizatorji gradimo skupnost mladih robotikov.',
        },
      ],
    },
    international: {
      title: 'Na mednarodnih odrih',
      text: 'Prostovoljci DRITZ so sodili na tekmovanjih v Maroku, v Veliki Britaniji, na Norveškem in v Grčiji. O vsakem dogodku smo pripravili novico.',
    },
    faq: {
      title: 'Pogosta vprašanja',
      items: [
        {
          q: 'Kdo lahko sodeluje v FIRST LEGO League?',
          a: 'Program FLL Challenge je namenjen otrokom in mladostnikom, približno od 9. do 16. leta – natančna starostna meja je odvisna od države. Ekipe običajno vodi mentor, na primer učitelj ali starš.',
        },
        {
          q: 'Kako postanem sodnik ali prostovoljec?',
          a: 'Pišite nam na info@dritz.si. Novim prostovoljcem z veseljem predstavimo, kako tekmovanje poteka, in jim pomagamo pri prvih korakih.',
        },
        {
          q: 'Kje najdem uradna pravila in temo sezone?',
          a: 'Uradne informacije o programu in aktualni sezoni objavlja organizacija FIRST na spletni strani firstlegoleague.org.',
        },
      ],
      officialLink: 'Uradna stran FIRST LEGO League',
    },
  },

  newsPage: {
    meta: {
      title: 'Novice – FIRST LEGO League in robotika',
      description:
        'Novice Društva DRITZ: mednarodna prvenstva FIRST LEGO League, sodelovanje naših sodnikov, uspehi slovenskih ekip in delavnice robotike za mlade.',
    },
    hero: {
      eyebrow: 'Novice',
      title: 'Novice iz delavnice in s tekmovalnih odrov',
      lead: 'Kje smo sodili, kdo je zmagal in kaj smo se naučili – vse na enem mestu.',
    },
    empty: 'Novice so na poti. Medtem nam lahko pišete ali pa se kmalu vrnete.',
    related: 'Sorodne novice',
    location: 'Kraj',
    count: 'Število novic: {count}',
  },

  supportersPage: {
    meta: {
      title: 'Podporniki in partnerji Društva DRITZ',
      description:
        'Hvala donatorjem in partnerjem Društva DRITZ. Preverite, kdo nas podpira in kako lahko s podporo omogočite delavnice robotike in tekmovanja FLL.',
    },
    hero: {
      eyebrow: 'Podporniki',
      title: 'Naložba v generacije radovednih',
      lead: 'Spoštovani podporniki, iskrena hvala za vaše zaupanje in podporo. Vaš prispevek ni le finančna pomoč – je naložba v generacije raziskovalcev, inovatorjev in odgovornih ustvarjalcev družbe.',
    },
    seasonsTitle: 'Donatorji in partnerji po sezonah',
    season: 'Sezona {season}',
    logoAlt: 'Logotip podjetja {name}',
    how: {
      title: 'Kako lahko pomagate',
      items: [
        {
          title: 'Donacija ali sponzorstvo',
          text: 'Finančna podpora omogoča delavnice, opremo ter udeležbo mladih in prostovoljcev na tekmovanjih.',
        },
        {
          title: 'Oprema in material',
          text: 'Kompleti za robotiko, računalniki in tekmovalne mize so za mlade ekipe neprecenljivi.',
        },
        {
          title: 'Znanje in čas',
          text: 'Strokovnjaki iz industrije in akademskega sveta so lahko mentorji, gostujoči predavatelji ali sodniki.',
        },
      ],
    },
    thanks: 'HVALA!',
  },

  joinPage: {
    meta: {
      title: 'Pridružite se – mladi, prostovoljci, šole',
      description:
        'Pridružite se Društvu DRITZ kot mladi raziskovalec, prostovoljec, sodnik FLL, mentor, šola ali partner. Skupaj gradimo prihodnost robotike in znanosti.',
    },
    hero: {
      eyebrow: 'Pridružite se',
      title: 'V tej ekipi je prostor še za enega',
      lead: 'Ne potrebujete izkušenj z robotiko – le radovednost in nekaj časa. Izberite pot, ki vam ustreza, in nam pišite.',
    },
    paths: [
      {
        id: 'youth',
        title: 'Za mlade',
        text: 'Te veseli sestavljanje, programiranje ali raziskovanje? Pridi na delavnico in preizkusi, kako se ideja spremeni v robota.',
        action: 'Vprašajte o delavnicah',
      },
      {
        id: 'volunteer',
        title: 'Za prostovoljce in sodnike',
        text: 'Pomagajte pri organizaciji tekmovanj ali postanite sodnik FIRST LEGO League. Naučimo vas vsega, kar potrebujete.',
        action: 'Postanite prostovoljec',
      },
      {
        id: 'school',
        title: 'Za šole in mentorje',
        text: 'Delavnice za učence, podpora tekmovalnim ekipam in izmenjava izkušenj z drugimi mentorji.',
        action: 'Predlagajte sodelovanje',
      },
      {
        id: 'partner',
        title: 'Za podjetja in partnerje',
        text: 'Podprite mlade talente in pomagajte graditi skupnost, iz katere prihajajo jutrišnji inženirji.',
        action: 'Postanite partner',
      },
    ],
    steps: {
      title: 'Kako poteka',
      items: [
        { title: 'Pišite nam', text: 'Na kratko povejte, kdo ste in kaj vas zanima.' },
        { title: 'Spoznajmo se', text: 'Odgovorimo vam in skupaj poiščemo najboljšo obliko sodelovanja.' },
        { title: 'Začnimo graditi', text: 'Delavnica, tekmovanje ali projekt – prvi korak naredimo skupaj.' },
      ],
    },
  },

  contactPage: {
    meta: {
      title: 'Kontakt – pišite Društvu DRITZ',
      description:
        'Stopite v stik z Društvom DRITZ: e-pošta info@dritz.si, telefon 031 251 237, Medlog 52A, Celje. Pišite nam o delavnicah, FLL ali sodelovanju.',
    },
    hero: {
      eyebrow: 'Kontakt',
      title: 'Zdravo, partner!',
      lead: 'Imate vprašanje, idejo ali predlog za sodelovanje? Pišite nam – odgovorili bomo čim prej.',
    },
    details: {
      title: 'Kontaktni podatki',
      address: 'Naslov',
      email: 'E-pošta',
      phone: 'Telefon',
    },
    form: {
      title: 'Pošljite sporočilo',
      name: 'Ime in priimek',
      email: 'E-poštni naslov',
      topic: 'Tema',
      topics: {
        general: 'Splošno vprašanje',
        youth: 'Delavnice za mlade',
        volunteer: 'Prostovoljstvo in sojenje',
        school: 'Sodelovanje s šolo',
        partner: 'Partnerstvo in podpora',
      },
      message: 'Sporočilo',
      consent: 'Strinjam se, da društvo moje podatke uporabi za odgovor na sporočilo.',
      privacyLink: 'Politika zasebnosti',
      honeypot: 'Tega polja ne izpolnjujte',
      submit: 'Pošlji sporočilo',
      sending: 'Pošiljam …',
      required: 'obvezno',
      mailtoNote:
        'Ob oddaji se odpre vaš e-poštni program s pripravljenim sporočilom. Lahko pa nam pišete neposredno na info@dritz.si.',
      subjectPrefix: 'Sporočilo s spletne strani',
      success: 'Hvala! Sporočilo je poslano. Odgovorili vam bomo čim prej.',
      successMailto: 'Odprli smo vaš e-poštni program. Če se ni odprl, nam pišite na info@dritz.si.',
      error: 'Ups, sporočila ni bilo mogoče poslati. Poskusite znova ali nam pišite na info@dritz.si.',
      errors: {
        name: 'Vpišite svoje ime.',
        email: 'Vpišite veljaven e-poštni naslov, na primer ime@primer.si.',
        message: 'Sporočilo naj ima vsaj 10 znakov.',
        consent: 'Za oddajo potrebujemo vaše soglasje.',
        spam: 'Sporočila ni bilo mogoče poslati. Osvežite stran in poskusite znova.',
      },
    },
  },

  privacyPage: {
    eyebrow: 'Pravno',
    updated: 'Zadnja posodobitev',
  },

  notFound: {
    meta: {
      title: 'Stran ni najdena (404)',
      description:
        'Te strani ni bilo mogoče najti. Vrnite se na domačo stran Društva DRITZ ali preberite novice o robotiki in FIRST LEGO League.',
    },
    code: 'NAPAKA 404',
    title: 'Ta robot je zapeljal s proge.',
    text: 'Strani, ki jo iščete, ni – morda je bila premaknjena ali pa se je v naslov prikradla tipkarska napaka. Nič hudega: napaka je samo podatek.',
    home: 'Na domačo stran',
    news: 'Preberite novice',
    contact: 'Prijavite pokvarjeno povezavo',
    suggestions: 'Morda iščete',
  },

  motion: {
    pause: 'Ustavi animacijo',
    play: 'Zaženi animacijo',
  },
};

export default sl;
