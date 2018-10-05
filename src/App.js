import React, { Component } from 'react';
import './App.css';
import Map from './Map';

import axios from 'axios';

// Borrowed code from Google Maps Tutorial https://developers.google.com/maps/documentation/javascript/adding-a-google-map

class App extends Component {
  state = {
    venues: []
  };

  componentDidMount() {
    this.getVenues();
    this.loadMap();
  }

  // Initialize map with options
  initMap = () => {
    let options = {
      zoom: 16,
      center: { lat: 19.64, lng: -155.9969 }
    };

    let markerPosition = {
      lat: 19.6387942,
      lng: -155.9929063
    };

    const map = new window.google.maps.Map(
      document.getElementById('map'),
      options
    );
    let marker = new window.google.maps.Marker({
      position: markerPosition,
      map
    });
  };

  // Load map and attach initMap to window
  loadMap = () => {
    // So window can access initMap function
    window.initMap = this.initMap;

    const apiKey = 'AIzaSyDGvqIUhorsoAEvjHiF4lGy_MNXIbS9C6A';
    let url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;

    scriptLoader(url);
  };

  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      // Client ID and Client Secret are required
      client_id: 'D2KNFN3USEB03QZX4XQOLHPS30PRMP3BT2ZPEC0NULIWMA4Z',
      client_secret: 'JX531KEPYP0KWZSLVBHXYP1CFBTXDVJGJWV5E2BOXJU4BWGP',
      query: 'food',
      near: 'Kailua-Kona',
      v: '20182507'
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('ERROR: ' + error);
      });
  };

  render() {
    return (
      <main>
        <Map />
      </main>
    );
  }
}

// Make a new script tag with src and insert it before existing script tags
function scriptLoader(url) {
  let index = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;

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
