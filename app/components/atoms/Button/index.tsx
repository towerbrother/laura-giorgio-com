import type { AriaAttributes, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & AriaAttributes;

const Button = ({ children, ...rest }: ButtonProps) => (
  <button {...rest}>{children}</button>
);

export default Button;

/*
export const Button = styled.button`
  height: auto;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
  }
`;
 */
