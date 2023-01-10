import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';
import * as S from './styles';

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
  <S.Wrapper>
    <ConditionalWrapper condition={Boolean(headline)}>
      <S.Headline>{headline}</S.Headline>
    </ConditionalWrapper>
    <ConditionalWrapper condition={icon}>
      <S.Icon />
    </ConditionalWrapper>
    <S.Paragraph>{paragraph}</S.Paragraph>
    <S.Link to={slug}>{text}</S.Link>
  </S.Wrapper>
);

export default Banner;
