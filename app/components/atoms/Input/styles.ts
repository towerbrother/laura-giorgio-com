import styled from 'styled-components';
import { devices } from '~/common/constants';

export const Input = styled.input`
  border: none;
  background: transparent;
`;

export const Label = styled.label`
  font-size: 11px;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;
