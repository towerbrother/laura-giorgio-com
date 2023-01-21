import styled from 'styled-components';
import { colors, devices } from '~/utils/constants';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 25px 0px;
  background-color: ${colors.offWhite};
  margin-top: auto;

  @media ${devices.tablet} {
    padding: 40px 0px;
  }
`;
