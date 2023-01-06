import { v4 as uuidv4 } from "uuid";

import type { HeaderProps } from "../Header";
import MenuIcon from "../../atoms/MenuIcon";

import * as S from "./styles";

type SidebarProps = Partial<HeaderProps> & {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ links, isOpen, toggle }: SidebarProps) => {
  return (
    <S.Sidebar isOpen={isOpen} onClick={toggle}>
      <MenuIcon iconType="cross" toggle={toggle} />
      <S.SidebarWrapper>
        <S.SidebarMenu>
          {links?.map((link) => (
            <S.Link key={uuidv4()} to={link.slug}>
              {link.text}
            </S.Link>
          ))}
        </S.SidebarMenu>
        <S.SidebarButtonWrapper>
          <S.SidebarButtonLink to="/rsvp">RSVP</S.SidebarButtonLink>
        </S.SidebarButtonWrapper>
      </S.SidebarWrapper>
    </S.Sidebar>
  );
};

export default Sidebar;
