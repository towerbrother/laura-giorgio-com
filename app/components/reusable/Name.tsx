import { NavLink } from '@remix-run/react';

type NameProps = {
  text: string;
};

const Name = ({ text }: NameProps) => (
  <NavLink to="/">
    <span className="relative z-30 italic text-2xl text-neutral-800 font-bold tracking-tight md:text-3xl lg:text-4xl">
      {text}
    </span>
  </NavLink>
);

export default Name;
