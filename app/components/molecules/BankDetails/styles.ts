import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: ${colors.offGray};

  @media ${devices.laptop} {
    padding: 50px;
  }
`;

export const Headline = styled.h2`
  text-align: center;
  font-size: 32px;
  margin: 0px 0px 55px 0px;

  @media ${devices.laptop} {
    font-size: 42px;
    margin: 0px 0px 30px 0px;
  }
`;
