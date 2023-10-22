import { Container } from './AuthNav.styled';
import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <StyledNavLink to="/register">Sign Up</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </Container>
  );
};
