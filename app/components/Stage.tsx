import { NavLink } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';

export type StageProps = {
  heading: string;
  subHeading: string;
  texts: Array<string>;
  email: string;
  phone: string;
  link: { slug: string; text: string };
};

const Stage = ({
  heading,
  subHeading,
  texts,
  email,
  phone,
  link,
}: StageProps) => (
  <div className='flex flex-col justify-center items-center text-center text-neutral-800 font-bold w-full bg-gradient-to-br from-cyan-600 to-neutral-100 py-8'>
    <div className='flex flex-col lg:flex-row justify-center items-center mx-8 xl:mx-56'>
      <div className='flex flex-col'>
        <h1 className='my-1 md:my-4 lg:my-5 mx-0 text-5xl md:text-8xl lg:text-12xl tracking-tight'>
          {heading}
        </h1>
        <h3 className='my-1 md:my-4 lg:my-5 mx-0 text-3xl md:text-5xl tracking-tight'>
          {subHeading}
        </h3>
      </div>
      <div className='my-3 mx-8 lg:mx-12'>
        {texts.map((text) => (
          <p
            key={uuidv4()}
            className='my-1 md:my-4 lg:my-5 text-l md:text-xl lg:text-2xl tracking-tight text-center lg:text-left'
          >
            {text}
          </p>
        ))}
      </div>
    </div>
    <span className='my-1 md:my-4 lg:my-5 mx-0 text-l md:text-xl lg:text-2xl tracking-tight'>
      <strong>Email:</strong> {email}
    </span>
    <span className='my-1 md:my-4 lg:my-5 mx-0 text-l md:text-xl lg:text-2xl tracking-tight'>
      <strong>Phone:</strong> {phone}
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
