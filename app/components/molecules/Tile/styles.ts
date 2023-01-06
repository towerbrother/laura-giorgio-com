import styled from "styled-components";
import { colors, devices } from "~/common/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${colors.offWhite};

  @media ${devices.tablet} {
    flex-direction: row;
    padding: 80px;
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

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0px;
  color: ${colors.offBlack};

  @media ${devices.tablet} {
    padding: 30px 10px 30px 60px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 20px 0px;

  @media ${devices.tablet} {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h4`
  font-style: italic;
  font-weight: 400;
`;

export const Text = styled.p``;
