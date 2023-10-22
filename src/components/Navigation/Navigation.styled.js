import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #eac645;
  font-size: 20px;
  font-weight: 700;
`;
