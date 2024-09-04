import React, { useEffect, useState } from 'react';
import './App.css'; 

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setIsScrolled(true);
      if (scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    } else {
      setIsScrolled(false);
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className={`container ${isScrolled ? 'scrolled' : ''} ${isSticky ? 'sticky' : ''}`}>
        <img
          src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah2003153.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <h2>Profile</h2>
        <p>Hi, Im Alex.</p>
      </div>
    </div>
  );
};

export default App;