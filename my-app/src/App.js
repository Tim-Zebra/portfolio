import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavTabs from './navigation/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Talents from './pages/Talents';
import Header from './Header';
import Footer from './Footer';

// CSS imports
import '../styles/bootstrap.min.css'
import '../styles/PortfolioContainer.css';
import '../styles/Header.css';
import '../styles/Section.css';
import '../styles/Footer.css';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Displays current page
  const renderSectionPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
      <div className="portContainer">
        <header>
          <Header />
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
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