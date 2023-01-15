import type { ContributionProps } from '~/components/molecules/Contribution';
import type { BannerProps } from '~/components/molecules/Banner';
import type { FooterProps } from '~/components/molecules/Footer';
import type { HeaderProps } from '~/components/molecules/Header';
import type { InfoProps } from '~/components/molecules/Info';
import type { PhotosProps } from '~/components/molecules/Photos';
import type { StageProps } from '~/components/molecules/Stage';
import type { TileProps } from '~/components/molecules/Tile';

export const header: HeaderProps = {
  name: 'Laura & Giorgio',
  links: [
    { text: 'Info', slug: 'info', type: 'link' },
    { text: 'Reservation', slug: 'reservation', type: 'link' },
    { text: 'Contact', slug: 'contact', type: 'link' },
    { text: 'Good to know', slug: 'goodtoknow', type: 'link' },
    { text: 'RSVP', slug: 'rsvp', type: 'button' },
    { text: 'CONTRIBUTE', slug: 'contribute', type: 'button' },
  ],
};

export const footer: FooterProps = {
  name: 'Laura & Giorgio',
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
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio. Integer nunc quam, maximus a justo in, sagittis rhoncus augue. Integer semper, lacus quis molestie mattis, dui leo gravida quam, vel elementum est ligula ac lectus.',
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
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget venenatis orci, eleifend tincidunt odio. Fusce consequat turpis nec aliquam lacinia. Aliquam enim lorem, pretium at dapibus ut, ultrices sed enim. Nunc dignissim, libero vel ultrices pretium, leo felis feugiat neque, ac lobortis justo arcu et odio.',
  },
  link: { slug: '/accomodation', text: 'BOOK' },
};

export const hotelTile: TileProps = {
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
};

export const pensionTile: TileProps = {
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
};

export const contributionBanner: BannerProps = {
  paragraph:
    'Your presence is present enough! However, if you wish to honour us with a gift, we would be very grateful for a financial contribution.',
  link: { slug: '/contribute', text: 'CONTRIBUTE' },
};

export const contactBanner: BannerProps = {
  headline: 'We look forward to celebrating with you!',
  icon: false,
  paragraph:
    'Please, click on RSVP and follow the steps. Let us know how many of you are going to join us. Should you have any special requirements or further comments, you will be able to add them at the end of the form. Thank you!',
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

export const contribution: ContributionProps = {
  headline: 'To those considering a gift!',
  paragraphs: [
    'Your presence is present enough!',
    'However, if you wish to honour us with a gift, we would be very grateful for a financial contribution.',
    'You can find our bank details in your wedding invite. Any amount is appreciated.',
    'THANK YOU! 🥰',
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
