import { format } from 'date-fns';
import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';
import * as S from './styles';

export type InfoItemProps = {
  icon: 'calendar' | 'church' | 'party';
  title: string;
  dateTime: Date;
  text: string;
};

const InfoItem = ({ icon, title, dateTime, text }: InfoItemProps) => (
  <S.Wrapper>
    <ConditionalWrapper condition={icon === 'calendar'}>
      <S.CalendarIcon />
    </ConditionalWrapper>
    <ConditionalWrapper condition={icon === 'church'}>
      <S.ChurchIcon />
    </ConditionalWrapper>
    <ConditionalWrapper condition={icon === 'party'}>
      <S.PartyIcon />
    </ConditionalWrapper>
    <S.Title>{title}</S.Title>
    <S.DateTime>
      {format(dateTime, icon === 'calendar' ? 'dd/MM/yyyy' : 'p')}
    </S.DateTime>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
);

export default InfoItem;
