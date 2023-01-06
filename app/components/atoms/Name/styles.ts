import styled from "styled-components";
import { devices } from "~/common/constants";

export const Text = styled.span`
  font-style: italic;
  word-spacing: -5px;
  font-size: 32px;

  @media ${devices.tablet} {
    font-size: 36px;
  }
`;
