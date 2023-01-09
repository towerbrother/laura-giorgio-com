import { NavLink } from "@remix-run/react";
import styled from "styled-components";

import { colors, devices } from "~/common/constants";

type DirectionProps = {
  direction: "front" | "back";
};

export const Wrapper = styled.div<DirectionProps>`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${colors.offWhite};

  @media ${devices.tablet} {
    flex-direction: ${({ direction }) =>
      direction === "front" ? "row" : "row-reverse"};
    padding: 80px 140px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  @media ${devices.tablet} {
    height: 350px;
    width: 350px;
  }
`;

export const Tile = styled.div<DirectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0px;
  color: ${colors.offBlack};

  @media ${devices.tablet} {
    padding: ${({ direction }) =>
      direction === "front" ? "30px 10px 30px 50px" : "30px 50px 30px 10px"};
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 15px 0px;

  @media ${devices.tablet} {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h4`
  font-style: italic;
  font-weight: 400;
`;

export const Text = styled.p`
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

  @media ${devices.tablet} {
    font-size: 20px;
    padding: 8px 24px;
  }
`;
