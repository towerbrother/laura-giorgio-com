import { useState } from 'react';

import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';

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
    <header className="relative flex justify-center items-center bg-neutral-100 shadow-lg h-[10vh]">
      <Navbar {...props} toggle={toggle} />
      <Sidebar {...props} isOpen={isOpen} toggle={toggle} />
    </header>
  );
};

export default Header;
