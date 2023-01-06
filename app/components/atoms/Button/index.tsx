import * as S from './styles';

import type { AriaAttributes, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & AriaAttributes;

const Button = ({ children, ...rest }: ButtonProps) => (
  <S.Button {...rest}>{children}</S.Button>
);

export default Button;
