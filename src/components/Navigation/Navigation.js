import { Wrapper } from './Navigation.styled';
import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </Wrapper>
  );
};
