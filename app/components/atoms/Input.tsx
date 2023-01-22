import type { AriaAttributes, InputHTMLAttributes } from 'react';

type InputProps = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  AriaAttributes;

const Input = ({ name, label, ...rest }: InputProps) => (
  <>
    {label && (
      <label className="text-xs lg:text-base" htmlFor={name}>
        {label}
      </label>
    )}
    <input className="border-none bg-transparent" id={name} {...rest}></input>
  </>
);

export default Input;
