import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import WindsAloft from './components/WindsAloft';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="Main">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/">
              <WindsAloft />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
