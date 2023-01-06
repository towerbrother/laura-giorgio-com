import * as S from "./styles";

import Name from "~/components/atoms/Name";

type Item = {
  type: "text" | "link";
  text: string;
  link?: string;
};

type Area = Array<Item>;

export type FooterProps = {
  areas: Array<Area>;
};

const Footer = () => (
  <S.Footer>
    <Name text="Laura & Giorgio" />
  </S.Footer>
);

export default Footer;
