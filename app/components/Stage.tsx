import { NavLink } from '@remix-run/react';
import { format } from 'date-fns';

export type StageProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  date: Date;
  link: { slug: string; text: string };
};

const Stage = ({
  image: { src, alt },
  title,
  subtitle,
  date,
  link: { slug, text },
}: StageProps) => (
  <div className="relative">
    <img className="w-full" src={src} alt={alt} />
    <div className="flex flex-col justify-center items-center text-center text-neutral-800 font-bold w-full h-full absolute top-2 -left-[55px] sm:-left-[100px] md:-left-[150px] lg:-left-[180px] xl:-left-[300px] xl:-top-16">
      <h2 className="italic text-md sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl">
        {title}
      </h2>
      <h4 className="uppercase text-[8px] sm:text-sm md:text-base lg:text-xl xl:text-2xl">
        {subtitle}
      </h4>
      <span className="my-2 mx-0 text-sm tracking-tight sm:text-base md:text-xl lg:text-2xl xl:text-3xl md:my-5">
        {format(date, 'do LLLL yyyy ｜ p')}
      </span>
      <NavLink
        className="rounded-md bg-neutral-800 text-sm text-neutral-100 font-bold my-1 mx-0 py-1 px-4 md:text-md md:py-2 md:px-6 hover:opacity-80 lg:text-4xl lg:py-4 lg:px-8"
        to={slug}
        prefetch="intent"
      >
        {text}
      </NavLink>
    </div>
  </div>
);

export default Stage;
