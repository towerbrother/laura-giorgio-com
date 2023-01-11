import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  background-color: ${colors.offGray};

  @media ${devices.tablet} {
    padding: 100px 30px;
  }

  @media ${devices.laptop} {
    padding: 150px;
  }
`;

export const Headline = styled.h2`
  text-align: center;
  font-size: 32px;
  margin: 0px 0px 55px 0px;

  @media ${devices.tablet} {
    font-size: 46px;
    margin: 0px 0px 30px 0px;
  }

  @media ${devices.laptop} {
    font-size: 56px;
  }
`;
