import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Navbar bg="light" expand="lg" fixed='top' className="py-3 shadow-sm bg-white">
          <Container >
            <Navbar.Brand href="/" className="fw-bold fs-2 mx-auto "> Fake Shop BD</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-5 my-lg-0 c-black d-flex fs-4"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <div className='buttons'>
                <a href="#cart" className="btn  btn-outline-dark bg-info me-1 btn_shadow "><FontAwesomeIcon icon={faCartPlus} /> LogIn</a>
                <a href="#cart" className="btn btn-outline-dark bg-info me-1 btn_shadow "><FontAwesomeIcon icon={faCartPlus} /> SignUp</a>
                <a href="#cart" className="btn btn-outline-dark bg-info btn_shadow "><FontAwesomeIcon icon={faCartPlus} /> Cart</a>
              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;