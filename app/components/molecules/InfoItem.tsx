import { format } from 'date-fns';
import { FaCalendar, FaChurch, FaMusic } from 'react-icons/fa';

import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';

export type InfoItemProps = {
  icon: 'calendar' | 'church' | 'party';
  title: string;
  dateTime: Date;
  text: string;
};

const InfoItem = ({ icon, title, dateTime, text }: InfoItemProps) => (
  <div>
    <ConditionalWrapper condition={icon === 'calendar'}>
      <FaCalendar />
    </ConditionalWrapper>
    <ConditionalWrapper condition={icon === 'church'}>
      <FaChurch />
    </ConditionalWrapper>
    <ConditionalWrapper condition={icon === 'party'}>
      <FaMusic />
    </ConditionalWrapper>
    <h4>{title}</h4>
    <p>{format(dateTime, icon === 'calendar' ? 'dd/MM/yyyy' : 'p')}</p>
    <p>{text}</p>
  </div>
);

export default InfoItem;

/**
 * export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
`;

export const CalendarIcon = styled(FaCalendar)`
  font-size: 42px;
  margin-bottom: 20px;
  color: ${colors.offBlack};
`;

export const ChurchIcon = styled(FaChurch)`
  font-size: 42px;
  margin-bottom: 20px;
  color: ${colors.offBlack};
`;

export const PartyIcon = styled(FaMusic)`
  font-size: 42px;
  margin-bottom: 20px;
  color: ${colors.offBlack};
`;

export const Title = styled.h4`
  text-align: center;
  font-size: 16px;
  margin: 5px 0px;
`;

export const Text = styled.p`
  text-align: center;
  margin: 5px 0px;
  max-width: 250px;
`;

export const DateTime = styled.p`
  margin: 5px 0px;
`;

 */
