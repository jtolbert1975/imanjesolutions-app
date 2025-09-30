import './NavBarMobile.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function NavBarMobile() {
const [expanded, setExpanded] = useState(false);
  const handleNavClick = () => setExpanded(false);

  return (
    // mobile menu
        <div className="navbar-container mobile-menu">   
         <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
          <Container>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Link className="nav-link" to="/" onClick={handleNavClick}>Home</Link>
             <Link className="nav-link" to="/about" onClick={handleNavClick}>About</Link>
             <Link className="nav-link" to="/services" onClick={handleNavClick}>Services</Link>
             <Link className="nav-link" to="/portfolio" onClick={handleNavClick}>Portfolio</Link>
             <Link className="nav-link" to="/contact" onClick={handleNavClick}>Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
      </div>
  );
}

export default NavBarMobile;
