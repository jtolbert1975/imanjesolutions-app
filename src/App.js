import logo from './imanjeSolutionsLogo2.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { FadeInItem } from './services/utils';


function App() {
  const [expanded, setExpanded] = useState(false);
  const handleNavClick = () => setExpanded(false);
  // const closeMenu = () => setExpanded(false);
  return (
    <div className="App">
     <div className="App-body">
        <div className="contact-bar">
          <div className="phone-info"><a href="tel:+14702612528"><i className="bi bi-telephone-fill"></i><span className='phone-number'>(470) 261 - 2528</span></a></div>
          <div className='email-info'><a href="mailto:info@imanjesolutions.com"><i className="bi bi-envelope-fill"></i><span className='email-address'>info@imanjesolutions.com</span></a></div>
          {/* mobile menu */}
        <div className="navbar-container mobile-menu">   
         <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
          <Container>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link href="#home" onClick={handleNavClick}>Home</Nav.Link>
             <Nav.Link href="#about" onClick={handleNavClick}>About</Nav.Link>
             <Nav.Link href="#services" onClick={handleNavClick}>Services</Nav.Link>
             <Nav.Link href="#gallery" onClick={handleNavClick}>Gallery</Nav.Link>
             <Nav.Link href="#contact" onClick={handleNavClick}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
      </div>
        </div>
      <header className="App-header">
        <div className="app-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="app-title-container">
          <h1 className="app-title">Imanje Solutions</h1>
          <p className="app-subtitle">Innovative IT Solutions for Modern Businesses</p>
        </div>
     <div className="navbar-container desktop-menu">   
     <Navbar expand="lg">
      <Container>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      </header>
      <main className="App-main">
        <section id="home" className="app-section section-home">
          <h2>Welcome to Imanje Solutions</h2>
          <p>Your trusted partner for cutting-edge IT solutions. We specialize in delivering innovative technology services that drive business success.</p>
          <a href="tel:+14702612528" className="contact-button">
            <div className="home-chat-button"><span>Chat With Us</span></div>
          </a>
        </section>
        <section id="capabilities" className="app-section section-capabilities">
          <h2>What We Can Do For You</h2>
          <p>We offer a wide range of IT services to meet your business needs, including software development, cloud solutions, and IT consulting.</p>
          <div className="card-home card-1">
            <img src="/images/search-engine-optimization-sml.webp" alt="SEO Services" className='card-img' />
            <h2 className="card-title">Search Engine Optimization (SEO)</h2>
            <ul className="card-list">
              <FadeInItem delay={0.1}><li><span className="card-list-item">Keyword Research</span></li></FadeInItem>
              <FadeInItem delay={0.2}><li><span className="card-list-item">On-Page Optimization</span></li></FadeInItem>
              <FadeInItem delay={0.3}><li><span className="card-list-item">Link Building</span></li></FadeInItem>
              <FadeInItem delay={0.4}><li><span className="card-list-item">Content Strategy</span></li></FadeInItem>
              <FadeInItem delay={0.5}><li><span className="card-list-item">Technical SEO</span></li></FadeInItem>
            </ul>
          </div>
          <div className="card-home card-2">
            <img src="/images/laptop-computer-icons-sm.webp" alt="Web Development Services" className='card-img' />
            <h2 className="card-title">Custom Web Design and Development</h2>
            <ul className="card-list">
              <FadeInItem delay={0.1}><li><span className="card-list-item">Custom Website Design</span></li></FadeInItem>
              <FadeInItem delay={0.2}><li><span className="card-list-item">E-commerce Solutions</span></li></FadeInItem>
              <FadeInItem delay={0.3}><li><span className="card-list-item">Content Management Systems (CMS)</span></li></FadeInItem>
              <FadeInItem delay={0.4}><li><span className="card-list-item">Responsive Design</span></li></FadeInItem>
              <FadeInItem delay={0.5}><li><span className="card-list-item">Website Maintenance</span></li></FadeInItem>
            </ul>
          </div>
          <div className="card-home card-3">
            <img src="/images/social-media-marketing-sm.webp" alt="Digital Marketing Services" className='card-img' />
            <h2 className="card-title">Digital Marketing</h2>
            <ul className="card-list">
              <FadeInItem delay={0.1}><li><span className="card-list-item">Social Media Management</span></li></FadeInItem>
              <FadeInItem delay={0.2}><li><span className="card-list-item">Email Marketing</span></li></FadeInItem>
              <FadeInItem delay={0.3}><li><span className="card-list-item">Pay-Per-Click (PPC) Advertising</span></li></FadeInItem>
              <FadeInItem delay={0.4}><li><span className="card-list-item">Content Marketing</span></li></FadeInItem>
              <FadeInItem delay={0.5}><li><span className="card-list-item">Analytics and Reporting</span></li></FadeInItem>
            </ul>
          </div>
        </section>
      </main>
   </div>
      <footer className="App-footer">
        <div className="App-footer-content">
          <p>
            Imanje Solutions &copy; 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
