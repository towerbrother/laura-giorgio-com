import { NavLink } from '@remix-run/react';

export type StageProps = {
  title: string;
  subtitle: string;
  date: string;
  link: { slug: string; text: string };
};

const Stage = ({ title, subtitle, date, link: { slug, text } }: StageProps) => (
  <div className="flex flex-col justify-center items-center text-center text-neutral-800 font-bold w-full h-[75vh] bg-gradient-to-br from-cyan-600 to-neutral-100">
    <h2 className="italic text-3xl md:text-5xl lg:text-7xl">{title}</h2>
    <h4 className="uppercase mt-2 text-base md:text-lg lg:text-2xl">
      {subtitle}
    </h4>
    <span className="my-1 md:my-4 lg:my-5 mx-0 text-base md:text-2xl lg:text-3xl tracking-tight sm:text-base">
      {date}
    </span>
    <NavLink
      className="text-lg md:text-2xl lg:text-4xl py-2 lg:py-3 px-6 lg:px-8 mt-6 animate-pulse xl:animate-none transition-all duration-200 ease-in-out font-bold rounded-md bg-neutral-800 text-neutral-100 w-max hover:opacity-80"
      to={slug}
      prefetch="intent"
    >
      {text}
    </NavLink>
  </div>
);

export default Stage;
