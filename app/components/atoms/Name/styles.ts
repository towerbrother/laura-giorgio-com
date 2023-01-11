import styled from 'styled-components';
import { devices } from '~/common/constants';

export const Text = styled.span`
  font-style: italic;
  font-size: 25px;
  word-spacing: -2px;

  @media ${devices.laptop} {
    font-size: 36px;
    word-spacing: -5px;
  }
`;
