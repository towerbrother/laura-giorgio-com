import { format } from "date-fns";

import * as S from "./styles";

export type StageProps = {
  image: string;
  name: string;
  text: string;
  date: Date;
  link: { slug: string; text: string };
};

const Stage = ({ image, name, text, date, link }: StageProps) => (
  <S.Stage>
    <S.Image src={image} />
    <S.Wrapper>
      <S.Name>{name}</S.Name>
      <S.Text>{text}</S.Text>
      <S.Date>{format(date, "do LLLL yyyy ｜ p")}</S.Date>
      <S.Link to={link.slug}>{link.text}</S.Link>
    </S.Wrapper>
  </S.Stage>
);

export default Stage;
