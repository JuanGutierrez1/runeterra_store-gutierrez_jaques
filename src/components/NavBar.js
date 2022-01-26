import { Container, Nav, Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget"

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
      <CartWidget/>
      </Container>
    </Navbar>
  )
}

export default NavBar