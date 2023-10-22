import { Container, Text, StyledNavLink } from './Home.styled';
import { CheckIcon } from '@chakra-ui/icons';

export default function HomePage() {
  return (
    <Container>
      <Text>Phonebook</Text>
      <button>
        <StyledNavLink to="/contacts">Lets start</StyledNavLink>
        <CheckIcon color="black"></CheckIcon>
      </button>
    </Container>
  );
}
