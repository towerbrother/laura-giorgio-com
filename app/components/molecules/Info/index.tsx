import { v4 as uuidv4 } from 'uuid';
import type { InfoItemProps } from './InfoItem';
import InfoItem from './InfoItem';
import * as S from './styles';

export type InfoProps = {
  headline: string;
  items: Array<InfoItemProps>;
};

const Info = ({ headline, items }: InfoProps) => (
  <S.Wrapper>
    <S.Headline>{headline}</S.Headline>
    <S.InfoItemsWrapper>
      {items?.map((item: InfoItemProps) => (
        <InfoItem key={uuidv4()} {...item} />
      ))}
    </S.InfoItemsWrapper>
  </S.Wrapper>
);

export default Info;
