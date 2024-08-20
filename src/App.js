// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/" className="logo">Motheo.dev</Link>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                {/* Link directly to the PDF file */}
                <li><a href="/swe_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              {/* No need to define a route for Resume */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
