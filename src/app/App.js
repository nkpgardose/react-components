import React, { Component } from 'react';
import ComponentContainer from './../component-container/ComponentContainer';
import Sidebar from './../sidebar/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title">List of Components</h1>
        <p className="Headline">Sidebar</p>
        <ComponentContainer>
          <Sidebar>
            <nav className="List">
              <a className="item" href="#">Home</a>
              <a className="item" href="#">About</a>
              <a className="item" href="#">Help</a>
              <a className="item" href="#">Contact</a>
            </nav>
          </Sidebar>
        </ComponentContainer>
      </div>
    );
  }
}

export default App;
