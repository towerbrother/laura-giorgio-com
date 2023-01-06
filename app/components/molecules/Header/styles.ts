import styled from "styled-components";

import { devices } from "~/common/constants";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 80px;

  @media ${devices.tablet} {
    height: 100px;
  }
`;
