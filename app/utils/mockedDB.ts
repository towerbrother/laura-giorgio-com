import type { ContributionProps } from '~/components/molecules/Contribution';
import type { FooterProps } from '~/components/molecules/Footer';
import type { HeaderProps } from '~/components/molecules/Header';
import type { InfoProps } from '~/components/molecules/Info';
import type { StageProps } from '~/components/molecules/Stage';
import type { TileProps } from '~/components/molecules/Tile';
import type { LanguageProps } from '~/components/molecules/Language';
import type { BannerProps } from '~/components/molecules/Banner';
import type { PhotosProps } from '~/components/molecules/Photos';

// helper function
export const getIndex = (lang: string): number => {
  switch (lang) {
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

// data
export const footer: FooterProps = {
  name: 'Laura & Giorgio',
};

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

const languageOptions: LanguageProps = {
  options: ['en', 'de', 'it'],
};

export const header: Array<HeaderProps> = [
  {
    name: 'Laura & Giorgio',
    languageOptions: languageOptions.options,
    links: [
      { text: 'Info', slug: 'info', type: 'link' },
      { text: 'Reservation', slug: 'reservation', type: 'link' },
      { text: 'Contact', slug: 'contact', type: 'link' },
      { text: 'Good to know', slug: 'goodtoknow', type: 'link' },
      { text: 'RSVP', slug: 'rsvp', type: 'button' },
      { text: 'CONTRIBUTE', slug: 'contribute', type: 'button' },
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
      { text: 'RSVP', slug: 'rsvp', type: 'button' },
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
      { text: 'RSVP', slug: 'rsvp', type: 'button' },
      { text: 'CONTRIBUISCI', slug: 'contribute', type: 'button' },
    ],
  },
];

export const stage: Array<StageProps> = [
  {
    image: { src: 'main.JPG', alt: 'Laura & Giorgio' },
    title: 'Laura & Giorgio',
    subtitle: 'are getting married',
    date: new Date(2023, 6, 29, 13),
    link: { text: 'RSVP', slug: '/rsvp' },
  },
  {
    image: { src: 'main.JPG', alt: 'Laura & Giorgio' },
    title: 'Laura & Giorgio',
    subtitle: 'werden heiraten',
    date: new Date(2023, 6, 29, 13),
    link: { text: 'RSVP', slug: '/rsvp' },
  },
  {
    image: { src: 'main.JPG', alt: 'Laura & Giorgio' },
    title: 'Laura & Giorgio',
    subtitle: 'si sposano',
    date: new Date(2023, 6, 29, 13),
    link: { text: 'RSVP', slug: '/rsvp' },
  },
];

export const homeTile: Array<TileProps> = [
  {
    direction: 'front',
    image: { src: 'main-tile.JPG', alt: 'Hands' },
    tile: {
      title: 'Our story',
      subtitle: 'For those who did not know',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
    },
  },
  {
    direction: 'front',
    image: { src: 'main-tile.JPG', alt: 'Hands' },
    tile: {
      title: 'Unsere Geschichte',
      subtitle: 'Für diejenigen, die es nicht wussten',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
    },
  },
  {
    direction: 'front',
    image: { src: 'main-tile.JPG', alt: 'Hands' },
    tile: {
      title: 'La nostra storia',
      subtitle: 'Per chi non lo sapesse',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
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
      text: 'We have arranged transportation for guests from the hotel to the church and later to the reception venue. To reserve a seat, please let us know with your RSVP.',
    },
    link: { slug: '/rsvp', text: 'RSVP' },
  },
  {
    direction: 'front',
    image: { src: 'transportation.jpg', alt: 'Toy car' },
    tile: {
      title: 'Transport',
      subtitle: 'Mach dir keine Sorgen',
      text: 'Wir haben den Transport für die Gäste vom Hotel zur Kirche und später zum Veranstaltungsort arrangiert. Um einen Sitzplatz zu reservieren, teilen Sie uns dies bitte mit Ihrer RSVP mit.',
    },
    link: { slug: '/rsvp', text: 'RSVP' },
  },
  {
    direction: 'front',
    image: { src: 'transportation.jpg', alt: 'Toy car' },
    tile: {
      title: 'Trasporto',
      subtitle: 'Non preoccuparti di niente',
      text: `Abbiamo organizzato il trasporto degli ospiti dall'hotel alla chiesa e successivamente al luogo del ricevimento. Per prenotare un posto, fatecelo sapere con il vostro RSVP.`,
    },
    link: { slug: '/rsvp', text: 'RSVP' },
  },
];

export const accomodationTile: Array<TileProps> = [
  {
    direction: 'back',
    image: { src: 'hotel.jpg', alt: 'Hotel Room' },
    tile: {
      title: 'Accommodation',
      subtitle: 'Cozy rooms for your stay',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio.',
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio.',
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
        dateTime: new Date('2023-07-29'),
        text: 'It would be absolutely great to have you there! Join us!',
      },
      {
        icon: 'church',
        title: 'Ceremony',
        dateTime: new Date('2023-07-29T13:00:00'),
        text: 'St. Wolfgang church - Kienberg, 8742 St. Wolfgang, Austria',
      },
      {
        icon: 'party',
        title: 'Reception',
        dateTime: new Date('2023-07-29T16:30:00'),
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
        dateTime: new Date('2023-07-29'),
        text: 'Es wäre absolut toll, dich dabei zu haben! Begleiten Sie uns!',
      },
      {
        icon: 'church',
        title: 'Zeremonie',
        dateTime: new Date('2023-07-29T13:00:00'),
        text: 'St. Wolfgang Kirche - Kienberg, 8742 St. Wolfgang, Österreich',
      },
      {
        icon: 'party',
        title: 'Rezeption',
        dateTime: new Date('2023-07-29T16:30:00'),
        text: 'Schloß Wolfsberg - Schloßstraße, 9400 Wolfsberg, Österreich',
      },
    ],
  },
  {
    headline: 'Cerimonia e Celebrazione',
    items: [
      {
        icon: 'calendar',
        title: 'Il giorno del nostro matrimonio',
        dateTime: new Date('2023-07-29'),
        text: 'Sarebbe assolutamente fantastico averti lì! Unisciti a noi!',
      },
      {
        icon: 'church',
        title: 'Cerimonia',
        dateTime: new Date('2023-07-29T13:00:00'),
        text: 'Chiesa di St. Wolfgang - Kienberg, 8742 St. Wolfgang, Austria',
      },
      {
        icon: 'party',
        title: 'Ricevimento',
        dateTime: new Date('2023-07-29T16:30:00'),
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
    headline: 'A chi sta pensando a un regalo!',
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
    },
    externalLink: {
      href: 'https://www.gasthof-oelberger.at/',
      text: 'VISIT SITE',
    },
  },
  {
    direction: 'front',
    image: { src: 'hecher-logo.jpg', alt: 'Hotel Hecher Logo' },
    tile: {
      title: 'Hotel Hecher',
      subtitle: 'Empfohlen für diejenigen, die 2 Nächte bleiben',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
    },
    externalLink: {
      href: 'https://www.gasthof-oelberger.at/',
      text: 'BESUCHEN SIE DIE WEBSITE',
    },
  },
  {
    direction: 'front',
    image: { src: 'hecher-logo.jpg', alt: 'Hotel Hecher Logo' },
    tile: {
      title: 'Hotel Hecher',
      subtitle: 'Consigliato per chi soggiorna 2 notti',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
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
      'La tua presenza è abbastanza presente! Tuttavia, se desideri onorarci con un regalo, ti saremmo molto grati per un contributo finanziario.',
    link: { slug: '/contribute', text: 'CONTRIBUISCI' },
  },
];

export const contactBanner: Array<BannerProps> = [
  {
    headline: 'We look forward to celebrating with you!',
    icon: false,
    paragraph:
      'Please, click on RSVP and follow the steps. Let us know how many of you are going to join us. Should you have any special requirements or further comments, you will be able to add them at the end of the form. Thank you!',
    link: { slug: '/rsvp', text: 'RSVP' },
  },
  {
    headline: 'Wir freuen uns darauf, mit Ihnen zu feiern!',
    icon: false,
    paragraph:
      'Bitte klicken Sie auf RSVP und folgen Sie den Schritten. Teilen Sie uns mit, wie viele von Ihnen sich uns anschließen werden. Sollten Sie besondere Anforderungen oder weitere Anmerkungen haben, können Sie diese am Ende des Formulars hinzufügen. Danke dir!',
    link: { slug: '/rsvp', text: 'RSVP' },
  },
  {
    headline: `Non vediamo l'ora di festeggiare con te!`,
    icon: false,
    paragraph:
      'Per favore, clicca su RSVP e segui i passaggi. Fateci sapere quanti di voi si uniranno a noi. Se hai esigenze particolari o ulteriori commenti, potrai aggiungerli alla fine del modulo. Grazie!',
    link: { slug: '/rsvp', text: 'RSVP' },
  },
];
