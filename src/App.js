import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parser from 'html-react-parser';
import { render } from 'react-dom';

import BasicExample from './routes.js';
import axios from 'axios';

class App extends Component {

  
  render() {

    return (
      <div className="App">
    <h1 className="heading">
  Cages Blog
    </h1>
   <BasicExample />
    </div>

    );
  }
}
export default App;
