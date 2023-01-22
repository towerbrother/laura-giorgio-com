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
    <div className="flex flex-col justify-center items-center text-center w-full h-full absolute top-10 text-neutral-100 font-bold md:top-5 lg:-top-50 lg:-left-50">
      <h2 className="italic text-2xl md:text-4xl lg:text-6xl">{title}</h2>
      <h4 className="uppercase text-sm md:text-base lg:text-2xl">{subtitle}</h4>
      <span className="my-2 mx-0 text-base md:my-5 md:text-2xl lg:text-4xl">
        {format(date, 'do LLLL yyyy ｜ p')}
      </span>
      <NavLink
        className="transition-all duration-300 ease-in-out rounded-md bg-neutral-100 text-xl text-neutral-800 font-bold my-1 mx-0 py-2 px-6 hover:opacity-80 lg:text-4xl"
        to={slug}
      >
        {text}
      </NavLink>
    </div>
  </div>
);

export default Stage;
