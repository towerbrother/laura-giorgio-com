import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';
import * as S from './styles';

export type TileProps = {
  direction: 'front' | 'back';
  image: {
    src: string;
    alt: string;
  };
  tile: {
    title: string;
    subtitle: string;
    text: string;
  };
  link?: { slug: string; text: string };
  externalLink?: { href: string; text: string };
};

const Tile = ({
  direction,
  image,
  tile: { title, subtitle, text },
  link,
  externalLink,
}: TileProps) => (
  <S.Wrapper direction={direction}>
    <S.Image {...image} />
    <S.Tile direction={direction}>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
      <ConditionalWrapper condition={Boolean(link)}>
        <S.Link to={link?.slug ?? ''}>{link?.text}</S.Link>
      </ConditionalWrapper>
      <ConditionalWrapper condition={Boolean(externalLink)}>
        <S.ExternalLink href={externalLink?.href ?? ''} target="_blank">
          {externalLink?.text}
        </S.ExternalLink>
      </ConditionalWrapper>
    </S.Tile>
  </S.Wrapper>
);

export default Tile;
