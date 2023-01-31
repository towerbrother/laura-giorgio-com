import { NavLink } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';

import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';

type DirectionType = 'front' | 'back';

export type TileProps = {
  direction: DirectionType;
  image: {
    src: string;
    alt: string;
  };
  tile: {
    title: string;
    subtitle: string;
    texts: Array<string>;
  };
  link?: { slug: string; text: string };
  externalLink?: { href: string; text: string };
};

const Tile = ({
  direction,
  image: { src, alt },
  tile: { title, subtitle, texts },
  link,
  externalLink,
}: TileProps) => {
  const linkClassName =
    'transition-all duration-200 ease-in-out font-bold rounded-md bg-neutral-800 text-neutral-100 w-max text-base py-2 px-4 mt-4 hover:opacity-80 lg:text-2xl lg:px-10';

  const directionOrderClassName =
    direction === 'front' ? 'lg:flex-row' : 'lg:flex-row-reverse';
  const directionPaddingClassName =
    direction === 'front' ? 'lg:pl-12 lg:pr-2' : 'lg:pr-12 lg:pl-2';
  return (
    <div
      className={`flex flex-col-reverse justify-center items-center p-5 bg-neutral-100 lg:py-20 lg:px-35 ${directionOrderClassName}`}
    >
      <img className="h-auto w-96" src={src} alt={alt} />
      <div
        className={`flex flex-col justify-around py-5 px-0 text-neutral-800 lg:py-7 ${directionPaddingClassName}`}
      >
        <h4 className="italic">{subtitle}</h4>
        <h2 className="text-2xl my-4 mx-0 font-bold lg:text-3xl">{title}</h2>
        {texts.map((text) => (
          <p key={uuidv4()} className="max-w-sm mb-2">
            {text}
          </p>
        ))}
        <ConditionalWrapper condition={Boolean(link)}>
          <NavLink
            className={linkClassName}
            to={link?.slug ?? ''}
            prefetch="intent"
          >
            {link?.text}
          </NavLink>
        </ConditionalWrapper>
        <ConditionalWrapper condition={Boolean(externalLink)}>
          <a
            className={linkClassName}
            href={externalLink?.href ?? ''}
            target="_blank"
            rel="noreferrer"
          >
            {externalLink?.text}
          </a>
        </ConditionalWrapper>
      </div>
    </div>
  );
};

export default Tile;
