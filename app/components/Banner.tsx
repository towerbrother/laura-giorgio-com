import { NavLink } from '@remix-run/react';
import { FaGift } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';

export type BannerProps = {
  headline?: string;
  icon?: boolean;
  paragraphs: Array<string>;
  link?: { slug: string; text: string };
  height?: string;
};

const Banner = ({
  headline,
  icon = true,
  paragraphs,
  link,
  height,
}: BannerProps) => (
  <div
    className={`flex flex-col justify-center items-center py-8 px-5 bg-neutral-300 md:py-12 lg:py-20 ${
      height ? height : ''
    }`}
  >
    <ConditionalWrapper condition={Boolean(headline)}>
      <h2 className="text-center font-bold text-2xl mb-5 mx-0 lg:text-4xl lg:mb-8">
        {headline}
      </h2>
    </ConditionalWrapper>
    <ConditionalWrapper condition={icon}>
      <FaGift className="text-6xl mb-5 text-neutral-800" />
    </ConditionalWrapper>
    {paragraphs.map((paragraph) => (
      <p
        key={uuidv4()}
        className="text-center max-w-md my-2 lg:my-4 text-lg lg:max-w-xl lg:text-2xl"
      >
        {paragraph}
      </p>
    ))}
    <ConditionalWrapper condition={Boolean(link)}>
      <NavLink
        to={link?.slug ?? ''}
        prefetch="intent"
        className="transition-all duration-200 ease-in-out font-bold rounded-md bg-neutral-800 text-neutral-100 w-max text-base py-3 px-6 mt-12 hover:opacity-80 lg:text-2xl lg:px-10"
      >
        {link?.text}
      </NavLink>
    </ConditionalWrapper>
  </div>
);

export default Banner;
