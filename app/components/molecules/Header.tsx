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
    <header className="relative flex justify-center items-center bg-neutral-100 shadow-lg h-20 lg:h-28">
      <Navbar {...props} toggle={toggle} />
      <Sidebar {...props} isOpen={isOpen} toggle={toggle} />
    </header>
  );
};

export default Header;
