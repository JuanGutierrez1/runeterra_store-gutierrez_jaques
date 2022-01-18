import { Container, Nav, Navbar } from "react-bootstrap"

const NavBar = ({brand, list = []}) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">{brand}</Navbar.Brand>
      <Nav className="me-auto">
        {list.map(el => 
          <Nav.Link href={`#${el.title}`} key={el.title}>{el.title}</Nav.Link>
        )}
      </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar