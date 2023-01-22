import type { AriaAttributes, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & AriaAttributes;

const Button = ({ children, ...rest }: ButtonProps) => (
  <button
    className="cursor-pointer h-auto border-none outline-none bg-transparent rounded-lg hover:opacity-80"
    {...rest}
  >
    {children}
  </button>
);

export default Button;
