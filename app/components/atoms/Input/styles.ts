import styled from 'styled-components';
import { devices } from '~/common/constants';

export const Input = styled.input`
  border: none;
  background: transparent;
`;

export const Label = styled.label`
  font-size: 12px;

  @media ${devices.laptop} {
    font-size: 16px;
  }
`;
