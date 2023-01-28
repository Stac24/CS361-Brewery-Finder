import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <div>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/faq">
              <Faq/>
            </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
