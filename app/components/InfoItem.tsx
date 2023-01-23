import { format } from 'date-fns';
import { FaCalendar, FaChurch, FaMusic } from 'react-icons/fa';

import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';

export type InfoItemProps = {
  icon: 'calendar' | 'church' | 'party';
  title: string;
  dateTime: Date;
  text: string;
};

const InfoItem = ({ icon, title, dateTime, text }: InfoItemProps) => {
  const iconClassName = 'text-4xl mb-3 text-neutral-800';

  return (
    <div className="flex flex-col items-center py-8 px-3">
      <ConditionalWrapper condition={icon === 'calendar'}>
        <FaCalendar className={iconClassName} />
      </ConditionalWrapper>
      <ConditionalWrapper condition={icon === 'church'}>
        <FaChurch className={iconClassName} />
      </ConditionalWrapper>
      <ConditionalWrapper condition={icon === 'party'}>
        <FaMusic className={iconClassName} />
      </ConditionalWrapper>
      <h4 className="text-center text-lg font-bold my-1 mx-0">{title}</h4>
      <p className="my-1 mx-0">
        {format(dateTime, icon === 'calendar' ? 'dd/MM/yyyy' : 'p')}
      </p>
      <p className="text-center my-1 mx-0 max-w-[250px]">{text}</p>
    </div>
  );
};

export default InfoItem;
