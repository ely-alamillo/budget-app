import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Footer />
      </div>
    );
  }
}

export default App;
