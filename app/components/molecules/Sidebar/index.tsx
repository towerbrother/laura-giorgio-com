import { v4 as uuidv4 } from 'uuid';

import type { HeaderProps } from '../Header';
import MenuIcon from '../../atoms/MenuIcon';

import * as S from './styles';

type SidebarProps = Partial<HeaderProps> & {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ links, isOpen, toggle }: SidebarProps) => {
  return (
    <S.Sidebar $isOpen={isOpen} onClick={toggle}>
      <MenuIcon iconType="cross" toggle={toggle} />
      <S.SidebarMenu>
        {links?.map(({ type, slug, text }) =>
          type === 'link' ? (
            <S.Link key={uuidv4()} to={slug}>
              {text}
            </S.Link>
          ) : (
            <S.SidebarButtonLink key={uuidv4()} to={slug} $text={text}>
              {text}
            </S.SidebarButtonLink>
          )
        )}
      </S.SidebarMenu>
    </S.Sidebar>
  );
};

export default Sidebar;
