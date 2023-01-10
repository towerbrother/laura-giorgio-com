import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '~/common/constants';

type SidebarProps = {
  isOpen: boolean;
};

export const Sidebar = styled.aside<SidebarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  z-index: 10;
  background: ${colors.offBlack};
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  padding: 16px 0px;
  font-size: 20px;
  color: ${colors.offWhite};
`;

export const SidebarButtonLink = styled(NavLink)`
  transition: all 0.2s ease-in-out;
  border-radius: 50px;
  background: ${colors.primaryBackground};
  color: ${colors.offWhite};
  margin: 20px 0;
  padding: 12px 30px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.offWhite};
    color: ${colors.primaryBackground};
  }
`;
