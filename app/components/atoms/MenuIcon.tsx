import { FaBars, FaTimes } from 'react-icons/fa';

import Button from '~/components/atoms/Button';
import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';

type MenuIconProps = {
  iconType: 'bars' | 'cross';
  toggle: () => void;
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
};

const MenuIcon = ({
  iconType,
  toggle,
  position = 'relative',
}: MenuIconProps) => (
  <div
    className={`${position} ${
      position === 'relative' ? 'top-1' : 'top-12 right-12'
    } ml-2 lg:hidden`}
  >
    <Button className="relative z-40" onClick={toggle}>
      <ConditionalWrapper condition={iconType === 'bars'}>
        <FaBars className="text-3xl text-neutral-800 hover:opacity-80 lg:text-4xl" />
      </ConditionalWrapper>
      <ConditionalWrapper condition={iconType === 'cross'}>
        <FaTimes className="text-neutral-300 text-4xl" />
      </ConditionalWrapper>
    </Button>
  </div>
);

export default MenuIcon;
