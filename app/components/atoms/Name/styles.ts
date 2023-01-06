import styled from "styled-components";
import { devices } from "~/common/constants";

export const Text = styled.span`
  font-style: italic;
  font-size: 20px;
  word-spacing: -2px;

  @media ${devices.tablet} {
    font-size: 36px;
    word-spacing: -5px;
  }
`;
