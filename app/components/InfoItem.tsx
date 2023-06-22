import { NavLink } from '@remix-run/react';
import { format } from 'date-fns';
import { FaCalendar, FaChurch, FaMusic, FaMountain } from 'react-icons/fa';

import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';

type Link = { slug: string; text: string };
type ExternalLink = { href: string; text: string };

export type InfoItemProps = {
  icon: 'calendar' | 'church' | 'party' | 'mountain';
  title: string;
  dateTime: Date;
  text: string;
  link?: Link;
  externalLink?: ExternalLink;
};

const InfoItem = ({
  icon,
  title,
  dateTime,
  text,
  link,
  externalLink,
}: InfoItemProps) => {
  const iconClassName = 'text-4xl mb-3 text-neutral-800';
  const linkClassName =
    'transition-all duration-200 ease-in-out font-bold rounded-md bg-neutral-800 text-neutral-100 w-max text-base py-2 px-4 mt-3 hover:opacity-80 lg:text-2xl lg:px-10';

  return (
    <div className='flex flex-col justify-center items-center py-8 px-3'>
      <ConditionalWrapper condition={icon === 'calendar'}>
        <FaCalendar className={iconClassName} />
      </ConditionalWrapper>
      <ConditionalWrapper condition={icon === 'church'}>
        <FaChurch className={iconClassName} />
      </ConditionalWrapper>
      <ConditionalWrapper condition={icon === 'party'}>
        <FaMusic className={iconClassName} />
      </ConditionalWrapper>
      <ConditionalWrapper condition={icon === 'mountain'}>
        <FaMountain className={iconClassName} />
      </ConditionalWrapper>
      <h4 className='text-center text-lg font-bold my-1 mx-0'>{title}</h4>
      <p className='my-1 mx-0'>
        {format(
          dateTime,
          icon === 'calendar' || icon === 'mountain' ? 'dd/MM/yyyy' : 'p'
        )}
      </p>
      <p className='text-center my-1 mx-0 max-w-[250px]'>{text}</p>
      <ConditionalWrapper condition={Boolean(link)}>
        <NavLink
          className={linkClassName}
          to={link?.slug ?? ''}
          prefetch='intent'
        >
          {link?.text}
        </NavLink>
      </ConditionalWrapper>
      <ConditionalWrapper condition={Boolean(externalLink)}>
        <a
          className={linkClassName}
          href={externalLink?.href ?? ''}
          target='_blank'
          rel='noreferrer'
        >
          {externalLink?.text}
        </a>
      </ConditionalWrapper>
    </div>
  );
};

export default InfoItem;
