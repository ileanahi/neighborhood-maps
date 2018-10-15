import React, { Component } from 'react';
import './App.css';
import Map from './Map';

import axios from 'axios';
import SideDrawer from './SideDrawer';

// Borrowed code from Google Maps Tutorial https://developers.google.com/maps/documentation/javascript/adding-a-google-map

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      isSidebarOn: true,
      query: '',
      markers: []
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    this.getVenues();
  }

  // Initialize map with options
  initMap = () => {
    let options = {
      zoom: 16,
      center: { lat: 19.64, lng: -155.9969 }
    };

    let map = new window.google.maps.Map(
      document.getElementById('map'),
      options
    );

    // Create info window for markers
    let infowindow = new window.google.maps.InfoWindow();

    this.state.venues.map(place => {
      // Make markers for each venue
      let marker = new window.google.maps.Marker({
        position: {
          lat: place.venue.location.lat,
          lng: place.venue.location.lng
        },
        map: map,
        animation: window.google.maps.Animation.DROP,
        id: place.venue.id
      });

      // Content of info window
      let contentString = `<h2>${place.venue.name}</h2><br />
      <address>${place.venue.location.formattedAddress[0]}<br />
      ${place.venue.location.formattedAddress[1]}</address>`;

      // Attach an event listener so the info window opens when clicked
      marker.addListener('click', () => {
        // Makes marker bounce when clicked
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        window.setTimeout(() => marker.setAnimation(null), 2000);

        map.setCenter(marker.position);

        // Change content in info window
        infowindow.setContent(contentString);

        // Open an info window
        infowindow.open(map, marker);
      });

      // Push markers into marker state
      this.state.markers.push(marker);
    });
  };

  // Load map and attach initMap to window
  loadMap = () => {
    const apiKey = 'AIzaSyDGvqIUhorsoAEvjHiF4lGy_MNXIbS9C6A';
    let url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;

    scriptLoader(url);

    // So window can access initMap function
    window.initMap = this.initMap;
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
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.loadMap()
        );
      })
      .catch(error => {
        console.log('ERROR: ' + error);
        alert(
          'Foursquare API failed to load. Please check your internet connection and refresh the page. ',
          error
        );
      });
  };

  toggleSidebar = () => {
    this.setState(state => ({
      isSidebarOn: !state.isSidebarOn
    }));
    let sideDrawer = document.getElementById('side-drawer');
    if (this.state.isSidebarOn) {
      sideDrawer.classList.add('no-display');
    } else {
      sideDrawer.classList.remove('no-display');
    }
  };

  listItemClick = place => {
    console.log(place.venue.id);
    const marker = this.state.markers.find(
      marker => marker.id === place.venue.id
    );
    window.google.maps.event.trigger(marker, 'click');
  };

  render() {
    console.log(this.state.markers);
    return (
      <div className="container">
        <header>
          <nav>
            <button id="hamburger" onClick={this.toggleSidebar}>
              <i className="fas fa-bars fa-2x" />
            </button>
            <h2 id="header-text">Neighborhood Map</h2>
          </nav>
        </header>
        <main>
          <SideDrawer {...this.state} listItemClick={this.listItemClick} />
          <Map />
        </main>
      </div>
    );
  }
}

// Make a new script tag with src and insert it before existing script tags
function scriptLoader(url) {
  const index = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');

  // Error if script throws an error
  script.onerror = () => {
    window.alert('Google Maps API failed to load.');
  };

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
