import { NavLink } from '@remix-run/react';

type NameProps = {
  text: string;
};

const Name = ({ text }: NameProps) => (
  <NavLink to="/">
    <span className="z-40 italic text-2xl text-neutral-800 font-bold -tracking-[3px] md:text-3xl lg:text-4xl lg:tracking-tight">
      {text}
    </span>
  </NavLink>
);

export default Name;
