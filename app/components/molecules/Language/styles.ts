import { FaLanguage } from 'react-icons/fa';
import styled from 'styled-components';
import { colors, devices } from '~/utils/constants';
import Button from '~/components/atoms/Button';

export const Container = styled.div`
  position: relative;
  top: 4px;
  right: 50px;

  @media ${devices.laptop} {
    right: 0px;
  }
`;

export const ButtonIcon = styled(Button)`
  position: relative;
  z-index: 32;
`;

export const Icon = styled(FaLanguage)`
  font-size: 48px;
`;

export const FormWrapper = styled.div`
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
    align-items: center;
    opacity: 1;
    height: auto;
  }
`;

export const Option = styled(Button)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
`;
