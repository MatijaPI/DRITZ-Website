import type { Dict } from './types.ts';

/**
 * English strings. The shape is enforced by the `Dict` type (derived from
 * sl.ts) and by `npm run check:i18n`.
 */
const en: Dict = {
  meta: {
    siteName: 'Društvo DRITZ',
    titleSeparator: ' | ',
    defaultOgAlt: 'Društvo DRITZ – robotics, science and FIRST LEGO League for young people',
  },

  a11y: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    footerNav: 'Footer links',
    breadcrumbs: 'Breadcrumb',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    languageSwitcher: 'Choose language',
    currentLanguage: 'current language',
    homeLink: 'Društvo DRITZ – home page',
    externalLink: '(opens in a new tab)',
    logoAlt: 'Društvo DRITZ logo',
    backToTop: 'Back to top',
    scrollHint: 'Scroll down',
  },

  nav: {
    home: 'Home',
    about: 'About',
    activities: 'Activities',
    fll: 'FIRST LEGO League',
    fllShort: 'FLL',
    news: 'News',
    supporters: 'Supporters',
    join: 'Get involved',
    contact: 'Contact',
    privacy: 'Privacy',
  },

  cta: {
    join: 'Get involved',
    contact: 'Write to us',
    support: 'Become a supporter',
    readMore: 'Read more',
    allNews: 'All news',
    discoverFll: 'Discover FLL',
    whatWeDo: 'What we do',
    aboutUs: 'About the society',
    backToNews: 'Back to news',
  },

  langBanner: {
    text: 'This page is also available in English.',
    action: 'Switch to English',
    dismiss: 'Dismiss',
  },

  footer: {
    tagline:
      'A non-profit society for research and education in technology and science. Robotics, workshops and FIRST LEGO League in Slovenia, Croatia, Serbia and Montenegro.',
    explore: 'Explore',
    involved: 'Get involved',
    reach: 'Reach us',
    legal: 'Legal',
    copyright: '© {year} Društvo DRITZ. All rights reserved.',
    built: 'Built with respect for your privacy: no cookies, no trackers.',
    social: 'Social media',
  },

  breadcrumbs: { home: 'Home' },

  dates: {
    published: 'Published',
    updated: 'Updated',
  },

  brand: {
    acronymLabel: 'What does DRITZ stand for?',
    acronym: [
      { letter: 'D', word: 'Društvo', note: 'Society – a community of volunteers and young people' },
      { letter: 'R', word: 'za Raziskovanje', note: 'for Research – questions, hypotheses, experiments' },
      { letter: 'I', word: 'in Izobraževanje', note: 'and Education – workshops and mentoring' },
      { letter: 'T', word: 'o Tehnologiji', note: 'in Technology – robotics and coding' },
      { letter: 'Z', word: 'in Znanosti', note: 'and Science – from curiosity to evidence' },
    ],
  },

  home: {
    meta: {
      title: 'Društvo DRITZ – robotics, science and FIRST LEGO League',
      description:
        'Društvo DRITZ from Celje, Slovenia, opens up robotics, coding and science to young people through workshops, mentoring and FIRST LEGO League competitions.',
    },
    hero: {
      eyebrow: 'Društvo DRITZ',
      lead: 'We open the door to robotics, coding and science for young people – through workshops, mentoring and FIRST LEGO League competitions in Slovenia and the wider region.',
      primary: 'Get involved',
      secondary: 'What we do',
    },
    who: {
      eyebrow: '01 // Who we are',
      title: 'A society that turns curiosity into know-how',
      body: 'Društvo DRITZ is a non-profit society for research and education in technology and science. We have been officially registered since 2024, but our members were running workshops and judging competitions before that. We help young people turn questions into experiments, experiments into code, and code into robots that actually work.',
      link: 'More about us',
    },
    manifesto: {
      eyebrow: '02 // Why we exist',
    },
    activities: {
      eyebrow: '03 // What we do',
      title: 'From the first brick to the international stage',
      intro: 'Robotics, coding and science – always hands-on, with our heads in the clouds.',
      link: 'All activities',
    },
    stats: {
      eyebrow: 'By the numbers',
      title: 'A small society with a big reach',
      items: [
        { value: 4, label: 'countries in the region where we help run FIRST LEGO League competitions' },
        { value: 5, label: 'FLL events abroad with DRITZ judges since 2023' },
        { value: 6, label: 'supporters across the 2024/25 and 2025/26 seasons' },
        { value: 2024, label: 'the year the society was officially registered' },
      ],
    },
    region: {
      eyebrow: '04 // FLL in the region',
      title: 'One league, four countries',
      body: 'Every year we help organise the national FIRST LEGO League competitions in Croatia, Serbia and Montenegro, where our members take on organising and judging roles. At home in Slovenia, we prepare young people for competitions and cheer them on all the way to the international stage.',
      link: 'About FIRST LEGO League',
      mapLabel: 'Diagram of the region: Slovenia, Croatia, Serbia and Montenegro, linked in a FIRST LEGO League network',
    },
    timeline: {
      eyebrow: '05 // Our journey',
      title: 'Milestones we are proud of',
    },
    news: {
      eyebrow: '06 // News',
      title: 'From the workshop and the competition floor',
    },
    supporters: {
      eyebrow: '07 // Supporters',
      title: 'Thank you for believing in young people',
      body: 'Your support lets us offer young people high-quality educational programmes, international connections and the chance to build real, practical skills.',
      link: 'All supporters',
    },
    cta: {
      title: 'Got a team, an idea or a company that believes in young people?',
      body: 'Whether you are a student, parent, mentor, teacher or partner, there is a place for you at DRITZ.',
      primary: 'Get involved',
      secondary: 'Become a supporter',
    },
    contact: {
      eyebrow: '08 // Contact',
      title: 'Hello, human!',
      body: 'A question, an idea for a workshop or a proposal to work together? Drop us a line – we are happy to help.',
      link: 'Open the contact form',
    },
  },

  manifesto: {
    title: 'Every robot starts with a question.',
    lines: [
      'We turn questions into *experiments*, experiments into *code*, code into *motion*.',
      'Here, a mistake is not a failure. It is *data*.',
      'We build *together* – in the classroom, at the competition table and across borders.',
      'We are not waiting for the future. We are *building* it.',
    ],
  },

  values: {
    eyebrow: 'Our values',
    title: 'Four gears that drive DRITZ',
    items: [
      {
        title: 'Curiosity',
        text: 'A good question is the best tool in the workshop. We encourage young people to use it often – and boldly.',
      },
      {
        title: 'Hands-on learning',
        text: 'What you build, code and test yourself is what sticks. So we learn by doing, not just by listening.',
      },
      {
        title: 'Teamwork',
        text: 'The best solutions come from teams – peers, mentors and volunteers, at home and abroad.',
      },
      {
        title: 'Open to all',
        text: 'Technology should not be a privilege. We work towards a society where technical knowledge is accessible to everyone.',
      },
    ],
  },

  activities: {
    fll: {
      title: 'FIRST LEGO League',
      text: 'We help organise competitions in Slovenia, Croatia, Serbia and Montenegro, and our members also judge at international championships.',
    },
    workshops: {
      title: 'Robotics and coding workshops',
      text: 'LEGO robotics and coding for young people: build, code, test – and repeat until the robot does exactly what you want.',
    },
    mentoring: {
      title: 'Mentoring and competition prep',
      text: 'We support teams all the way to the competition table – from the first idea to the final test run.',
    },
    research: {
      title: 'Research and science',
      text: 'We learn research methods in practice: form a hypothesis, measure, check – and present the results with confidence.',
    },
  },

  timeline: {
    readStory: 'Read the story',
    items: {
      marrakech: {
        title: 'On the FLL stage in Morocco',
        text: 'Three of our volunteers judge at the Morocco Open International in Marrakech, where Valentin Šeško receives the trophy for the tournament’s top volunteer.',
      },
      founded: {
        title: 'Društvo DRITZ is officially registered',
        text: 'Our members’ volunteering gets a formal home: the Society for Research and Education in Technology and Science.',
      },
      harrogate24: {
        title: 'Judging the UK final',
        text: 'Three judges from the society sit on the official panel at the FIRST LEGO League UK National Final in Harrogate.',
      },
      bodo: {
        title: 'European champions in Bodø',
        text: 'Slovenian team Black&White become European champions, with two of our judges on the panel.',
      },
      harrogate25: {
        title: 'Back in Harrogate',
        text: 'Two judges from the society serve on the panel at the FIRST LEGO League UK Finals 2025.',
      },
      greece: {
        title: 'A trophy and volunteers in Greece',
        text: 'Three DRITZ volunteers judge in Corinth, and Slovenian team Eco Robots (OŠ Šentvid) win a trophy.',
      },
    },
  },

  about: {
    meta: {
      title: 'About us – mission, vision and values',
      description:
        'Meet Društvo DRITZ: a non-profit society for research and education in technology and science based in Celje, Slovenia, and active since 2024.',
    },
    hero: {
      eyebrow: 'About us',
      title: 'Curious people building a space for curious people',
      lead: 'Društvo DRITZ brings together young people, mentors and volunteers who believe we learn best when we build, code and test things ourselves.',
    },
    imageAlts: [
      'Children building and testing a LEGO robot at a DRITZ workshop',
      'Children and a mentor at a FIRST LEGO League competition table during a DRITZ workshop',
    ],
    story: {
      title: 'Our story',
      paragraphs: [
        'Društvo DRITZ has been officially registered in Slovenia since 2024, with a clear goal: to promote scientific research, innovation and education in technology and science.',
        'Our members were active in robotics before that – as mentors, organisers and international FIRST LEGO League judges. The society gave that work a home, a name and a shared direction.',
        'Through workshops, mentoring and competitions, we create an environment where young people can safely test ideas, work together and grow.',
      ],
    },
    mission: {
      title: 'Mission',
      text: 'We connect young people with science and technology through hands-on learning, research and competitions – nurturing curiosity, creativity and technical skills.',
    },
    vision: {
      title: 'Vision',
      text: 'A society in which innovation, collaboration and technical knowledge are accessible to everyone.',
    },
    team: {
      title: 'The team',
      text: 'DRITZ is run by volunteers – mentors, judges and organisers who give their free time to young people and technology. Would you like to join us?',
      link: 'Become a volunteer',
    },
    legal: {
      title: 'Society details',
      rows: {
        legalName: 'Full legal name',
        shortName: 'Short name',
        seat: 'Registered address',
        since: 'Active since',
        email: 'Email',
        phone: 'Phone',
      },
    },
  },

  activitiesPage: {
    meta: {
      title: 'Activities – robotics workshops and FLL',
      description:
        'LEGO robotics and coding workshops, mentoring, competition prep and FIRST LEGO League: see what Društvo DRITZ offers young people in Slovenia.',
    },
    hero: {
      eyebrow: 'Activities',
      title: 'Where ideas start moving',
      lead: 'Everything we do has one thing in common: young people learn by building, coding and exploring for themselves. We bring the tools, the challenge and the support.',
    },
    imageAlts: {
      fll: 'Crowd of competitors and volunteers at a FIRST LEGO League event in the Adria region',
      workshops: 'Children building and testing a LEGO robot at a DRITZ workshop',
      mentoring: 'Children and a mentor at a FIRST LEGO League competition table during a DRITZ workshop',
    },
    detail: {
      fll: {
        points: [
          'helping organise competitions in Slovenia and the region',
          'organising and judging roles at national tournaments in Croatia, Serbia and Montenegro',
          'volunteer judges at international championships',
        ],
      },
      workshops: {
        points: ['LEGO robotics', 'coding robots', 'teamwork at an FLL competition table'],
      },
      mentoring: {
        points: [
          'support for teams and young researchers',
          'preparation for competitions at home and abroad',
          'the experience of international FLL judges',
        ],
      },
      research: {
        points: ['research methods in practice', 'from a question to an experiment and a measurement', 'presenting results'],
      },
    },
    schools: {
      title: 'For schools, mentors and parents',
      text: 'Would you like a workshop at your school, support for a team or information about competitions? Write to us and we will find a way of working together that suits your young people.',
    },
  },

  fllPage: {
    meta: {
      title: 'FIRST LEGO League in Slovenia and the region',
      description:
        'What FIRST LEGO League is and how Društvo DRITZ supports FLL competitions in Slovenia, Croatia, Serbia and Montenegro and at international championships.',
    },
    hero: {
      eyebrow: 'FIRST LEGO League',
      title: 'Where robotics meets imagination',
      lead: 'FIRST LEGO League (FLL) is an international robotics programme for children and teenagers. Društvo DRITZ supports competitions in Slovenia, Croatia, Serbia and Montenegro, and our members also judge at international championships.',
    },
    what: {
      title: 'What is FIRST LEGO League?',
      paragraphs: [
        'FIRST LEGO League is an international education programme run by FIRST in partnership with LEGO Education. Every season, teams of young people get a new themed challenge: they build and code a robot from LEGO bricks, research a real-world problem and propose an innovative solution.',
        'Competitions are about more than points on the table. Judges also assess the robot design, the innovation project and how the team lives the programme’s core values: teamwork, inclusion, innovation and fun.',
      ],
      partsTitle: 'Four areas of judging',
      parts: [
        { title: 'Robot Game', text: 'An autonomous robot tackles missions on the competition table against the clock.' },
        { title: 'Robot Design', text: 'The team shows the judges how they designed, built and coded their robot.' },
        {
          title: 'Innovation Project',
          text: 'Research into a real-world problem linked to the season’s theme, plus a proposed solution.',
        },
        { title: 'Core Values', text: 'Discovery, innovation, impact, inclusion, teamwork and fun – in every task.' },
      ],
    },
    role: {
      imageAlt: 'Judges in striped referee shirts at a FIRST LEGO League tournament in Morocco',
      title: 'The role of Društvo DRITZ',
      text: 'Our members are experienced volunteers: they help organise competitions, judge them and share their knowledge with teams. This helps raise the standard of youth robotics across the region and strengthens our partnerships with regional FLL organisers.',
    },
    countries: {
      title: 'FLL country by country',
      items: [
        {
          code: 'SI',
          name: 'Slovenia',
          text: 'At home we help organise competitions, run workshops and mentor teams. Slovenian teams have also won international honours: Black&White became European champions in 2024, and Eco Robots (OŠ Šentvid) won a trophy in Greece in 2026.',
        },
        {
          code: 'HR',
          name: 'Croatia',
          text: 'Every year we take part in and help organise the national FIRST LEGO League competition. Our members take on organising and judging roles.',
        },
        {
          code: 'RS',
          name: 'Serbia',
          text: 'We support the national FLL competition with our experience and expertise, and our members also serve as judges.',
        },
        {
          code: 'ME',
          name: 'Montenegro',
          text: 'We help run the national FLL competition and work with local organisers to grow a community of young roboticists.',
        },
      ],
    },
    international: {
      title: 'On the international stage',
      text: 'DRITZ volunteers have judged at FLL events in Morocco, the United Kingdom, Norway and Greece. Each event has its own news story.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Who can take part in FIRST LEGO League?',
          a: 'FLL Challenge is for children and teenagers aged roughly 9 to 16 – the exact age range depends on the country. Teams are usually led by a mentor, such as a teacher or a parent.',
        },
        {
          q: 'How do I become a judge or volunteer?',
          a: 'Write to us at info@dritz.si. We are happy to show new volunteers how competitions work and help them take their first steps.',
        },
        {
          q: 'Where can I find the official rules and the season theme?',
          a: 'Official information about the programme and the current season is published by FIRST at firstlegoleague.org.',
        },
      ],
      officialLink: 'Official FIRST LEGO League website',
    },
  },

  newsPage: {
    meta: {
      title: 'News – FIRST LEGO League and robotics',
      description:
        'News from Društvo DRITZ: international FIRST LEGO League championships, our volunteer judges, successes of Slovenian teams and robotics workshops.',
    },
    hero: {
      eyebrow: 'News',
      title: 'News from the workshop and the competition stage',
      lead: 'Where we judged, who won and what we learned – all in one place.',
    },
    empty: 'News is on its way. In the meantime, write to us or check back soon.',
    related: 'Related news',
    location: 'Location',
    count: 'Stories: {count}',
  },

  supportersPage: {
    meta: {
      title: 'Supporters and partners of Društvo DRITZ',
      description:
        'Thank you to the donors and partners of Društvo DRITZ. See who supports us and how your support can fund robotics workshops and FLL competitions.',
    },
    hero: {
      eyebrow: 'Supporters',
      title: 'An investment in generations of curious minds',
      lead: 'Dear supporters, thank you sincerely for your trust and support. Your contribution is more than financial help – it is an investment in generations of researchers, innovators and responsible makers of tomorrow.',
    },
    seasonsTitle: 'Donors and partners by season',
    season: 'Season {season}',
    logoAlt: '{name} company logo',
    how: {
      title: 'How you can help',
      items: [
        {
          title: 'Donations and sponsorship',
          text: 'Financial support pays for workshops, equipment and competition travel for young people and volunteers.',
        },
        {
          title: 'Equipment and materials',
          text: 'Robotics kits, computers and competition tables are invaluable for young teams.',
        },
        { title: 'Knowledge and time', text: 'Experts from industry and academia can become mentors, guest speakers or judges.' },
      ],
    },
    thanks: 'THANK YOU!',
  },

  joinPage: {
    meta: {
      title: 'Get involved – volunteers, schools, partners',
      description:
        'Join Društvo DRITZ as a young explorer, volunteer, FLL judge, mentor, school or partner, and help build the future of robotics and science together.',
    },
    hero: {
      eyebrow: 'Get involved',
      title: 'There is always room for one more on this team',
      lead: 'No robotics experience needed – just curiosity and a little time. Pick the path that suits you and get in touch.',
    },
    paths: [
      {
        id: 'youth',
        title: 'For young people',
        text: 'Love building, coding or exploring? Come to a workshop and see how an idea turns into a robot.',
        action: 'Ask about workshops',
      },
      {
        id: 'volunteer',
        title: 'For volunteers and judges',
        text: 'Help organise competitions or become a FIRST LEGO League judge. We will teach you everything you need.',
        action: 'Become a volunteer',
      },
      {
        id: 'school',
        title: 'For schools and mentors',
        text: 'Workshops for students, support for competition teams and sharing experience with other mentors.',
        action: 'Suggest a collaboration',
      },
      {
        id: 'partner',
        title: 'For companies and partners',
        text: 'Back young talent and help build the community that tomorrow’s engineers come from.',
        action: 'Become a partner',
      },
    ],
    steps: {
      title: 'How it works',
      items: [
        { title: 'Write to us', text: 'Tell us briefly who you are and what interests you.' },
        { title: 'Let’s meet', text: 'We get back to you, and together we work out the best way to collaborate.' },
        { title: 'Start building', text: 'A workshop, a competition or a project – we take the first step together.' },
      ],
    },
  },

  contactPage: {
    meta: {
      title: 'Contact – get in touch with Društvo DRITZ',
      description:
        'Get in touch with Društvo DRITZ: email info@dritz.si, phone +386 31 251 237, Medlog 52A, Celje, Slovenia. Ask about workshops, FLL or partnerships.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Hello, human!',
      lead: 'Got a question, an idea or a proposal to work together? Write to us – we will reply as soon as we can.',
    },
    details: {
      title: 'Contact details',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
    },
    form: {
      title: 'Send a message',
      name: 'Full name',
      email: 'Email address',
      topic: 'Topic',
      topics: {
        general: 'General question',
        youth: 'Workshops for young people',
        volunteer: 'Volunteering and judging',
        school: 'Working with a school',
        partner: 'Partnership and support',
      },
      message: 'Message',
      consent: 'I agree that the society may use my details to reply to this message.',
      privacyLink: 'Privacy policy',
      honeypot: 'Leave this field empty',
      submit: 'Send message',
      sending: 'Sending…',
      required: 'required',
      mailtoNote:
        'Submitting opens your email app with the message ready to send. You can also write to us directly at info@dritz.si.',
      subjectPrefix: 'Message from the website',
      success: 'Thank you! Your message has been sent. We will reply as soon as we can.',
      successMailto: 'We have opened your email app. If nothing happened, write to us at info@dritz.si.',
      error: 'Oops, the message could not be sent. Please try again or write to us at info@dritz.si.',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email address, e.g. name@example.com.',
        message: 'Your message should be at least 10 characters long.',
        consent: 'We need your consent before you can send the message.',
        spam: 'The message could not be sent. Please refresh the page and try again.',
      },
    },
  },

  privacyPage: {
    eyebrow: 'Legal',
    updated: 'Last updated',
  },

  notFound: {
    meta: {
      title: 'Page not found (404)',
      description:
        'This page could not be found. Head back to the Društvo DRITZ home page or read our news about robotics and FIRST LEGO League.',
    },
    code: 'ERROR 404',
    title: 'This robot drove off the track.',
    text: 'The page you are looking for is not here – it may have moved, or a typo crept into the address. No worries: a mistake is just data.',
    home: 'Go to the home page',
    news: 'Read the news',
    contact: 'Report a broken link',
    suggestions: 'Perhaps you were looking for',
  },

  motion: {
    pause: 'Pause animation',
    play: 'Play animation',
  },
};

export default en;
