import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavTabs from './components/navigation/NavTabs'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Talents from './pages/Talents';
import Resume from './pages/Resume';
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
            path="/portfolio/about"
            element={
              <About />
            }
          />
          <Route
            path="/portfolio/projects"
            element={
              <Portfolio />
            }
          />
          <Route
            path="/portfolio/talents"
            element={
              <Talents />
            }
          />
          <Route
            path="/portfolio/resume"
            element={
              <Resume />
            }
          />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;