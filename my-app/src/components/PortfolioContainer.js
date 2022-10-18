import React, {useState} from 'react';
import NavTabs from './navigation/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
// Commit before ruining all logic lol
// CSS imports
import '../styles/bootstrap.min.css'
import '../styles/PortfolioContainer.css';
import '../styles/Header.css';
import '../styles/Section.css';
import '../styles/Footer.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

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
        {renderSectionPage()}
        <Footer />
      </div>
  );
}