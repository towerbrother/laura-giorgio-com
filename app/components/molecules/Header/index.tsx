import { useState } from "react";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import * as S from "./styles";

type LinkType = { text: string; slug: string };

export type HeaderProps = {
  links: Array<LinkType>;
};

const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <S.Header>
      <Navbar {...props} toggle={toggle} />
      <Sidebar {...props} isOpen={isOpen} toggle={toggle} />
    </S.Header>
  );
};

export default Header;
