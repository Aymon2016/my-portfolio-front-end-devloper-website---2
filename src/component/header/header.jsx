import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../Asset/img/222.png'
import './header.css'
function Header() {
  return (
    <Navbar bg="light fixed-top" expand="lg">
      <Container>
        <div className='d-flex'>
          <img src={logo} alt='logo' className='logo ' />
          <h1 className='logoName'>AYMON</h1>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/project">PROJECT</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;