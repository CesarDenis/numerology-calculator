import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">
            Welcome to the <span>Numerology</span> <strpng>Calculator</strpng>
          </h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
