import type { ContributionProps } from '~/components/Contribution';
import type { FooterProps } from '~/components/Footer';
import type { HeaderProps } from '~/components/Header';
import type { InfoProps } from '~/components/Info';
import type { StageProps } from '~/components/Stage';
import type { TileProps } from '~/components/Tile';
import type { LanguageProps } from '~/components/Language';
import type { BannerProps } from '~/components/Banner';
import type { PhotosProps } from '~/components/Photos';

// helper function
export const getIndex = (language: string): number => {
  switch (language) {
    case 'en':
      return 0;
    case 'de':
      return 1;
    case 'it':
      return 2;
    default:
      return 0;
  }
};

// static
const ceremonyDate: Date = new Date(Date.UTC(2023, 6, 29, 11, 0));
const partyDate: Date = new Date(Date.UTC(2023, 6, 29, 14, 0));
const languageOptions: LanguageProps = {
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

export const photos: PhotosProps = {
  photos: [
    { src: 'squared-1.JPG' },
    { src: 'squared-2.JPG' },
    { src: 'squared-3.JPG' },
    { src: 'squared-4.JPG' },
    { src: 'squared-5.JPG' },
    { src: 'squared-6.JPG' },
    { src: 'squared-7.JPG' },
    { src: 'squared-8.JPG' },
    { src: 'squared-9.JPG' },
    { src: 'squared-10.JPG' },
    { src: 'squared-11.JPG' },
    { src: 'squared-13.JPG' },
  ],
};

export const header: Array<HeaderProps> = [
  {
    name: 'Laura & Giorgio',
    languageOptions: languageOptions.options,
    links: [
      { text: 'Info', slug: '/info', type: 'link' },
      { text: 'Reservation', slug: '/reservation', type: 'link' },
      { text: 'Contact', slug: '/contact', type: 'link' },
      { text: 'Good to know', slug: '/goodtoknow', type: 'link' },
      { text: 'RSVP', slug: '/rsvp/contactdetails', type: 'button' },
      { text: 'CONTRIBUTE', slug: '/contribute', type: 'button' },
    ],
  },
  {
    name: 'Laura & Giorgio',
    languageOptions: languageOptions.options,
    links: [
      { text: 'Info', slug: 'info', type: 'link' },
      { text: 'Reservierung', slug: 'reservation', type: 'link' },
      { text: 'Kontact', slug: 'contact', type: 'link' },
      { text: 'Gut zu wissen', slug: 'goodtoknow', type: 'link' },
      { text: 'RSVP', slug: '/rsvp/contactdetails', type: 'button' },
      { text: 'DAZU BEITRAGEN', slug: 'contribute', type: 'button' },
    ],
  },
  {
    name: 'Laura & Giorgio',
    languageOptions: languageOptions.options,
    links: [
      { text: 'Info', slug: 'info', type: 'link' },
      { text: 'Prenota', slug: 'reservation', type: 'link' },
      { text: 'Contattaci', slug: 'contact', type: 'link' },
      { text: 'Buono a sapersi', slug: 'goodtoknow', type: 'link' },
      { text: 'RSVP', slug: '/rsvp/contactdetails', type: 'button' },
      { text: 'CONTRIBUISCI', slug: 'contribute', type: 'button' },
    ],
  },
];

export const stage: Array<StageProps> = [
  {
    image: { src: 'main.JPG', alt: 'Laura & Giorgio' },
    title: 'Laura & Giorgio',
    subtitle: 'are getting married',
    date: ceremonyDate,
    link: { text: 'RSVP', slug: '/rsvp/contactdetails' },
  },
  {
    image: { src: 'main.JPG', alt: 'Laura & Giorgio' },
    title: 'Laura & Giorgio',
    subtitle: 'werden heiraten',
    date: ceremonyDate,
    link: { text: 'RSVP', slug: '/rsvp/contactdetails' },
  },
  {
    image: { src: 'main.JPG', alt: 'Laura & Giorgio' },
    title: 'Laura & Giorgio',
    subtitle: 'si sposano',
    date: ceremonyDate,
    link: { text: 'RSVP', slug: '/rsvp/contactdetails' },
  },
];

export const homeTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'main-tile.JPG', alt: 'Hands' },
    tile: {
      title: 'Our story',
      subtitle: 'For those who did not know',
      text: 'We met at Uni, in the UK. Zaira, a mutual friend, told Giorgio about Laura suggesting to meet. She thought they would be perfect for each other. So, when Laura walked past Giorgio in the campus library, he seized the moment and approached her in proper stalker-mode: “Hi, you are Laura, aren’t you?”. Fast forward 8 years, 1 (wonderful) baby girl, 2 countries, countless yoga sessions, occasional arguments and hundreds of books read and discussed, we are now getting married! Join us to celebrate our big day together!',
    },
  },
  {
    direction: 'front',
    image: { src: 'main-tile.JPG', alt: 'Hands' },
    tile: {
      title: 'Unsere Geschichte',
      subtitle: 'Für diejenigen, die es nicht wussten',
      text: 'Wir trafen uns an der Uni in Großbritannien. Zaira, eine gemeinsame Freundin, erzählte Giorgio von Lauras Vorschlag, sich zu treffen. Sie dachte, sie würden perfekt zueinander passen. Als Laura also in der Campus-Bibliothek an Giorgio vorbeilief, nutzte er den Moment und kam im richtigen Stalker-Modus auf sie zu: „Hi, du bist Laura, nicht wahr?“. Fast forward 8 Jahre, 1 (wunderbares) kleines Mädchen, 2 Länder, unzählige Yoga-Sitzungen, gelegentliche Streitereien und Hunderte von gelesenen und diskutierten Büchern, wir heiraten jetzt! Feiern Sie mit uns gemeinsam unseren großen Tag!',
    },
  },
  {
    direction: 'front',
    image: { src: 'main-tile.JPG', alt: 'Hands' },
    tile: {
      title: 'La nostra storia',
      subtitle: 'Per chi non lo sapesse',
      text: `Ci siamo incontrati all'università di Cranfield, in Inghilterra. Zaira, un'amica in comune, consigliò a Giorgio di chiedere a Laura di uscire con lui, era convinta che sarebbero stati perfetti l'uno per l'altra. Così, quando Laura è passata accanto a Giorgio nella biblioteca del campus, lui colse l'attimo e le si avvicinò, con atteggiamento da stalker, dicendo: "Ciao, tu sei Laura, vero?". Adesso, dopo 8 anni, 1 (meravigliosa) bambina, 2 paesi, innumerevoli sessioni di yoga, qualche litigata e centinaia di libri letti e discussi, ci sposiamo! Unisciti a noi per festeggiare insieme!`,
    },
  },
];

export const transportationTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'transportation.jpg', alt: 'Toy car' },
    tile: {
      title: 'Transportation',
      subtitle: "Don't worry about anything",
      text: 'We have arranged transportation for guests from the hotel to the church and later to the reception venue. To reserve a seat, please let us know how many of you are coming with your RSVP.',
    },
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
  {
    direction: 'front',
    image: { src: 'transportation.jpg', alt: 'Toy car' },
    tile: {
      title: 'Transport',
      subtitle: 'Mach dir keine Sorgen',
      text: 'Wir haben den Transport für die Gäste vom Hotel zur Kirche und später zum Veranstaltungsort arrangiert. Um einen Sitzplatz zu reservieren, lassen Sie uns bitte wissen, dass Sie mit Ihrer RSVP kommen.',
    },
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
  {
    direction: 'front',
    image: { src: 'transportation.jpg', alt: 'Toy car' },
    tile: {
      title: 'Trasporto',
      subtitle: 'Non preoccuparti di niente',
      text: `Organizzeremo il trasporto degli ospiti dall'hotel alla chiesa e successivamente al luogo del ricevimento, tramite pullman. Per prenotare il vostro posto, completa l'RSVP al più presto e facci sapere quanti sarete.`,
    },
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
];

export const accomodationTile: Array<TileProps> = [
  {
    direction: 'back',
    image: { src: 'hotel.jpg', alt: 'Hotel Room' },
    tile: {
      title: 'Accommodation',
      subtitle: 'Cozy rooms for your stay',
      text: 'Wolfsberg offers various accommodation options. However, for our guests, we have identified two options that we consider to be appropriate, Hotel Hecher and Pension Ölberger. We also discussed and agreed on a special price with Hotel Hecher.',
    },
    link: { slug: '/accomodation', text: 'BOOK' },
  },
  {
    direction: 'back',
    image: { src: 'hotel.jpg', alt: 'Hotel Room' },
    tile: {
      title: 'Unterkunft',
      subtitle: 'Gemütliche Zimmer für Ihren Aufenthalt',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio.',
    },
    link: { slug: '/accomodation', text: 'BOOK' },
  },
  {
    direction: 'back',
    image: { src: 'hotel.jpg', alt: 'Hotel Room' },
    tile: {
      title: 'Alloggio',
      subtitle: 'Camere accoglienti per il vostro soggiorno',
      text: `Wolfsberg offre varie possibilità di pernottamento. Tuttavia, per i nostri ospiti, abbiamo individuato due opzioni che riteniamo essere opportune, l'hotel Hecher e la pensione Ölberger. Con l'hotel Hecher abbiamo anche discusso e concordato un prezzo speciale.`,
    },
    link: { slug: '/accomodation', text: 'BOOK' },
  },
];

export const info: Array<InfoProps> = [
  {
    headline: 'Ceremony & Celebration',
    items: [
      {
        icon: 'calendar',
        title: 'Our wedding day',
        dateTime: ceremonyDate,
        text: 'It would be absolutely great to have you there! Join us!',
      },
      {
        icon: 'church',
        title: 'Ceremony',
        dateTime: ceremonyDate,
        text: 'St. Wolfgang church - Kienberg, 8742 St. Wolfgang, Austria',
      },
      {
        icon: 'party',
        title: 'Reception',
        dateTime: partyDate,
        text: 'Wolfsberg Castle - Schloßstraße, 9400 Wolfsberg, Austria',
      },
    ],
  },
  {
    headline: 'Zeremonie & Feier',
    items: [
      {
        icon: 'calendar',
        title: 'Unser Hochzeitstag',
        dateTime: ceremonyDate,
        text: 'Es wäre absolut toll, dich dabei zu haben! Begleiten Sie uns!',
      },
      {
        icon: 'church',
        title: 'Zeremonie',
        dateTime: ceremonyDate,
        text: 'St. Wolfgang Kirche - Kienberg, 8742 St. Wolfgang, Österreich',
      },
      {
        icon: 'party',
        title: 'Rezeption',
        dateTime: partyDate,
        text: 'Schloß Wolfsberg - Schloßstraße, 9400 Wolfsberg, Österreich',
      },
    ],
  },
  {
    headline: 'Cerimonia & Ricevimento',
    items: [
      {
        icon: 'calendar',
        title: 'Il giorno del nostro matrimonio',
        dateTime: ceremonyDate,
        text: 'Sarebbe assolutamente fantastico averti lì! Unisciti a noi!',
      },
      {
        icon: 'church',
        title: 'Cerimonia',
        dateTime: ceremonyDate,
        text: 'Chiesa di St. Wolfgang - Kienberg, 8742 St. Wolfgang, Austria',
      },
      {
        icon: 'party',
        title: 'Ricevimento',
        dateTime: partyDate,
        text: 'Castello Wolfsberg - Schloßstraße, 9400 Wolfsberg, Austria',
      },
    ],
  },
];

export const contribution: Array<ContributionProps> = [
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
    headline: 'An diejenigen, die ein Geschenk in Betracht ziehen!',
    paragraphs: [
      'Ihre Anwesenheit ist präsent genug!',
      'Sollten Sie uns jedoch mit einem Geschenk beehren wollen, wären wir für einen finanziellen Beitrag sehr dankbar.',
      'Unsere Bankverbindung finden Sie in Ihrer Hochzeitseinladung. Jeder Betrag ist willkommen.',
      'DANKE SCHÖN! 🥰',
    ],
  },
  {
    headline: 'Per chi sta pensando ad un regalo!',
    paragraphs: [
      'La tua presenza è già un dono!',
      'Tuttavia, se desideri onorarci con un regalo, ti saremmo molto grati per un contributo finanziario.',
      'Puoi trovare le nostre coordinate bancarie nel tuo invito di nozze. Qualsiasi importo è apprezzato.',
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
      text: 'Centrally located with comfortable rooms. 10 min walk or 4 min drive from the reception venue. Within walking distance from the central station in Wolfsberg. Special price has been agreed for our guests. Please book via email and quote “Hochzeit Purnell” in your booking. Please book as soon as possible.',
    },
    externalLink: {
      href: 'https://www.hecher.at/',
      text: 'VISIT SITE',
    },
  },
  {
    direction: 'front',
    image: { src: 'hecher-logo.jpg', alt: 'Hotel Hecher Logo' },
    tile: {
      title: 'Hotel Hecher',
      subtitle: 'Empfohlen für diejenigen, die 2 Nächte bleiben',
      text: 'Zentral gelegen mit komfortablen Zimmern. 10 Minuten zu Fuß oder 4 Minuten Fahrt von der Rezeption entfernt. Nur wenige Gehminuten vom Hauptbahnhof in Wolfsberg entfernt. Für unsere Gäste wurde ein Sonderpreis vereinbart. Bitte buchen Sie per E-Mail und geben Sie bei Ihrer Buchung „Hochzeit Purnell“ an. Bitte buchen Sie so bald wie möglich.',
    },
    externalLink: {
      href: 'https://www.hecher.at/',
      text: 'BESUCHEN SIE DIE WEBSITE',
    },
  },
  {
    direction: 'front',
    image: { src: 'hecher-logo.jpg', alt: 'Hotel Hecher Logo' },
    tile: {
      title: 'Hotel Hecher',
      subtitle: 'Consigliato per chi soggiorna 2 notti',
      text: 'Situato in posizione centrale con camere confortevoli. 10 minuti a piedi o 4 minuti in auto dal luogo del ricevimento. A pochi passi dalla stazione centrale di Wolfsberg. Per i nostri ospiti è stato concordato un prezzo speciale. Si prega di prenotare via e-mail e citare "Hochzeit Purnell" nella prenotazione. Si prega di prenotare il prima possibile.',
    },
    externalLink: {
      href: 'https://www.hecher.at/',
      text: 'VAI AL SITO',
    },
  },
];

export const pensionTile: Array<TileProps> = [
  {
    direction: 'back',
    image: { src: 'oelberger-logo.png', alt: 'Gasthof Oelberger Logo' },
    tile: {
      title: 'Pension Ölberger',
      subtitle: 'Reccomended for those staying 1 night only',
      text: 'Simple, inexpensive rooms. Recommended for those staying one night. Car needed to reach.',
    },
    externalLink: {
      href: 'https://www.gasthof-oelberger.at/',
      text: 'VISIT SITE',
    },
  },
  {
    direction: 'back',
    image: { src: 'oelberger-logo.png', alt: 'Gasthof Oelberger Logo' },
    tile: {
      title: 'Pension Ölberger',
      subtitle: 'Reccomended for those staying 1 night only',
      text: 'Einfache, preiswerte Zimmer. Empfohlen für diejenigen, die eine Nacht bleiben. Auto benötigt, um zu erreichen.',
    },
    externalLink: {
      href: 'https://www.gasthof-oelberger.at/',
      text: 'BESUCHEN SIE DIE WEBSITE',
    },
  },
  {
    direction: 'back',
    image: { src: 'oelberger-logo.png', alt: 'Gasthof Oelberger Logo' },
    tile: {
      title: 'Pension Ölberger',
      subtitle: 'Reccomended for those staying 1 night only',
      text: `Camere semplici ed economiche. Consigliato per chi soggiorna una notte soltanto. L'automobile è necessaria per raggiungere la pensione.`,
    },
    externalLink: {
      href: 'https://www.gasthof-oelberger.at/',
      text: 'VAI AL SITO',
    },
  },
];

export const contributionBanner: Array<BannerProps> = [
  {
    paragraph:
      'Your presence is present enough! However, if you wish to honour us with a gift, we would be very grateful for a financial contribution.',
    link: { slug: '/contribute', text: 'CONTRIBUTE' },
  },
  {
    paragraph:
      'Ihre Präsenz ist präsent genug! Wenn Sie uns jedoch mit einem Geschenk beehren möchten, würden wir uns über einen finanziellen Beitrag sehr freuen.',
    link: { slug: '/contribute', text: 'BEITRAGEN' },
  },
  {
    paragraph:
      'La tua presenza è già un dono! Tuttavia, se desideri onorarci con un regalo, ti saremmo molto grati per un contributo finanziario. GRAZIE!',
    link: { slug: '/contribute', text: 'CONTRIBUISCI' },
  },
];

export const contactBanner: Array<BannerProps> = [
  {
    headline: 'We look forward to celebrating with you!',
    icon: false,
    paragraph:
      'Please, click on RSVP and follow the steps. Let us know how many of you are going to join us. Should you have any special requirements or further comments, you will be able to add them at the end of the form. Thank you!',
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
  {
    headline: 'Wir freuen uns darauf, mit Ihnen zu feiern!',
    icon: false,
    paragraph:
      'Bitte klicken Sie auf RSVP und folgen Sie den Schritten. Teilen Sie uns mit, wie viele von Ihnen sich uns anschließen werden. Sollten Sie besondere Anforderungen oder weitere Anmerkungen haben, können Sie diese am Ende des Formulars hinzufügen. Danke dir!',
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
  {
    headline: `Non vediamo l'ora di festeggiare con te!`,
    icon: false,
    paragraph: `Per favore, clicca su RSVP e segui i passaggi. Facci sapere quanti sarete. Tu avessi esigenze particolari o ulteriori commenti, potrai aggiungerli alla fine dell'RSVP. Grazie!`,
    link: { slug: '/rsvp/contactdetails', text: 'RSVP' },
  },
];

export const rsvpContactDetails: Array<any> = [
  {
    title: 'Contact Details',
    form: {
      name: 'Name',
      surname: 'Surname',
      email: { label: 'Email', placeholder: 'james@gmail.com' },
      car: 'Will you and your family/group have a car?',
      peopleNumber: {
        text: 'How many people are you completing the RSVP for?',
        subtext: 'Attention: that should also include yourself',
        labelAdults: '12+ years old',
        labelKids: '6-to-12 years old',
        labelBabies: '0-to-6 years old',
      },
    },
    button: { text: 'NEXT' },
  },
  {
    title: 'Kontaktdetails',
    form: {
      name: 'Name',
      surname: 'Nachname',
      email: { label: 'Email', placeholder: 'james@gmail.com' },
      car: 'Werdest du und deine Familie/Gruppe ein Auto haben?',
      peopleNumber: {
        text: 'Für wie viele Personen füllst du die RSVP aus?',
        subtext: 'Achtung: das sollte auch du selbst einschließen',
        labelAdults: '12+ Jahre alt',
        labelKids: '6-to-12 Jahre alt',
        labelBabies: '0-to-6 Jahre alt',
      },
    },
    button: { text: 'NEXT' },
  },
  {
    title: 'Contatti',
    form: {
      name: 'Nome',
      surname: 'Cognome',
      email: { label: 'Email', placeholder: 'james@gmail.com' },
      car: 'Tu e la tua famiglia/gruppo avrete una macchina?',
      peopleNumber: {
        text: "Per quante persone stai completando l'RSVP?",
        subtext: 'Attenzione: includi anche te stesso',
        labelAdults: '12+ anni',
        labelKids: '6-to-12 anni',
        labelBabies: '0-to-6 anni',
      },
    },
    button: { text: 'NEXT' },
  },
];

export const rsvpGuestsDetails: Array<any> = [
  {
    title: 'Guests Details',
    form: {
      name: 'Full Name',
      date: {
        label: 'Date of arrival',
        options: {
          base: 'Choose an option',
          friday: 'Friday, 28th July',
          saturday: 'Saturday, 29th July',
        },
      },
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
          milk: 'Milk 🥛',
        },
      },
    },
    button: { text: 'NEXT' },
  },
  {
    title: 'Gästedetails',
    form: {
      name: 'Vollständiger Name',
      date: {
        label: 'Datum der Ankunft',
        options: {
          base: 'Wähle eine Option',
          friday: 'Freitag, 28. Juli',
          saturday: 'Samstag, 29. Juli',
        },
      },
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
          shellfish: 'Schaltier 🦐',
          nuts: 'Nüsse 🥜',
          milk: 'Milch 🥛',
        },
      },
    },
    button: { text: 'NEXT' },
  },
  {
    title: 'Dettagli ospiti',
    form: {
      name: 'Nome completo',
      date: {
        label: 'Data di arrivo',
        options: {
          base: 'Scegli un opzione',
          friday: 'Venerdì, 28 Luglio',
          saturday: 'Sabato, 29 Luglio',
        },
      },
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
          milk: 'Latte 🥛',
        },
      },
    },
    button: { text: 'NEXT' },
  },
];

export const rsvpOtherDetails: Array<any> = [
  {
    title: 'Last step... hurra! 🙌',
    thanks: 'Thanks for doing that!',
    texts: [
      'Did we forget something you feel is important? Or, do you just want to say "Hi"?',
      'Use the textarea below. We will read it, promised!',
    ],
    button: { text: 'SUBMIT', pending: 'PROCESSING...' },
  },
  {
    title: 'Letzter Schritt ... hurra! 🙌',
    thanks: 'Danke dafür!',
    texts: [
      'Haben wir etwas vergessen, das du für wichtig haltest? Oder möchtest du einfach nur „Hallo“ sagen?',
      'Verwenden Sie das Textfeld unten. Wir werden es lesen, versprochen!',
    ],
    button: { text: 'EINREICHEN', pending: 'WIRD BEARBEITET...' },
  },
  {
    title: 'Ultimo step... evviva! 🙌',
    thanks: "Grazie per aver completato l'RSVP!",
    texts: [
      'Abbiamo dimenticato qualcosa che ritieni importante? Oppure vuoi solo mandarci un saluto?',
      "Usa l'area di testo qui sotto. La leggeremo, promesso!",
    ],
    button: { text: 'INVIA', pending: 'IN LAVORAZIONE...' },
  },
];
