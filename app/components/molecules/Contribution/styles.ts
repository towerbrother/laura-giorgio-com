import styled from 'styled-components';

import { colors, devices } from '~/utils/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  background-color: ${colors.offGray};

  @media ${devices.tablet} {
    padding: 120px 30px;
  }

  @media ${devices.laptop} {
    padding: 60px 30px;
  }
`;

export const Headline = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 30px;

  @media ${devices.tablet} {
    font-size: 46px;
  }

  @media ${devices.laptop} {
    font-size: 56px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  max-width: 320px;
  font-size: 14px;
  margin-bottom: 30px;

  @media ${devices.tablet} {
    font-size: 20px;
    max-width: 450px;
  }

  @media ${devices.laptop} {
    font-size: 28px;
    max-width: 650px;
    margin-bottom: 40px;
  }
`;
