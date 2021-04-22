import './App.css';
import React, { useState } from 'react';
import Navigation from './components/Nav';
import About from './components/About'
import Qualifications from './components/Qualifications'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, handlePageChange ]= useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Qualifications':
        return <Qualifications />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
      <Footer />
    </div>
  );
}

export default App;
