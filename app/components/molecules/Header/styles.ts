import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.offWhite};
  height: 80px;

  @media ${devices.laptop} {
    height: 100px;
  }
`;
