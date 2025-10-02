import './NavBar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';





function NavBar() {
 

  return (
       <div className="navbar-container desktop-menu">
      <Navbar expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">Imanje Solutions</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Home
              </NavLink>
                            <NavLink
                to="/services"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Services
              </NavLink>
                            <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                About
              </NavLink>
                            <NavLink
                to="/portfolio"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </NavLink>
                            <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
