import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer'
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About></About>;
      case 'Portfolio':
        return <Project></Project>;
      case 'Contact':
        return <Contact></Contact>;
      case 'Resume':
        return <Resume></Resume>;
      default:
        return <About></About>
    }
  }

  return (
    <>
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
      <main>
        {renderPage(currentPage)}
      </main>
      
    </div>
    <Footer></Footer>
    </>
  )
}

export default App;
