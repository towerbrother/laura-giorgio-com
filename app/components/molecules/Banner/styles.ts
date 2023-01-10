import { NavLink } from '@remix-run/react';
import { FaGift } from 'react-icons/fa';
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

export const Headline = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  margin: 15px 0px;

  @media ${devices.laptop} {
    font-size: 36px;
    margin: 20px 0px;
  }
`;

export const Icon = styled(FaGift)`
  font-size: 64px;
  margin-bottom: 20px;
  color: ${colors.offBlack};
`;

export const Paragraph = styled.p`
  text-align: center;
  max-width: 400px;
`;

export const Link = styled(NavLink)`
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  background: ${colors.offBlack};
  color: ${colors.offWhite};
  width: max-content;
  font-size: 16px;
  padding: 8px 16px;
  margin: 30px 0px 0px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.offWhite};
    color: ${colors.offBlack};
  }

  @media ${devices.laptop} {
    font-size: 20px;
    padding: 8px 24px;
  }
`;
