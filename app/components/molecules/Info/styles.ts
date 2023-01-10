import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 45px;
  background-color: ${colors.offWhite};

  @media ${devices.tablet} {
    padding: 80px;
  }
`;

export const InfoItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Headline = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
`;
