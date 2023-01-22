import { NavLink } from '@remix-run/react';

type NameProps = {
  text: string;
};

const Name = ({ text }: NameProps) => (
  <NavLink to="/">
    <span>{text}</span>
  </NavLink>
);

export default Name;

/*
 export const Text = styled.span`
  font-style: italic;
  font-size: 25px;
  word-spacing: -2px;

  @media ${devices.laptop} {
    font-size: 36px;
    word-spacing: -5px;
  }
`;
 */
