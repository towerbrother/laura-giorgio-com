import styled from 'styled-components';

type OverlayElementProps = {
  $backgroundColor: string;
};

export const Element = styled.div<OverlayElementProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: none;
  position: fixed;
  z-index: 30;
  inset: 0;

  &.show {
    display: block;
  }
`;
