import { NavLink } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';

import MenuIcon from '~/components/atoms/MenuIcon';
import Name from '~/components/atoms/Name';
import Language from '~/components/molecules/Language';

import type { HeaderProps } from '~/components/molecules/Header';

type NavbarProps = HeaderProps & {
  toggle: () => void;
};

const Navbar = ({ name, links, languageOptions, toggle }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center w-full max-w-7xl px-6 h-20 lg:h-28">
      <Name text={name} />
      <nav className="flex flex-row items-center xl:flex-row-reverse">
        <Language options={languageOptions} />
        <MenuIcon iconType="bars" toggle={toggle} />
        <div className="hidden pr-2 xl:flex xl:items-center">
          {links?.map(({ type, slug, text }) =>
            type === 'link' ? (
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-cyan-600 hover:' : 'text-neutral-800 '
                  } z-30 flex items-center h-full mx-2 font-bold text-xl hover:opacity-80`
                }
                key={uuidv4()}
                to={slug}
              >
                {text}
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-cyan-600' : 'bg-neutral-800'
                  } z-30 transition-all duration-200 ease-in-out rounded-md text-neutral-100 font-bold text-xl py-2 px-4 mx-2 hover:opacity-80`
                }
                key={uuidv4()}
                to={slug}
              >
                {text}
              </NavLink>
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
