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
        <Route exact path="/Contact" element={<Contact/>} />
        <Route  exact path="/Projects" element={<Projects />} />
        <Route exact path ='/' element={<Home />} />
       </Routes>
     </Router>
    
  );
}

export default App;
