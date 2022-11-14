import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './style/main.scss';

function App() {


  return (
    <div className="App">
        <Routes>
          <Route path='/react-portfolio/' element={< Home />}     />
          <Route path='/react-portfolio/about'    element={< About />}    />
          <Route path='/react-portfolio/projects' element={< Projects />} />
          <Route path='/react-portfolio/contact'  element={< Contact />}  />
          <Route path='*' element={< Home />} />
        </Routes>

    </div>
  );
}

export default App;
