import { NavLink } from "@remix-run/react";
import * as S from "./styles";

type NameProps = {
  text: string;
};

const Name = ({ text }: NameProps) => (
  <NavLink to="/">
    <S.Text>{text}</S.Text>
  </NavLink>
);

export default Name;
