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
          <Route path='/'         element={< Home />}     />
          <Route path='/about'    element={< About />}    />
          <Route path='/projects' element={< Projects />} />
          <Route path='/contact'  element={< Contact />}  />

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>

    </div>
  );
}

export default App;
