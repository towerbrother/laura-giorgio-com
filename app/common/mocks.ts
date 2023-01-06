import type { HeaderProps } from "~/components/molecules/Header";
import type { StageProps } from "~/components/molecules/Stage";
import type { TileProps } from "~/components/molecules/Tile";

export const header: HeaderProps = {
  links: [
    { text: "Home", slug: "" },
    { text: "Info", slug: "info" },
    { text: "Reservation", slug: "reservation" },
    { text: "Contact", slug: "contact" },
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
  image: { src: "tile.jpg", alt: "Hands" },
  tile: {
    title: "Our story",
    subtitle: "For those who did not know",
    text: "We met 9 years ago in London for the first time. Dave was in a supermarket, in the frozen aisle trying to figure out what vegan ice cream is and a girl walks up and says: ‘Hey, do you know where to find vegan ice cream?’. As a couple we've been are together for 8 years now & we’re getting married next year.",
  },
};
