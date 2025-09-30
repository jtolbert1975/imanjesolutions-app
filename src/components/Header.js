import logo from '../imanjeSolutionsLogo2.svg';
import './Header.css';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="App-header">
        <div className="app-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="app-title-container">
          <h1 className="app-title">Imanje Solutions</h1>
          <p className="app-subtitle">Innovative IT Solutions for Modern Businesses</p>
        </div>
        <NavBar />    
      </header>
  );
}

export default Header;
