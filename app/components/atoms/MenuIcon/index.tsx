import { FaBars, FaTimes } from 'react-icons/fa';

import Button from '~/components/atoms/Button';
import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';

type MenuIconProps = {
  iconType: 'bars' | 'cross';
  toggle: () => void;
};

const MenuIcon = ({ iconType, toggle }: MenuIconProps) => (
  <Button onClick={toggle}>
    <ConditionalWrapper condition={iconType === 'bars'}>
      <FaBars />
    </ConditionalWrapper>
    <ConditionalWrapper condition={iconType === 'cross'}>
      <FaTimes />
    </ConditionalWrapper>
  </Button>
);

export default MenuIcon;

/*
export const MenuIcon = styled(Button)`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 28px;

  @media ${devices.laptop} {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  color: ${colors.offBlack};
`;

export const Cross = styled(FaTimes)`
  color: ${colors.offWhite};
`;
 */
