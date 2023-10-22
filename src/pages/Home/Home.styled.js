import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.h1`
  font-size: 80px;

  font-weight: 700;
`;

export const StyledNavLink = styled(NavLink)`
  color: #eac645;
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
`;
