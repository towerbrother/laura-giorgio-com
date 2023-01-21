import { useState } from 'react';

import Navbar from '~/components/molecules/Navbar';
import Sidebar from '~/components/molecules/Sidebar';

type LinkType = { text: string; slug: string; type: 'link' | 'button' };

export type HeaderProps = {
  name: string;
  links: Array<LinkType>;
  languageOptions: Array<string>;
};

const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar {...props} toggle={toggle} />
      <Sidebar {...props} isOpen={isOpen} toggle={toggle} />
    </header>
  );
};

export default Header;

/*
 * export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.offWhite};
  height: 80px;

  @media ${devices.laptop} {
    height: 100px;
  }
`;
 */
