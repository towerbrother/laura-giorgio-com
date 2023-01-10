import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

import Button from '../Button';

import { colors, devices } from '~/common/constants';

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
