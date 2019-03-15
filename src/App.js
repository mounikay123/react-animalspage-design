import React, { Component } from 'react';
import DemoCarousel from './header';
import AboutCreator from './aboutCreator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DemoCarousel />
        <AboutCreator />
      </div>
    );
  }
}

export default App;
