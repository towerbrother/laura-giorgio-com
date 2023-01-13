import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';
import type { BankDetailsItemProps } from './BankDetailsItem';
import BankDetailsItem from './BankDetailsItem';

export type BankDetailsProps = {
  headline: string;
  paragraph: string;
  details: Array<BankDetailsItemProps>;
};

const BankDetails = ({ headline, paragraph, details }: BankDetailsProps) => (
  <S.Wrapper>
    <S.Headline>{headline}</S.Headline>
    <S.Paragraph>{paragraph}</S.Paragraph>
    {details.map((detail) => (
      <BankDetailsItem key={uuidv4()} {...detail} />
    ))}
  </S.Wrapper>
);

export default BankDetails;
