import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SettingsProvider from './components/SettingsProvider';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Debug from './components/Debug';
import WindsAloft from './components/WindsAloft';

function App() {
  return (
    <SettingsProvider>
      <Router>
        <div id='App'>
          <div id='Header'>
            <Header />
          </div>
          <div id='Main'>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/menu'>
                <Menu />
              </Route>
              <Route path='/debug'>
                <Debug />
              </Route>
              <Route path='/'>
                <WindsAloft />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </SettingsProvider>
  );
}

export default App;
