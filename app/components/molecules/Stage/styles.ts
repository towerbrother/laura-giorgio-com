import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, devices } from '~/common/constants';

export const Stage = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 30px;
  color: ${colors.offWhite};
  font-weight: 700;

  @media ${devices.tablet} {
    top: 20px;
  }
`;

export const Title = styled.h2`
  font-style: italic;
  word-spacing: -5px;
  font-size: 28px;

  @media ${devices.tablet} {
    font-size: 44px;
  }

  @media ${devices.laptop} {
    font-size: 62px;
  }
`;

export const SubTitle = styled.h4`
  text-transform: uppercase;
  font-size: 12px;

  @media ${devices.tablet} {
    font-size: 16px;
  }

  @media ${devices.laptop} {
    font-size: 20px;
  }
`;

export const Date = styled.span`
  margin: 10px 0px;
  font-size: 16px;

  @media ${devices.tablet} {
    margin: 20px 0px;
    font-size: 28px;
  }

  @media ${devices.laptop} {
    font-size: 36px;
  }
`;

export const Link = styled(NavLink)`
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  background: ${colors.offWhite};
  color: ${colors.offBlack};
  width: max-content;
  margin: 0 auto;
  font-size: 16px;
  padding: 6px 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.offGray};
  }

  @media ${devices.tablet} {
    font-size: 24px;
    padding: 10px 22px;
  }

  @media ${devices.laptop} {
    font-size: 32px;
    padding: 12px 32px;
  }
`;
