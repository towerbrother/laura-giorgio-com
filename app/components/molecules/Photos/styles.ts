import styled from 'styled-components';

import { devices } from '~/common/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${devices.tablet} {
    flex-direction: row;
    margin: 60px 80px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LeftInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const Right = styled.div`
  display: flex;
`;

export const SmallImg = styled.img`
  height: auto;
  width: 400px;

  @media ${devices.laptop} {
    height: auto;
    width: 250px;
    margin: 10px;
  }
`;

export const BigImg = styled.img`
  height: auto;
  width: 400px;

  @media ${devices.laptop} {
    height: 550px;
    width: 550px;
    margin: 10px;
  }
`;
