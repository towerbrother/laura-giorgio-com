import { NavLink } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';

import MenuIcon from '~/components/atoms/MenuIcon';
import Name from '~/components/atoms/Name';
import Language from '~/components/molecules/Language';

import type { HeaderProps } from '~/components/molecules/Header';

type NavbarProps = HeaderProps & {
  toggle: () => void;
};

const Navbar = ({ name, links, languageOptions, toggle }: NavbarProps) => (
  <div>
    <Name text={name} />
    <nav>
      <MenuIcon iconType="bars" toggle={toggle} />
      <div>
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
      <Language options={languageOptions} />
    </nav>
  </div>
);

export default Navbar;

/*
 * export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  z-index: 1;
  height: 80px;

  @media ${devices.laptop} {
    height: 100px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavbarMenu = styled.div`
  display: none;
  padding: 0px 10px 0px 0px;

  @media ${devices.laptop} {
    display: flex;
    align-items: center;
  }
`;

export const Link = styled(RemixNavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  color: ${colors.offBlack};

  &.active {
    color: ${colors.secondaryBackground};
  }
`;

export const NavbarButtonLink = styled(RemixNavLink)`
  transition: all 0.2s ease-in-out;
  padding: 8px 10px;
  margin: 0 10px;
  border-radius: 8px;
  background: ${colors.primaryBackground};
  color: ${colors.offWhite};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.offWhite};
    color: ${colors.primaryBackground};
  }
`;
 */
