import { v4 as uuidv4 } from 'uuid';
import { NavLink } from '@remix-run/react';

import MenuIcon from '~/components/reusable/MenuIcon';
import type { HeaderProps } from '~/components/Header';

type SidebarProps = Partial<HeaderProps> & {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ links, isOpen, toggle }: SidebarProps) => {
  const linkClassName =
    'flex justify-center items-center my-1 mx-0 py-4 px-0 text-xl text-neutral-300 font-bold';
  const buttonLinkClassName =
    'transition-all duration-300 ease-in-out rounded-xl bg-neutral-300 text-neutral-800 my-4 mx-0 py-3 px-6 font-bold hover:opacity-80';

  return (
    <aside
      onClick={toggle}
      className={`flex justify-center items-center fixed left-0 w-full h-full transition-all duration-300 ease-in-out z-50 bg-neutral-800 ${
        isOpen ? 'top-0 opacity-100' : '-top-full opacity-0'
      }`}
    >
      <MenuIcon iconType="cross" toggle={toggle} position="absolute" />
      <div className="flex flex-col justify-between items-center overflow-y-scroll h-[80%]">
        {links?.map(({ type, slug, text }) => (
          <NavLink
            className={type === 'link' ? linkClassName : buttonLinkClassName}
            key={uuidv4()}
            to={slug}
            prefetch="intent"
          >
            {text}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
