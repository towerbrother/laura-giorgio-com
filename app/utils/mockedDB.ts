import type { FooterProps } from '~/components/Footer';
import type { HeaderProps } from '~/components/Header';
import type { InfoProps } from '~/components/Info';
import type { StageProps } from '~/components/Stage';
import type { TileProps } from '~/components/Tile';
import type { LanguageProps } from '~/components/Language';
import type { BannerProps } from '~/components/Banner';
import type { RsvpContactDetailsProps } from '~/routes/rsvp/contactdetails';
import type { RsvpGuestsDetailsProps } from '~/routes/rsvp/guestsdetails';
import type { RsvpOtherDetailsProps } from '~/routes/rsvp/otherdetails';
import type { RsvpThankYouProps } from '~/routes/rsvp/thanks';

// static
const ceremonyDate: Date = new Date(Date.UTC(2023, 6, 29, 12, 0));
const partyDate: Date = new Date(Date.UTC(2023, 6, 29, 15, 30));
const fridayDate: Date = new Date(Date.UTC(2023, 6, 28, 12, 0));
const languageOptions: LanguageProps = {
  currentLanguage: 'en',
  options: ['en', 'de', 'it'],
};

// data
export const footer: Array<FooterProps> = [
  {
    name: 'Laura & Giorgio',
  },
  {
    name: 'Laura & Giorgio',
  },
  {
    name: 'Laura & Giorgio',
  },
];

export const header: Array<HeaderProps> = [
  {
    name: 'Laura & Giorgio',
    languageOptions: languageOptions.options,
    currentLanguage: 'en',
    links: [
      { text: 'Info', slug: '/info', type: 'link' },
      { text: 'Menu', slug: '/menu', type: 'link' },
      { text: 'Timeline', slug: '/timeline', type: 'link' },
      { text: 'Holiday', slug: '/holiday', type: 'link' },
      { text: 'Reservation', slug: '/accomodation', type: 'link' },
      { text: 'Contact', slug: '/contact', type: 'link' },
      { text: 'Gift', slug: '/contribute', type: 'link' },
    ],
  },
  {
    name: 'Laura & Giorgio',
    languageOptions: languageOptions.options,
    currentLanguage: 'de',
    links: [
      { text: 'Info', slug: '/info', type: 'link' },
      { text: 'Menu', slug: '/menu', type: 'link' },
      { text: 'Tagesablauf ', slug: '/timeline', type: 'link' },
      { text: 'Urlaub', slug: '/holiday', type: 'link' },
      { text: 'Reservierung', slug: '/accomodation', type: 'link' },
      { text: 'Kontakt', slug: '/contact', type: 'link' },
      { text: 'Geschenk', slug: '/contribute', type: 'link' },
    ],
  },
  {
    name: 'Laura & Giorgio',
    languageOptions: languageOptions.options,
    currentLanguage: 'it',
    links: [
      { text: 'Info', slug: '/info', type: 'link' },
      { text: 'Menu', slug: '/menu', type: 'link' },
      { text: 'Cronologia', slug: '/timeline', type: 'link' },
      { text: 'Vacanze', slug: '/holiday', type: 'link' },
      { text: 'Prenota', slug: '/accomodation', type: 'link' },
      { text: 'Contattaci', slug: '/contact', type: 'link' },
      { text: 'Regalo', slug: '/contribute', type: 'link' },
    ],
  },
];

export const stage: Array<StageProps> = [
  {
    headline: 'Welcome!!',
    text: 'If you are here is because you got my CV, thank you for checking this out! I built this website a few months before our wedding. I used mornings and evenings due to work constraints and family life with a 6-9 months old beautiful baby. I used the opportunity to explore a new stack, in particular using Remix.run as Web Framework of choice paired up with Tailwind CSS. I (obviously :D) used Typescript. Is it perfect!? Well no, the design is very poor, I did not write tests, I did not hook up a database, I did not use a proper CMS for content management,  Tailwind classes are not reusable and optimised, and probably something else... there is no end to perfection! It did the',
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
  {
    headline: 'Wilkommen!!',
    text: '29th July 2023',
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
  {
    headline: 'Benvenuti!!',
    text: '29th July 2023',
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
];

export const homeTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'glj.JPG', alt: 'Giorgio, Laura and Juni' },
    tile: {
      title: 'Our story',
      subtitle: 'For those who did not know',
      texts: [
        `We met at Uni, in the UK. Zaira, a mutual friend, told Giorgio about Laura suggesting to meet. She thought they would be perfect for each other. So, when Laura walked past Giorgio in the campus library, he seized the moment and approached her in proper stalker-mode: “Hi, you are Laura, aren't you?”. Fast forward to 8 years, 1 (wonderful) baby girl, 2 countries, countless yoga sessions, occasional arguments and hundreds of books read and discussed together, we are now getting married! Join us to celebrate our big day together!`,
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'glj.JPG', alt: 'Giorgio, Laura und Juni' },
    tile: {
      title: 'Unsere Geschichte',
      subtitle: 'Für alle, die die Geschichte noch nicht kennen',
      texts: [
        'Wir haben uns an der Uni im Cranfield, UK, kennengelernt. Zaira, eine gemeinsame Freundin, meinte zu Giorgio, dass er unbedingt Laura kennenlernen soll. Sie dachte, sie würden perfekt zueinander passen. Als Laura also in der Campus-Bibliothek an Giorgio vorbeilief, nutzte er die Gunst der Stunde, setzt sein Stalker- Modus ein und sagte: „Hi, du bist Laura, oder?“ Vorgespult zu 8 Jahre, 1 (wunderbares) kleines Mädchen, 2 Länder, unzählige Yogastunden, gelegentliche Streitereien und Hunderte von gelesenen und diskutierten Büchern, heiraten wir! Seid dabei und feiert mit uns unseren großen Tag!',
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'glj.JPG', alt: 'Giorgio, Laura e Juni' },
    tile: {
      title: 'La nostra storia',
      subtitle: 'Per chi non lo sapesse',
      texts: [
        `Ci siamo incontrati all'università di Cranfield, in Inghilterra. Zaira, un'amica in comune, consigliò a Giorgio di chiedere a Laura di uscire con lui, era convinta che sarebbero stati perfetti l'uno per l'altra. Così, quando Laura è passata accanto a Giorgio nella biblioteca del campus, lui colse l'attimo e le si avvicinò, con atteggiamento da stalker, dicendo: "Ciao, tu sei Laura, vero?". Adesso, dopo 8 anni, 1 (meravigliosa) bambina, 2 paesi, innumerevoli sessioni di yoga, qualche litigata e centinaia di libri letti e discussi, ci sposiamo! Unisciti a noi per festeggiare insieme!`,
      ],
    },
  },
];

export const travelTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'travel.jpg', alt: 'Airport' },
    tile: {
      title: 'Travel',
      subtitle: 'How to get to Wolfsberg?',
      texts: [
        'Nearest airports are Graz and Klagenfurt (limited flight options). There are direct trains and buses to Wolfsberg in day time. To book please visit oebb.at. Alternatively, you can fly to Vienna. We reccommend to book a car from there (ca. 3hrs drive).',
        'We reccommend all guests travelling from abroad to arrive the day before. Should you require any assistance, feel free to contact directly Giorgio or Laura.',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.oebb.at/',
        text: 'TRAIN',
      },
      {
        href: 'https://www.skyscanner.net/',
        text: 'FLIGHT',
      },
    ],
  },
  {
    direction: 'front',
    image: { src: 'travel.jpg', alt: 'Airport' },
    tile: {
      title: 'Anreise',
      subtitle: 'Wie komme ich nach Wolfsberg?',
      texts: [
        'Die nächsten Flughäfen sind Graz und Klagenfurt (letzteres hat nur begrenztes Angebot an Flügen). Tagsüber gibt es direkte Zug- und Busverbindungen von beiden Flüghäfen nach Wolfsberg. Zugtickets könnt ihr oebb.at buchen. Alternativ ist auch Wien eine Option. In dem Fall empfehlen wir Euch ein Auto am Flughafen zu mieten und dann nach Wolfsberg zu fahren (ca. 3 Stunden Fahrt).',
        'Da wir am Samstag Mittag früh mit dem Programm loslegen wollen, empfehlen wir allen Gästen, die aus dem Ausland anreisen, am Vortag anzureisen. Wenn Ihr Hilfe braucht oder Fragen habt, wendet Euch bitte direkt an Giorgio oder Laura.',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.oebb.at/',
        text: 'ZUG',
      },
      {
        href: 'https://www.skyscanner.net/',
        text: 'FLUG',
      },
    ],
  },
  {
    direction: 'front',
    image: { src: 'travel.jpg', alt: 'Airport' },
    tile: {
      title: 'Viaggio',
      subtitle: 'Come arrivare a Wolfsberg?',
      texts: [
        `I più vicini aeroporti sono Graz e Klagenfurt (con opzioni di volo limitate). Durante il giorno ci sono treni e autobus diretti per Wolfsberg, prenota visitando oebb.at. In alternativa, puoi volare a Vienna e prenotare un'auto per raggiungerci (circa 3 ore di guida).`,
        'Consigliamo vivamente ai nostri ospiti internazionali di arrivare il giorno prima. In caso di necessità, non esitare a contattare direttamente Giorgio o Laura.',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.oebb.at/',
        text: 'TRENO',
      },
      {
        href: 'https://www.skyscanner.net/',
        text: 'AEREO',
      },
    ],
  },
];

export const transportationTile: Array<TileProps> = [
  {
    direction: 'back',
    image: { src: 'transportation.jpg', alt: 'Toy car' },
    tile: {
      title: 'Transportation',
      subtitle: "Don't worry about anything",
      texts: [
        'We have arranged a bus transport for the guests from the hotel to the church and later to the celebration.',
      ],
    },
  },
  {
    direction: 'back',
    image: { src: 'transportation.jpg', alt: 'Toy car' },
    tile: {
      title: 'Transport',
      subtitle: 'Mach dir keine Sorgen',
      texts: [
        'Wir haben einen Bustransport für die Gäste vom Hotel zur Kirche und später zur Feier organisiert.',
      ],
    },
  },
  {
    direction: 'back',
    image: { src: 'transportation.jpg', alt: 'Toy car' },
    tile: {
      title: 'Trasporto',
      subtitle: 'Non preoccuparti di niente',
      texts: [
        `Abbiamo organizzato un autobus per il trasporto degli ospiti dall'hotel alla chiesa e successivamente al ricevimento.`,
      ],
    },
  },
];

export const accomodationTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'hotel.jpg', alt: 'Hotel Room' },
    tile: {
      title: 'Accommodation',
      subtitle: 'Cozy rooms for your stay',
      texts: [
        'Wolfsberg offers various accommodation options. However, for our guests, we have identified two options that we consider to be appropriate, Hotel Hecher and Pension Ölberger.',
        'We also discussed and agreed on a special price with Hotel Hecher.',
      ],
    },
    links: [{ slug: '/accomodation', text: 'BOOK' }],
  },
  {
    direction: 'front',
    image: { src: 'hotel.jpg', alt: 'Hotel Room' },
    tile: {
      title: 'Unterkunft',
      subtitle: 'Gemütliche Zimmer für Euren Aufenthalt',
      texts: [
        'Wolfsberg bietet verschiedene Übernachtungsmöglichkeiten. Unseren Gästen empfehlen wir: Hotel Hecher und die Pension Ölberger.',
        'Hotel Hecher bietet auch einen Sonderpreis unseren Gästen an.',
      ],
    },
    links: [{ slug: '/accomodation', text: 'BOOK' }],
  },
  {
    direction: 'front',
    image: { src: 'hotel.jpg', alt: 'Hotel Room' },
    tile: {
      title: 'Alloggio',
      subtitle: 'Camere accoglienti per il vostro soggiorno',
      texts: [
        `Wolfsberg offre molte opzioni di alloggio. Tuttavia, per comodità dei nostri ospiti, abbiamo identificato due opzioni che riteniamo siano particolarmente adatte: l'hotel Hecher e la pensione Ölberger.`,
        `Inoltre, abbiamo discusso e concordato un prezzo speciale per i nostri ospiti presso l'hotel Hecher.`,
      ],
    },
    links: [{ slug: '/accomodation', text: 'PRENOTA' }],
  },
];

export const info: Array<InfoProps> = [
  {
    headline: 'Ceremony & Celebration',
    items: [
      {
        icon: 'mountain',
        title: 'Friday evening',
        dateTime: fridayDate,
        text: 'Offnerhütte - Aichberg 73 9411 St. Michael, Lavanttal, Austria',
        externalLink: {
          href: 'https://www.offnerhuette.at/',
          text: 'HUT',
        },
      },
      {
        icon: 'calendar',
        title: 'Wedding / Baptism',
        dateTime: ceremonyDate,
        text: 'It would be absolutely great to have you there! Join us!',
        link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
      },
      {
        icon: 'church',
        title: 'Ceremony',
        dateTime: ceremonyDate,
        text: 'St. Wolfgang church - Kienberg, 8742 St. Wolfgang, Austria',
        externalLink: {
          href: 'https://www.google.com/maps/place/Pfarrkirche+St.+Wolfgang+bei+Obdach/@47.0972732,14.6321913,17z/data=!3m1!4b1!4m5!3m4!1s0x4770354d865f9c6d:0xaf4ae788399bc111!8m2!3d47.0972779!4d14.6343669',
          text: 'CHURCH',
        },
      },
      {
        icon: 'party',
        title: 'Reception',
        dateTime: partyDate,
        text: 'Wolfsberg Castle - Schloßstraße, 9400 Wolfsberg, Austria',
        externalLink: {
          href: 'https://www.google.com/maps/place/Schloss+Wolfsberg/@46.84121,14.8450501,17z/data=!3m1!4b1!4m5!3m4!1s0x477020f0c6fdd3b7:0xa6cd89a4e612df31!8m2!3d46.8412064!4d14.8472388',
          text: 'CASTLE',
        },
      },
    ],
  },
  {
    headline: 'Trauung & Feier',
    items: [
      {
        icon: 'mountain',
        title: 'Freitagabend',
        dateTime: fridayDate,
        text: 'Offnerhütte - Aichberg 73 9411 St. Michael, Lavanttal, Austria',
        externalLink: {
          href: 'https://www.offnerhuette.at/',
          text: 'HÜTTE',
        },
      },
      {
        icon: 'calendar',
        title: 'Hochzeit / Taufe',
        dateTime: ceremonyDate,
        text: 'Wir freuen uns, wenn du dabei bist.',
        link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
      },
      {
        icon: 'church',
        title: 'Trauung',
        dateTime: ceremonyDate,
        text: 'St. Wolfgang Kirche - Kienberg, 8742 St. Wolfgang, Österreich',
        externalLink: {
          href: 'https://www.google.com/maps/place/Pfarrkirche+St.+Wolfgang+bei+Obdach/@47.0972732,14.6321913,17z/data=!3m1!4b1!4m5!3m4!1s0x4770354d865f9c6d:0xaf4ae788399bc111!8m2!3d47.0972779!4d14.6343669',
          text: 'KIRCHE',
        },
      },
      {
        icon: 'party',
        title: 'Feier',
        dateTime: partyDate,
        text: 'Schloß Wolfsberg - Schloßstraße, 9400 Wolfsberg, Österreich',
        externalLink: {
          href: 'https://www.google.com/maps/place/Schloss+Wolfsberg/@46.84121,14.8450501,17z/data=!3m1!4b1!4m5!3m4!1s0x477020f0c6fdd3b7:0xa6cd89a4e612df31!8m2!3d46.8412064!4d14.8472388',
          text: 'SCHLOß',
        },
      },
    ],
  },
  {
    headline: 'Cerimonia & Ricevimento',
    items: [
      {
        icon: 'mountain',
        title: 'Venerdì sera',
        dateTime: fridayDate,
        text: 'Offnerhütte - Aichberg 73 9411 St. Michael, Lavanttal, Austria',
        externalLink: {
          href: 'https://www.offnerhuette.at/',
          text: 'BAITA',
        },
      },
      {
        icon: 'calendar',
        title: 'Matrimonio / Battesimo',
        dateTime: ceremonyDate,
        text: 'Sarebbe assolutamente fantastico averti lì! Unisciti a noi!',
        link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
      },
      {
        icon: 'church',
        title: 'Cerimonia',
        dateTime: ceremonyDate,
        text: 'Chiesa di St. Wolfgang - Kienberg, 8742 St. Wolfgang, Austria',
        externalLink: {
          href: 'https://www.google.com/maps/place/Pfarrkirche+St.+Wolfgang+bei+Obdach/@47.0972732,14.6321913,17z/data=!3m1!4b1!4m5!3m4!1s0x4770354d865f9c6d:0xaf4ae788399bc111!8m2!3d47.0972779!4d14.6343669',
          text: 'CHIESA',
        },
      },
      {
        icon: 'party',
        title: 'Ricevimento',
        dateTime: partyDate,
        text: 'Castello Wolfsberg - Schloßstraße, 9400 Wolfsberg, Austria',
        externalLink: {
          href: 'https://www.google.com/maps/place/Schloss+Wolfsberg/@46.84121,14.8450501,17z/data=!3m1!4b1!4m5!3m4!1s0x477020f0c6fdd3b7:0xa6cd89a4e612df31!8m2!3d46.8412064!4d14.8472388',
          text: 'CASTELLO',
        },
      },
    ],
  },
];

export const contribution: Array<BannerProps> = [
  {
    headline: 'To those considering a gift!',
    paragraphs: [
      'Your presence is present enough!',
      'However, if you wish to honour us with a gift, we would be very grateful for a financial contribution.',
      'You can find our bank details in your wedding invite. Any amount is appreciated.',
      'THANK YOU! 🥰',
    ],
  },
  {
    headline: 'An alle, die etwas schenken wollen!',
    paragraphs: [
      'Eure Anwesenheit ist genug! ',
      'Wenn ihr uns etwas schenken wollt, dann wären wir über einen Geldbeitrag sehr dankbar.',
      'Unsere Bankverbindung steht auf der Einladung. Jeder Betrag ist willkommen.',
      'DANKE SCHÖN! 🥰',
    ],
  },
  {
    headline: 'Per chi sta pensando ad un regalo!',
    paragraphs: [
      'La tua presenza è già un dono!',
      'Tuttavia, se desideri onorarci con un regalo, ti saremmo molto grati per un contributo finanziario.',
      'Puoi trovare le nostre coordinate bancarie sul tuo invito. Qualsiasi importo è apprezzato.',
      'GRAZIE! 🥰',
    ],
  },
];

export const hotelTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'hecher-logo.jpg', alt: 'Hotel Hecher Logo' },
    tile: {
      title: 'Hotel Hecher',
      subtitle: 'Reccomended for those staying 2 nights',
      texts: [
        'Centrally located with comfortable rooms. 10 min walk or 4 min drive from the reception venue. Within walking distance from the central station in Wolfsberg. Special price has been agreed for our guests (applicable to 2-nights stay only). €58 per person (double room), €75 (single room). Breakfast included. Additional bed €35 per night. Baby bed at €15 per room. Free parking.',
        'Please book via email (hotel@hecher.at) and quote “Hochzeit Purnell” in your booking. Please book as soon as possible.',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.hecher.at/',
        text: 'HECHER',
      },
    ],
  },
  {
    direction: 'front',
    image: { src: 'hecher-logo.jpg', alt: 'Hotel Hecher Logo' },
    tile: {
      title: 'Hotel Hecher',
      subtitle: 'Empfohlen für diejenigen, die 2 Nächte bleiben',
      texts: [
        'Zentral gelegen mit komfortablen Zimmern. 10 Minuten zu Fuß oder 4 Minuten Autofahrt von der Feierlocation entfernt. Nur wenige Gehminuten vom Hauptbahnhof in Wolfsberg entfernt. Für unsere Gäste wurde ein Sonderpreis vereinbart (gilt nur ab 2 Übernachtungen). 58€ pro Person (Doppelzimmer), 75€ (Einzelzimmer). Frühstück inklusive. Zusatzbett 35€ pro Nacht. Babybett für 15€ pro Zimmer. Gratis Parkplätze.',
        'Bitte bucht per E-Mail (hotel@hecher.at) und gebt bei der Buchung „Hochzeit Purnell“ an. Bitte bucht so bald wie möglich.',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.hecher.at/',
        text: 'HECHER',
      },
    ],
  },
  {
    direction: 'front',
    image: { src: 'hecher-logo.jpg', alt: 'Hotel Hecher Logo' },
    tile: {
      title: 'Hotel Hecher',
      subtitle: 'Consigliato per chi soggiorna 2 notti',
      texts: [
        'Situato in posizione centrale con camere confortevoli, a soli 10 minuti a piedi o 4 minuti in auto dal luogo del ricevimento. A pochi passi dalla stazione centrale di Wolfsberg. Abbiamo concordato un prezzo speciale per i nostri ospiti, applicabile solo per soggiorni di 2 notti: 58€ a persona per una camera doppia e 75€ per una camera singola, con colazione inclusa. Il costo per un letto supplementare è di 35€ a notte, mentre per una culla il costo è di 15€ a camera. Il parcheggio è gratuito.',
        'Ti preghiamo di prenotare via e-mail (hotel@hecher.at) e citare "Hochzeit Purnell" nella tua prenotazione. Ti preghiamo di prenotare il prima possibile.',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.hecher.at/',
        text: 'HECHER',
      },
    ],
  },
];

export const pensionTile: Array<TileProps> = [
  {
    direction: 'back',
    image: { src: 'oelberger-logo.png', alt: 'Gasthof Oelberger Logo' },
    tile: {
      title: 'Pension Ölberger',
      subtitle: 'Reccomended for those staying 1 night only',
      texts: [
        'Simple, inexpensive rooms. Recommended for those staying only one night. Car needed to reach from Wolfsberg city center. The price is €45 per person. Breakfast included. Further discount applies to triple rooms.',
        'Please book via email (office@gasthof-oelberger.at).',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.gasthof-oelberger.at/',
        text: 'ÖLBERGER',
      },
    ],
  },
  {
    direction: 'back',
    image: { src: 'oelberger-logo.png', alt: 'Gasthof Oelberger Logo' },
    tile: {
      title: 'Pension Ölberger',
      subtitle: 'Empfohlen für diejenigen, die nur 1 Nacht bleiben',
      texts: [
        'Einfache und günstige Zimmer. Empfohlen für diejenigen, die nur eine Nacht bleiben. Man braucht ein Auto, kann aber ggf. zur Feierlocation laufen. Der Preis beträgt 45€ pro Person pro Nacht. Frühstück inkludiert. Rabat erhältlich für Mehrbettzimmer.',
        'Bitte bucht per E-Mail (office@gasthof-oelberger.at).',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.gasthof-oelberger.at/',
        text: 'ÖLBERGER',
      },
    ],
  },
  {
    direction: 'back',
    image: { src: 'oelberger-logo.png', alt: 'Gasthof Oelberger Logo' },
    tile: {
      title: 'Pension Ölberger',
      subtitle: 'Consigliato per chi soggiorna solo 1 notte',
      texts: [
        `Camere semplici ed economiche, perfette per chi soggiorna solo una notte. Tieni presente che sarà necessaria l'auto per raggiungere la pensione dal centro di Wolfsberg. Il prezzo è di €45 a persona, con la colazione inclusa. Per le camere triple verranno applicati ulteriori sconti.`,
        'Ti preghiamo di prenotare tramite e-mail (office@gasthof-oelberger.at).',
      ],
    },
    externalLinks: [
      {
        href: 'https://www.gasthof-oelberger.at/',
        text: 'ÖLBERGER',
      },
    ],
  },
];

export const contributionBanner: Array<BannerProps> = [
  {
    paragraphs: [
      'Your presence is present enough!',
      'However, if you wish to honour us with a gift, we would be very grateful for a financial contribution.',
    ],
    link: { slug: '/contribute', text: 'CONTRIBUTE' },
  },
  {
    paragraphs: [
      'Eure Anwesenheit ist genug! ',
      'Wenn ihr uns etwas schenken wollt, dann wären wir über einen Geldbeitrag sehr dankbar.',
    ],
    link: { slug: '/contribute', text: 'GESCHENK' },
  },
  {
    paragraphs: [
      'La tua presenza è già un dono!',
      'Tuttavia, se desideri onorarci con un regalo, ti saremmo molto grati per un contributo finanziario. GRAZIE!',
    ],
    link: { slug: '/contribute', text: 'CONTRIBUISCI' },
  },
];

export const contactBanner: Array<BannerProps> = [
  {
    headline: 'We look forward to celebrating with you!',
    icon: false,
    paragraphs: [
      'If you have any special requests, additional comments or unanswered questions, please contact us at dummy-email@gmail.com or send us a message on WhatsApp.',
      'Thanks! ❤',
    ],
  },
  {
    headline: 'Wir freuen uns darauf, mit Euch zu feiern!',
    icon: false,
    paragraphs: [
      'Sollten Ihr besondere Wünsche, weitere Anmerkungen oder unbeantwortete Fragen haben, könnt Ihr eifach ein E-Mail unter dummy-email@gmail.com schicken oder eine Nachricht auf WhatsApp senden.',
      'Vielen Dank! ❤',
    ],
  },
  {
    headline: `Non vediamo l'ora di festeggiare con te!`,
    icon: false,
    paragraphs: [
      `Se hai richieste speciali, commenti aggiuntivi o domande senza risposta, mandateci una e-mail a dummy-email@gmail.com o un messaggio su WhatsApp.`,
      'Grazie mille! ❤',
    ],
  },
];

export const rsvpContactDetails: Array<RsvpContactDetailsProps> = [
  {
    title: 'Contact Details',
    headerText: 'of',
    form: {
      name: 'Name',
      surname: 'Surname',
      email: { label: 'Email', placeholder: 'james@gmail.com' },
      peopleNumber: {
        text: 'How many of you will attend?',
        subtext: 'Attention: that should also include yourself',
      },
      date: {
        label: 'Date of arrival',
        options: {
          base: 'Choose an option',
          friday: 'Friday, 28th July',
          saturday: 'Saturday, 29th July',
        },
      },
    },
    attendance: {
      attending: 'Will attend!',
      notAttending: 'Will not attend!',
    },
    button: { text: 'NEXT' },
  },
  {
    title: 'Kontaktdetails',
    headerText: 'von',
    form: {
      name: 'Name',
      surname: 'Nachname',
      email: { label: 'Email', placeholder: 'james@gmail.com' },
      peopleNumber: {
        text: 'Wie viele von Ihnen werden teilnehmen?',
        subtext: 'Achtung: das sollte auch du selbst einschließen',
      },
      date: {
        label: 'Anreise am:',
        options: {
          base: 'Wähle eine Option',
          friday: 'Freitag, 28. Juli',
          saturday: 'Samstag, 29. Juli',
        },
      },
    },
    attendance: {
      attending: 'Wir kommen',
      notAttending: 'Wir kommen nicht',
    },
    button: { text: 'NEXT' },
  },
  {
    title: 'Contatti',
    headerText: 'di',
    form: {
      name: 'Nome',
      surname: 'Cognome',
      email: { label: 'Email', placeholder: 'james@gmail.com' },
      peopleNumber: {
        text: 'Quanti di voi parteciperanno?',
        subtext: 'Attenzione: includi anche te stesso',
      },
      date: {
        label: 'Data di arrivo',
        options: {
          base: 'Scegli un opzione',
          friday: 'Venerdì, 28 Luglio',
          saturday: 'Sabato, 29 Luglio',
        },
      },
    },
    attendance: {
      attending: 'Parteciperò',
      notAttending: 'Non parteciperò',
    },
    button: { text: 'NEXT' },
  },
];

export const rsvpGuestsDetails: Array<RsvpGuestsDetailsProps> = [
  {
    title: 'Guests Details',
    headerText: 'of',
    guest: 'Guest',
    form: {
      name: 'Full Name',
      food: {
        label: 'I would like to eat...',
        options: {
          base: 'Choose an option',
          meat: 'Meat 🍖',
          fish: 'Fish 🐟',
          vegan: 'Vegan 🥗',
        },
      },
      allergy: {
        label: 'I am allergic/intollerant to...',
        options: {
          gluten: 'Gluten 🥨',
          eggs: 'Eggs 🍳',
          shellfish: 'Shellfish 🦐',
          nuts: 'Nuts 🥜',
          milk: 'Lactose 🥛',
        },
      },
    },
    button: { text: 'NEXT' },
  },
  {
    title: 'Gästedetails',
    headerText: 'von',
    guest: 'Gast',
    form: {
      name: 'Vollständiger Name',
      food: {
        label: 'Ich würde gerne essen...',
        options: {
          base: 'Wähle eine Option',
          meat: 'Fleisch 🍖',
          fish: 'Fisch 🐟',
          vegan: 'Vegan 🥗',
        },
      },
      allergy: {
        label: 'Ich bin allergisch/unverträglich gegen ...',
        options: {
          gluten: 'Gluten 🥨',
          eggs: 'Eier 🍳',
          shellfish: 'Schalentier 🦐',
          nuts: 'Nüsse 🥜',
          milk: 'Laktose 🥛',
        },
      },
    },
    button: { text: 'NEXT' },
  },
  {
    title: 'Dettagli ospiti',
    headerText: 'di',
    guest: 'Ospite',
    form: {
      name: 'Nome completo',
      food: {
        label: 'Vorrei mangiare...',
        options: {
          base: 'Scegli un opzione',
          meat: 'Carne 🍖',
          fish: 'Pesce 🐟',
          vegan: 'Vegano 🥗',
        },
      },
      allergy: {
        label: 'Sono allergico/intollerante a...',
        options: {
          gluten: 'Glutine 🥨',
          eggs: 'Uova 🍳',
          shellfish: 'Crostacei 🦐',
          nuts: 'Noccioline 🥜',
          milk: 'Lattosio 🥛',
        },
      },
    },
    button: { text: 'NEXT' },
  },
];

export const rsvpOtherDetails: Array<RsvpOtherDetailsProps> = [
  {
    title: 'Last step... hurra! 🙌',
    thanks: 'Thanks for doing that!',
    headerText: 'of',
    texts: [
      'Did we forget something you feel is important? Or, do you just want to say "Hi"?',
      'Use the textarea below. We will read it, promised!',
    ],
    button: { text: 'SUBMIT', pending: 'PROCESSING...' },
  },
  {
    title: 'Letzter Schritt ... hurra! 🙌',
    thanks: 'Vielen Dank schon mal!',
    headerText: 'von',
    texts: [
      'Haben wir etwas vergessen, das du für wichtig haltest? Oder möchtest du einfach nur „Hallo“ sagen?',
      'Verwende bitte das Textfeld unten. Wir werden es lesen, versprochen!',
    ],
    button: { text: 'ABSCHICKEN', pending: 'WIRD BEARBEITET...' },
  },
  {
    title: 'Ultimo step... evviva! 🙌',
    thanks: "Grazie per aver completato l'RSVP!",
    headerText: 'di',
    texts: [
      'Abbiamo dimenticato qualcosa che ritieni importante? Oppure vuoi solo mandarci un saluto?',
      "Usa l'area di testo qui sotto. La leggeremo, promesso!",
    ],
    button: { text: 'INVIA', pending: 'IN LAVORAZIONE...' },
  },
];

export const rsvpThankYou: Array<RsvpThankYouProps> = [
  {
    title: 'Thank you!',
    texts: [
      'Do you have any further questions or concerns?',
      'Drop us an email at dummy-email@gmail.com',
    ],
  },
  {
    title: 'Vielen Dank!',
    texts: [
      'Hast du weitere Fragen oder Anmerkungen?',
      'Schreib uns eine E-Mail an dummy-email@gmail.com',
    ],
  },
  {
    title: 'Grazie mille!',
    texts: [
      'Hai altre domande o dubbi?',
      'Mandaci una mail a dummy-email@gmail.com',
    ],
  },
];

export const meatTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'meat2.jpg', alt: 'Meat menu' },
    tile: {
      title: 'Meat',
      texts: [
        'Braised shoulder clod of Carinthian beef with colourful vegetable medley and dumplings',
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'meat2.jpg', alt: 'Meat menu' },
    tile: {
      title: 'Fleisch',
      texts: [
        'Geschmortes Schulterscherzel vom Kärntner Rind mit buntem Gemüseallerlei und Serviettenknödel',
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'meat2.jpg', alt: 'Meat menu' },
    tile: {
      title: 'Carne',
      texts: [
        'Spezzatino di spalla di manzo della Carinzia in varietà di verdure e knödel',
      ],
    },
  },
];

export const veganTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'vegan.jpg', alt: 'Vegan menu' },
    tile: {
      title: 'Vegan',
      texts: ['Vegan cheese ravioli (gluten-free!) with chives and leaf salad'],
    },
  },
  {
    direction: 'front',
    image: { src: 'vegan.jpg', alt: 'Vegan menu' },
    tile: {
      title: 'Vegan',
      texts: [
        'Kärntner Kasnudeln (und auch glutenfrei!) mit Schnittlauch und Blattsalat',
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'vegan.jpg', alt: 'Vegan menu' },
    tile: {
      title: 'Vegan',
      texts: [
        'Ravioli al formaggio vegano (senza glutine!) con erba cipollina e insalata a foglie',
      ],
    },
  },
];

export const fishTile: Array<TileProps> = [
  {
    direction: 'back',
    image: { src: 'fish.jpg', alt: 'Fish menu' },
    tile: {
      title: 'Fish',
      texts: [
        'Locally produced trout fillet from Lavanttal on truffle mashed potatoes with a colourful medley of vegetables',
      ],
    },
  },
  {
    direction: 'back',
    image: { src: 'fish.jpg', alt: 'Fish menu' },
    tile: {
      title: 'Fisch',
      texts: [
        'Lavanttaler Lachsforellenfilet auf getrüffeltem Kartoffelpüree mit buntem Gemüse-Allerlei',
      ],
    },
  },
  {
    direction: 'back',
    image: { src: 'fish.jpg', alt: 'Fish menu' },
    tile: {
      title: 'Pesce',
      texts: [
        'Filetto di trota del Lavantall su purè di patate al tartufo in varietà di verdure',
      ],
    },
  },
];

export const timeline = {
  src: 'timeline.JPG',
};

export const obdachTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'obdach.jpg', alt: 'Obdach region' },
    tile: {
      title: 'Obdach / St. Wolfgang',
      texts: [
        'We are staying in the region for a few days and would be happy to do some hiking with you and show you the area we have been going to for years.',
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'obdach.jpg', alt: 'Obdach region' },
    tile: {
      title: 'Obdach / St. Wolfgang',
      texts: [
        'Wir bleiben einige Tage noch in der Region und würden uns freuen, einige Wanderungen mit Euch zu unternehmen und euch die Gegend zu zeigen, in die wir seit Jahren fahren.',
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'obdach.jpg', alt: 'Obdach region' },
    tile: {
      title: 'Obdach / St. Wolfgang',
      texts: [
        'Ci fermeremo nella regione per qualche giorno e saremo felici di fare qualche escursione con voi e mostrarvi la zona che frequentiamo da anni.',
      ],
    },
  },
];

export const styriaTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'styria.jpg', alt: 'Styria' },
    tile: {
      title: 'Styria',
      subtitle: 'The green heart of Austria',
      texts: [
        'As the name suggests, the region stuns those who travel through for its breath-taking natural landscapes.',
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'styria.jpg', alt: 'Styria' },
    tile: {
      title: 'Steiermark',
      texts: [
        'Wie der Name schon sagt, beeindruckt die Region ihre Reisenden durch ihre atemberaubenden Naturlandschaften.',
      ],
    },
  },
  {
    direction: 'front',
    image: { src: 'styria.jpg', alt: 'Styria' },
    tile: {
      title: 'Stiria',
      texts: [
        'Come suggerisce il nome, la regione stupisce chi la attraversa per i suoi paesaggi naturali mozzafiato. ',
      ],
    },
  },
];

export const wolfsbergTile: Array<TileProps> = [
  {
    direction: 'back',
    image: { src: 'wolfsberg.jpg', alt: 'Carinthia region' },
    tile: {
      title: 'Carinthia',
      texts: ['The region is known for its lakes, mountains, and vineyards.'],
    },
  },
  {
    direction: 'back',
    image: { src: 'wolfsberg.jpg', alt: 'Carinthia region' },
    tile: {
      title: 'Kärnten',
      texts: ['Die Region ist bekannt für ihre Seen, Berge und Weinberge.'],
    },
  },
  {
    direction: 'back',
    image: { src: 'wolfsberg.jpg', alt: 'Carinthia region' },
    tile: {
      title: 'Carinzia',
      texts: [
        'La regione è nota per i suoi laghi, le sue montagne e i suoi vigneti.',
      ],
    },
  },
];
