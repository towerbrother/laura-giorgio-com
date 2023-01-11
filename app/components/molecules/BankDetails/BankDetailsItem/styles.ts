import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const ClipboardCopy = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 8px;

  @media ${devices.tablet} {
    padding: 12px;
  }
`;

type ButtonTextProps = {
  $isCopied: boolean;
  $isError: boolean;
};

export const ButtonText = styled.span<ButtonTextProps>`
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  background-color: ${({ $isCopied, $isError }) =>
    $isCopied ? colors.offGreen : $isError ? colors.offRed : colors.offBlack};
  color: ${colors.offWhite};
  padding: 4px 10px;
  border: 1px solid black;
  border-radius: 8px;

  @media ${devices.tablet} {
    margin-left: 20px;
  }
`;

export const Text = styled.input`
  text-align: right;
  font-size: 16px;
  border: none;
  background-color: inherit;
  width: 220px;

  @media ${devices.tablet} {
    font-size: 22px;
    width: 350px;
  }
`;
