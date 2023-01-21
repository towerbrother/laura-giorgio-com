import Name from '~/components/atoms/Name';

export type FooterProps = {
  name: string;
};

const Footer = ({ name }: FooterProps) => (
  <footer>
    <Name text={name} />
  </footer>
);

export default Footer;

/*
 * export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 25px 0px;
  background-color: ${colors.offWhite};
  margin-top: auto;

  @media ${devices.tablet} {
    padding: 40px 0px;
  }
`;
 */
