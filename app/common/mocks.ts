import type { BannerProps } from "~/components/molecules/Banner";
import type { HeaderProps } from "~/components/molecules/Header";
import type { StageProps } from "~/components/molecules/Stage";
import type { TileProps } from "~/components/molecules/Tile";

export const header: HeaderProps = {
  links: [
    { text: "Info", slug: "info" },
    { text: "Reservation", slug: "reservation" },
    { text: "Contact", slug: "contact" },
    { text: "Good to know", slug: "goodtoknow" },
  ],
};

export const stage: StageProps = {
  image: { src: "stage.png", alt: "Laura & Giorgio hugging" },
  title: "Laura & Giorgio",
  subtitle: "are getting married",
  date: new Date(2023, 6, 29, 13),
  link: { text: "RSVP", slug: "/rsvp" },
};

export const homeTile: TileProps = {
  direction: "front",
  image: { src: "tile.jpg", alt: "Hands" },
  tile: {
    title: "Our story",
    subtitle: "For those who did not know",
    text: "We met 9 years ago in London for the first time. Dave was in a supermarket, in the frozen aisle trying to figure out what vegan ice cream is and a girl walks up and says: ‘Hey, do you know where to find vegan ice cream?’. As a couple we've been are together for 8 years now & we’re getting married next year.",
  },
};

export const transportationTile: TileProps = {
  direction: "front",
  image: { src: "tile.jpg", alt: "Hands" },
  tile: {
    title: "Transportation",
    subtitle: "Don't worry about anything",
    text: "We have arranged transportation for guests from the hotel to the church and later to the reception venue. To reserve a seat, please let us know with your RSVP.",
  },
  link: { slug: "/rsvp", text: "RSVP" },
};

export const accomodationTile: TileProps = {
  direction: "back",
  image: { src: "tile.jpg", alt: "Hands" },
  tile: {
    title: "Accommodation",
    subtitle: "Cozy rooms for your stay",
    text: "There are several accommodation options in the resort. Breakfast is included. Do not hesitate to book a room to get the best accommodation offer.",
  },
  link: { slug: "/accomodation", text: "BOOK" },
};

export const contributionBanner: BannerProps = {
  paragraph:
    "Your presence at our wedding day is the most important gift you could ever give us. However, if you would like to contribute to our honeymoon, any amount is appreciated - click the button below.",
  link: { slug: "/contribute", text: "CONTRIBUTE" },
};

export const contactBanner: BannerProps = {
  headline: "We look forward to celebrating with you!",
  icon: false,
  paragraph:
    "Please, click on RSVP and write an email to given email address - let us know how many of you are going to join us on our special day.",
  link: { slug: "/rsvp", text: "RSVP" },
};
