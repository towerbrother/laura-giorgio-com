import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  background-color: ${colors.offWhite};

  @media ${devices.tablet} {
    padding: 40px;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    padding: 60px;
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

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const Right = styled.div`
  display: flex;
`;

export const SmallImg = styled.img`
  height: auto;
  width: 320px;
  margin: 10px;
  border-radius: 3px;

  @media ${devices.tablet} {
    width: 550px;
  }

  @media ${devices.laptop} {
    width: 200px;
  }

  @media ${devices.laptopL} {
    width: 250px;
  }
`;

export const BigImg = styled.img`
  height: auto;
  width: 320px;
  margin: 10px;
  border-radius: 3px;

  @media ${devices.tablet} {
    width: 550px;
  }

  @media ${devices.laptop} {
    width: 420px;
  }

  @media ${devices.laptopL} {
    width: 520px;
  }
`;
