import type { BankDetailsProps } from '~/components/molecules/BankDetails';
import type { BannerProps } from '~/components/molecules/Banner';
import type { HeaderProps } from '~/components/molecules/Header';
import type { InfoProps } from '~/components/molecules/Info';
import type { PhotosProps } from '~/components/molecules/Photos';
import type { StageProps } from '~/components/molecules/Stage';
import type { TileProps } from '~/components/molecules/Tile';

export const header: HeaderProps = {
  links: [
    { text: 'Home', slug: 'home', type: 'link' },
    { text: 'Info', slug: 'info', type: 'link' },
    { text: 'Reservation', slug: 'reservation', type: 'link' },
    { text: 'Contact', slug: 'contact', type: 'link' },
    { text: 'Good to know', slug: 'goodtoknow', type: 'link' },
    { text: 'RSVP', slug: 'rsvp', type: 'button' },
    { text: 'CONTRIBUTE', slug: 'contribute', type: 'button' },
  ],
};

export const stage: StageProps = {
  image: { src: 'main.JPG', alt: 'Laura & Giorgio' },
  title: 'Laura & Giorgio',
  subtitle: 'are getting married',
  date: new Date(2023, 6, 29, 13),
  link: { text: 'RSVP', slug: '/rsvp' },
};

export const homeTile: TileProps = {
  direction: 'front',
  image: { src: 'main-tile.JPG', alt: 'Hands' },
  tile: {
    title: 'Our story',
    subtitle: 'For those who did not know',
    text: "We met 9 years ago in London for the first time. Dave was in a supermarket, in the frozen aisle trying to figure out what vegan ice cream is and a girl walks up and says: ‘Hey, do you know where to find vegan ice cream?’. As a couple we've been are together for 8 years now & we’re getting married next year.",
  },
};

export const transportationTile: TileProps = {
  direction: 'front',
  image: { src: 'transportation.jpg', alt: 'Toy car' },
  tile: {
    title: 'Transportation',
    subtitle: "Don't worry about anything",
    text: 'We have arranged transportation for guests from the hotel to the church and later to the reception venue. To reserve a seat, please let us know with your RSVP.',
  },
  link: { slug: '/rsvp', text: 'RSVP' },
};

export const accomodationTile: TileProps = {
  direction: 'back',
  image: { src: 'hotel.jpg', alt: 'Hotel Room' },
  tile: {
    title: 'Accommodation',
    subtitle: 'Cozy rooms for your stay',
    text: 'There are several accommodation options in the resort. Breakfast is included. Do not hesitate to book a room to get the best accommodation offer.',
  },
  link: { slug: '/accomodation', text: 'BOOK' },
};

export const contributionBanner: BannerProps = {
  paragraph:
    'Your presence at our wedding is the best gift you could ever give us. However, if you would like to send us a contribution, any amount would be appreciated - click the button below',
  link: { slug: '/contribute', text: 'CONTRIBUTE' },
};

export const contactBanner: BannerProps = {
  headline: 'We look forward to celebrating with you!',
  icon: false,
  paragraph:
    'Please, click on RSVP and write an email to given email address - let us know how many of you are going to join us on our special day.',
  link: { slug: '/rsvp', text: 'RSVP' },
};

export const info: InfoProps = {
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
      text: 'Schloß Wolfsberg - Schloßstraße, 9400 Wolfsberg, Austria',
    },
  ],
};

export const bankDetails: BankDetailsProps = {
  headline: 'Here our bank details',
  details: [
    { type: 'iban', value: 'DE63500105175437979305' },
    { type: 'bic', value: 'INGDDEFFXXX' },
    { type: 'name', value: 'Giorgio Torre Laura Purnell' },
    { type: 'reference', value: 'Wedding contribution from [...]' },
  ],
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
