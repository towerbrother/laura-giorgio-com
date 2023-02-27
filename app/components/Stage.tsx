import { NavLink } from '@remix-run/react';
import { FaMale, FaFemale, FaBaby } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import ConditionalWrapper from './reusable/ConditionalWrapper';

type StageItem = {
  title: string;
  subtitle: string;
  icons: Array<string>;
};

export type StageProps = {
  wedding: StageItem;
  baptism: StageItem;
  date: string;
  link: { slug: string; text: string };
};

const Stage = ({
  wedding,
  baptism,
  date,
  link: { slug, text },
}: StageProps) => (
  <div className='flex flex-col justify-center items-center text-center text-neutral-800 font-bold w-full h-[75vh] md:h-[70vh] bg-gradient-to-br from-cyan-600 to-neutral-100'>
    <div className='flex flex-col md:flex-row justify-center items-center mt-4 mb-4 md:mb-12'>
      <div className='flex flex-col justify-center items-center mx-6 my-3 md:my-0'>
        <span className='italic text-3xl md:text-4xl lg:text-5xl'>
          {wedding.title}
        </span>
        <span className='uppercase mt-2 text-base md:text-lg lg:text-2xl'>
          {wedding.subtitle}
        </span>
        <div
          key={uuidv4()}
          className='flex justify-center items-center text-center mt-3 text-xl md:text-3xl'
        >
          {wedding.icons.map((icon) => (
            <>
              <ConditionalWrapper condition={icon === 'male'}>
                <FaMale />
              </ConditionalWrapper>
              <ConditionalWrapper condition={icon === 'female'}>
                <FaFemale />
              </ConditionalWrapper>
            </>
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mx-6 my-3 md:my-0'>
        <span className='italic text-3xl md:text-4xl lg:text-5xl'>
          {baptism.title}
        </span>
        <span className='uppercase mt-2 text-base md:text-lg lg:text-2xl'>
          {baptism.subtitle}
        </span>
        <div
          key={uuidv4()}
          className='flex justify-center items-center text-center mt-3 text-xl md:text-3xl'
        >
          {baptism.icons.map((icon) => (
            <>
              <ConditionalWrapper condition={icon === 'baby'}>
                <FaBaby />
              </ConditionalWrapper>
            </>
          ))}
        </div>
      </div>
    </div>
    <span className='my-1 md:my-4 lg:my-5 mx-0 text-2xl md:text-4xl lg:text-5xl tracking-tight sm:text-base'>
      {date}
    </span>
    <NavLink
      className='text-lg md:text-2xl lg:text-4xl py-2 lg:py-3 px-6 lg:px-8 mt-6 mb-8 animate-pulse xl:animate-none transition-all duration-200 ease-in-out font-bold rounded-md bg-neutral-800 text-neutral-100 w-max hover:opacity-80'
      to={slug}
      prefetch='intent'
    >
      {text}
    </NavLink>
  </div>
);

export default Stage;
