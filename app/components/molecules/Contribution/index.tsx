import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';

export type ContributionProps = {
  headline: string;
  paragraphs: Array<string>;
};

const Contribution = ({ headline, paragraphs }: ContributionProps) => (
  <S.Wrapper>
    <S.Headline>{headline}</S.Headline>
    {paragraphs?.map((paragraph) => (
      <S.Paragraph key={uuidv4()}>{paragraph}</S.Paragraph>
    ))}
  </S.Wrapper>
);

export default Contribution;
