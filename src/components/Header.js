import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
export default function Header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg"></Logo>
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Comunity Your Fans Will Love</h1>
            <p>Something in here</p>
          </div>
        </Flex>

        <Button bg="#ff0099" color="#fff">
          Get Started For Free
        </Button>

        <Image src="./images/illustration-mockups.svg" alt="" />
      </Container>
    </StyledHeader>
  );
}
