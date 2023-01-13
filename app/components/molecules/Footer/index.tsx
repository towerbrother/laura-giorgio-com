import * as S from './styles';

import Name from '~/components/atoms/Name';

export type FooterProps = {
  name: string;
};

const Footer = ({ name }: FooterProps) => (
  <S.Footer>
    <Name text={name} />
  </S.Footer>
);

export default Footer;
