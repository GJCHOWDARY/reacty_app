import React from 'react';
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer'
import Profile from './profile/profile'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (    
  <Router>
    <div className="App">
      <Header />
      <Switch>
              <Route exact path='/' component={Home} />
              <Route  exact path='/profile' component={Profile} />
           </Switch>
      <Footer />
    </div>
      </Router>
  );
}

export default App;
