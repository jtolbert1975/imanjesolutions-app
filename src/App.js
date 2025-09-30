import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactUsPage from './pages/ContactUsPage';
import ContactBar from './components/ContactBar';
import Header from './components/Header';
import ServicesDetails from './pages/ServicesDetails';




function App() {
  return (
    <HelmetProvider>
     <div className="App">
      <div className="App-body">
        <ContactBar />
        <Header />
        <main className="App-main">
            {/* <HomePage /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
               <Route path="/servicesdetails/:id" element={<ServicesDetails />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
            
        </main>
    </div>
        <footer className="App-footer">
          <div className="App-footer-content">
            <p>
              Imanje Solutions &copy; 2025. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
