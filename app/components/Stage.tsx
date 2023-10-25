import { NavLink } from '@remix-run/react';

export type StageProps = {
  headline: string;
  text: string;
  link?: { slug: string; text: string };
};

const Stage = ({ headline, text, link }: StageProps) => (
  <div className='flex flex-col justify-center items-center text-center text-neutral-800 font-bold w-full h-[75vh] md:h-[70vh] bg-gradient-to-br from-cyan-600 to-neutral-100'>
    <div className='flex flex-col md:flex-row justify-center items-center mt-4 mb-4 md:mb-12'>
      <div className='flex flex-col justify-center items-center mx-6 my-3 md:my-0'></div>
    </div>
    <h1 className='my-1 md:my-4 lg:my-5 mx-0 text-5xl md:text-8xl lg:text-12xl tracking-tight sm:text-base'>
      {headline}
    </h1>
    <span className='my-1 md:my-4 lg:my-5 mx-0 text-2xl md:text-4xl lg:text-5xl tracking-tight sm:text-base'>
      {text}
    </span>
    {link && (
      <NavLink
        className='text-lg md:text-2xl lg:text-4xl py-2 lg:py-3 px-6 lg:px-8 mt-6 mb-8 animate-pulse xl:animate-none transition-all duration-200 ease-in-out font-bold rounded-md bg-neutral-800 text-neutral-100 w-max hover:opacity-80'
        to={link.slug}
        prefetch='intent'
      >
        {link.text}
      </NavLink>
    )}
  </div>
);

export default Stage;
