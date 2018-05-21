import React, { Component } from 'react';
import Typekit from 'react-typekit';
import './App.css';

import Form from './Form';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__content">
          <header className="App__header">
            <h1 className="App__title">
              Welcome to the <span>Numerology</span> <strong>Calculator</strong>
            </h1>
          </header>
          <Form />
        </div>
        <Footer />
        <Typekit kitId="xwz0iog" />
      </div>
    );
  }
}

export default App;
