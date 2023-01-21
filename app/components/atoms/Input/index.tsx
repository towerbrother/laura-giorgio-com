import type { AriaAttributes, InputHTMLAttributes } from 'react';

type InputProps = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  AriaAttributes;

const Input = ({ name, label, ...rest }: InputProps) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <input id={name} {...rest}></input>
  </>
);

export default Input;

/*
export const Input = styled.input`
  border: none;
  background: transparent;
`;

export const Label = styled.label`
  font-size: 12px;

  @media ${devices.laptop} {
    font-size: 16px;
  }
`;
*/
