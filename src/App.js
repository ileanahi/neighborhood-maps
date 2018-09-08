import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const apiKey = 'AIzaSyDGvqIUhorsoAEvjHiF4lGy_MNXIbS9C6A';

/**
 * Requirements:
 * Map
 * Text input/dropdown menu that filters
 * map markers and list items to locations
 * matching input or selection
 * List view of location names
 * Clicking location displays info about
 * location and animates
 * Modal, div or infoWindow
 * Google Maps API or another mapping system
 * & another non-Google third-party API
 * All data retrieved in async manner
 * If API doesn't load, there should be an
 * indication that it didn't load
 * Focus is managed to allow users to tab through
 * Elements use appropriate semantics
 * Alt image tags
 * At least 5 locations in the model
 */