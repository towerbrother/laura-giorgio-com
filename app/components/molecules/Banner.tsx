import { NavLink } from '@remix-run/react';
import { FaGift } from 'react-icons/fa';

import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';

export type BannerProps = {
  headline?: string;
  icon?: boolean;
  paragraph: string;
  link: { slug: string; text: string };
};

const Banner = ({
  headline,
  icon = true,
  paragraph,
  link: { slug, text },
}: BannerProps) => (
  <div
    className={`flex flex-col justify-around items-center py-8 px-5 bg-neutral-300 md:py-12 lg:py-20`}
  >
    <ConditionalWrapper condition={Boolean(headline)}>
      <h2 className="text-center font-bold text-2xl my-3 mx-0 lg:text-4xl lg:my-2">
        {headline}
      </h2>
    </ConditionalWrapper>
    <ConditionalWrapper condition={icon}>
      <FaGift className="text-6xl mb-5 text-neutral-800" />
    </ConditionalWrapper>
    <p className="text-center max-w-md lg:max-w-xl">{paragraph}</p>
    <NavLink
      to={slug}
      className="transition-all duration-200 ease-in-out rounded-lg font-bold bg-neutral-800 text-neutral-100 text-base py-2 px-4 mt-8 hover:opacity-80 lg:text-xl lg:py-2 lg:px-6"
    >
      {text}
    </NavLink>
  </div>
);

export default Banner;
