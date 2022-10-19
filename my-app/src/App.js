import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavTabs from './components/navigation/NavTabs'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Talents from './pages/Talents';
import Header from './components/Header';
import Footer from './components/Footer';

// CSS imports
import './styles/bootstrap.min.css'
import './styles/PortfolioContainer.css';
import './styles/Header.css';
import './styles/Section.css';
import './styles/Footer.css';

function App() {
    return (
      <div className="portContainer">
        <header>
          <Header />
          <NavTabs />
        </header>
        {/* Main Content to Display */}
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio />
            }
          />
          <Route
            path="/talents"
            element={
              <Talents />
            }
          />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;