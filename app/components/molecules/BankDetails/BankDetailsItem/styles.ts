import styled from 'styled-components';

import { colors, devices } from '~/common/constants';

export const ClipboardCopy = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  background-color: ${colors.offBlack};
  color: ${colors.offWhite};
  padding: 4px 10px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const Text = styled.input`
  text-align: right;
  font-size: 16px;
  border: none;
  background-color: inherit;
  width: 250px;

  @media ${devices.laptop} {
    font-size: 22px;
    width: 350px;
  }
`;
