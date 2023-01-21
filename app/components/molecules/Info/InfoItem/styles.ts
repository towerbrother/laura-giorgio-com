import { FaCalendar, FaChurch, FaMusic } from 'react-icons/fa';
import styled from 'styled-components';

import { colors } from '~/utils/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
`;

export const CalendarIcon = styled(FaCalendar)`
  font-size: 42px;
  margin-bottom: 20px;
  color: ${colors.offBlack};
`;

export const ChurchIcon = styled(FaChurch)`
  font-size: 42px;
  margin-bottom: 20px;
  color: ${colors.offBlack};
`;

export const PartyIcon = styled(FaMusic)`
  font-size: 42px;
  margin-bottom: 20px;
  color: ${colors.offBlack};
`;

export const Title = styled.h4`
  text-align: center;
  font-size: 16px;
  margin: 5px 0px;
`;

export const Text = styled.p`
  text-align: center;
  margin: 5px 0px;
  max-width: 250px;
`;

export const DateTime = styled.p`
  margin: 5px 0px;
`;
