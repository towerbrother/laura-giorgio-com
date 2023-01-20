import { Form as RemixForm } from '@remix-run/react';
import { FaLanguage } from 'react-icons/fa';
import styled from 'styled-components';
import { colors, devices } from '~/common/constants';
import Button from '~/components/atoms/Button';

export const Container = styled.div`
  position: relative;
  z-index: 32;
  top: 4px;
  right: 50px;

  @media ${devices.laptop} {
    right: 0px;
  }
`;

export const Icon = styled(FaLanguage)`
  font-size: 48px;
`;

export const Form = styled(RemixForm)`
  opacity: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
  z-index: 32;
  right: -8px;
  padding: 10px 15px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: ${colors.offWhite};
  transition: opacity 0.3s ease-in;

  &.active {
    display: flex;
    flex-direction: column;
    opacity: 1;
    height: auto;
  }
`;

export const Option = styled(Button)`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
`;
