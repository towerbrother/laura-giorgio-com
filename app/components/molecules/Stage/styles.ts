import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "~/common/constants";
import { devices } from "./../../../common/constants";

export const Stage = styled.div`
  position: relative;
`;

export const Image = styled.img``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  height: 50%;
  padding: 0px 10px;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.offBlack};
  font-weight: 700;

  @media ${devices.tablet} {
    height: 30%;
  }
`;

export const Name = styled.span`
  font-size: 36px;
  word-spacing: -5px;

  @media ${devices.tablet} {
    font-size: 68px;
  }
`;

export const Text = styled.span`
  font-size: 12px;
  text-transform: uppercase;

  @media ${devices.tablet} {
    font-size: 20px;
  }
`;

export const Date = styled.span`
  font-size: 16px;

  @media ${devices.tablet} {
    font-size: 32px;
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
  padding: 6px 8px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.offGray};
  }

  @media ${devices.tablet} {
    font-size: 32px;
    padding: 8px 15px;
  }
`;
