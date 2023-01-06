import type { HeaderProps } from "~/components/molecules/Header";
import type { StageProps } from "~/components/molecules/Stage";

export const header: HeaderProps = {
  links: [
    { text: "Home", slug: "" },
    { text: "Info", slug: "info" },
    { text: "Reservation", slug: "reservation" },
    { text: "Contact", slug: "contact" },
  ],
};

export const stage: StageProps = {
  image: "couple-vertical.jpg",
  name: "Laura & Giorgio",
  text: "are getting married",
  date: new Date(2023, 6, 29, 13),
  link: { text: "RSVP", slug: "/rsvp" },
};
