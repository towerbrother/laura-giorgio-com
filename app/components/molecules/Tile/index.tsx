import * as S from "./styles";

export type TileProps = {
  image: {
    src: string;
    alt: string;
  };
  tile: {
    title: string;
    subtitle: string;
    text: string;
  };
};

const Tile = ({ image, tile: { title, subtitle, text } }: TileProps) => (
  <S.Wrapper>
    <S.Image {...image} />
    <S.Tile>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Tile>
  </S.Wrapper>
);

export default Tile;
