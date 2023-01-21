import { v4 as uuidv4 } from 'uuid';
import { NavLink } from '@remix-run/react';

import MenuIcon from '~/components/atoms/MenuIcon';
import type { HeaderProps } from '~/components/molecules/Header';

type SidebarProps = Partial<HeaderProps> & {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ links, isOpen, toggle }: SidebarProps) => {
  /* aside has the $isOpen={isOpen} prop */
  return (
    <aside onClick={toggle}>
      <MenuIcon iconType="cross" toggle={toggle} />
      <div>
        {/* here we can put ternary operator in the className with Tailwind */}
        {links?.map(({ type, slug, text }) =>
          type === 'link' ? (
            <NavLink key={uuidv4()} to={slug}>
              {text}
            </NavLink>
          ) : (
            <NavLink key={uuidv4()} to={slug}>
              {text}
            </NavLink>
          )
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

/**
 * type SidebarProps = {
  $isOpen: boolean;
};

export const Sidebar = styled.aside<SidebarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  z-index: 10;
  background: ${colors.offBlack};
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  height: 80%;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  padding: 16px 0px;
  font-size: 20px;
  color: ${colors.offWhite};
`;

export const SidebarButtonLink = styled(NavLink)`
  transition: all 0.2s ease-in-out;
  border-radius: 50px;
  background: ${colors.primaryBackground};
  color: ${colors.offWhite};
  margin: 20px 0;
  padding: 12px 30px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.offWhite};
    color: ${colors.primaryBackground};
  }
`;

 */
