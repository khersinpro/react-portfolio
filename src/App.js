import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/includes/Navbar';
import Footer from './components/includes/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './style/main.scss';

function App() {


  return (
    <div className="App">
      < Navbar />
        <Routes>
          <Route path='react-portfolio/' element={< Home />}     />
          <Route path='react-portfolio/about'    element={< About />}    />
          <Route path='react-portfolio/projects' element={< Projects />} />
          <Route path='react-portfolio/contact'  element={< Contact />}  />
          <Route path='*' element={< Home />} />
        </Routes>
        < Footer />
    </div>
  );
}

export default App;
