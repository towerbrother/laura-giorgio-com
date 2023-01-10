import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 45px;
  background-color: ${colors.offGray};

  @media ${devices.laptop} {
    padding: 80px;
  }
`;

export const InfoItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const Headline = styled.h2`
text-align:center
  font-size: 32px;
  margin-bottom: 20px;

  @media ${devices.tablet} {
    font-size: 42px;
  }
`;
