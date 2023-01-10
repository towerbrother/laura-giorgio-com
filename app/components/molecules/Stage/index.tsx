import { format } from 'date-fns';

import * as S from './styles';

export type StageProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  date: Date;
  link: { slug: string; text: string };
};

const Stage = ({
  image,
  title,
  subtitle,
  date,
  link: { slug, text },
}: StageProps) => (
  <S.Stage>
    <S.Image {...image} />
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Date>{format(date, 'do LLLL yyyy ｜ p')}</S.Date>
      <S.Link to={slug}>{text}</S.Link>
    </S.Wrapper>
  </S.Stage>
);

export default Stage;
