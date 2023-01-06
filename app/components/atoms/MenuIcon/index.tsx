import ConditionalWrapper from '../ConditionalWrapper';

import * as S from './styles';

type MenuIconProps = {
  iconType: 'bars' | 'cross';
  toggle: () => void;
};

const MenuIcon = ({ iconType, toggle }: MenuIconProps) => (
  <S.MenuIcon onClick={toggle}>
    <ConditionalWrapper condition={iconType === 'bars'}>
      <S.Bars />
    </ConditionalWrapper>
    <ConditionalWrapper condition={iconType === 'cross'}>
      <S.Cross />
    </ConditionalWrapper>
  </S.MenuIcon>
);

export default MenuIcon;
