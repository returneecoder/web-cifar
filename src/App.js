import React from 'react'
import NavMenu from './components/NavMenu';

import { BrowserRouter as Router,Route, Routes }
  from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'


function App() {
  return (
    
      <Router>
        <NavMenu/>
        <Routes>
        <Route  path="/About" element={<About />} />
        <Route  path="/Contact" element={<Contact/>} />
        <Route  path="/Projects" element={<Projects />} />
        <Route path ='/' element={<Home />} />
       </Routes>
     </Router>
    
  );
}

export default App;
