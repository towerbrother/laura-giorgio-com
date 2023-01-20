import { v4 as uuidv4 } from 'uuid';

import type { HeaderProps } from '../Header';
import MenuIcon from '../../atoms/MenuIcon';
import Name from '~/components/atoms/Name';

import * as S from './styles';
import Language from '../Language';
import { languageOptions } from '~/common/mocks';

type NavbarProps = HeaderProps & {
  toggle: () => void;
};

const Navbar = ({ name, links, toggle }: NavbarProps) => (
  <S.Wrapper>
    <Name text={name} />
    <S.Navbar>
      <MenuIcon iconType="bars" toggle={toggle} />
      <S.NavbarMenu>
        {links?.map(({ type, slug, text }) =>
          type === 'link' ? (
            <S.Link key={uuidv4()} to={slug}>
              {text}
            </S.Link>
          ) : (
            <S.NavbarButtonLink key={uuidv4()} to={slug}>
              {text}
            </S.NavbarButtonLink>
          )
        )}
      </S.NavbarMenu>
      <Language {...languageOptions} />
    </S.Navbar>
  </S.Wrapper>
);

export default Navbar;
