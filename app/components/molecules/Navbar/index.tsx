import { v4 as uuidv4 } from "uuid";

import type { HeaderProps } from "../Header";
import MenuIcon from "../../atoms/MenuIcon";
import Name from "~/components/atoms/Name";

import * as S from "./styles";

type NavbarProps = HeaderProps & {
  toggle: () => void;
};

const Navbar = ({ links, toggle }: NavbarProps) => (
  <S.Wrapper>
    <Name text="Laura & Giorgio" />
    <S.Navbar>
      <MenuIcon iconType="bars" toggle={toggle} />
      <S.NavbarMenu>
        {links.map((link) => (
          <S.Link key={uuidv4()} to={link.slug}>
            {link.text}
          </S.Link>
        ))}
      </S.NavbarMenu>
      <S.NavbarButtonWrapper>
        <S.NavbarButtonLink to="/rsvp">RSVP</S.NavbarButtonLink>
      </S.NavbarButtonWrapper>
    </S.Navbar>{" "}
  </S.Wrapper>
);

export default Navbar;
