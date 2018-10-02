import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
 * TO-DO:
 * Location filter - text input or dropdown that filters map markers and list items
 * List view of all location names which lists all by default and filters when a filter is applied
 * Clicking location displays unique information about the location (modal, div, info window) and animates map marker
 * Map displays all location markers by default
 * Uses Google Maps API and at least one non-Google Third-party API
 * All Data requests are retrieved in an asynchronous manner using Fetch API or XMLHttpRequest
 * Error handling - AJAX error or fail methods (visual indication that API didn't load)
 * Provide Attribution for source of additional data
 * Focus is appropriately managed
 * Elements use semantic elements and ARIA roles are defined
 * Alternate text describes content of images
 * Site uses service worker
 * State control managed appropriately - event handlers passed as props, and state is managed by parent components
 * At least 5 locations in the model - hard coded or retrieved from a data API
 */


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