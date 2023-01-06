import * as S from "./styles";

type NameProps = {
  text: string;
};

const Name = ({ text }: NameProps) => <S.Text>{text}</S.Text>;

export default Name;
