import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parser from 'html-react-parser';
import { render } from 'react-dom';

import BasicExample from './routes.js';
import axios from 'axios';


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isActive: false,
         activePost: 0
      }
      this.setAppState = this.setAppState.bind(this);
   }

   setAppState(newState, callback) {
      this.setState(newState, () => {
         if (this.props.debug) {
            console.log('setAppState', JSON.stringify(this.state));
         }
         if (callback) {
            callback();
         }
      })
   }

   render() {
      return (
         <div className="App">
            <h1 className="heading">
               Cages Blog
            </h1>
            <BasicExample
               isActive={this.state.isActive}
               activePost={this.state.activePost}               
               update={this.setAppState}
            />
         </div>

      );
   }
}
export default App;
