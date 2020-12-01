import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
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
              <h1>About</h1>
            </Route>
            <Route path="/settings">
              <Settings />
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
