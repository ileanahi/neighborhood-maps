import React from 'react'
import {GoogleApiWrapper} from 'google-maps-react';

const apiKey = 'AIzaSyDGvqIUhorsoAEvjHiF4lGy_MNXIbS9C6A';

class Map extends Component {
    render() {
        return (
            <h1>My Google Map</h1>
  <div id="map"></div>
        );
    }
}

function initMap() {
    let options = {
      zoom: 8,
      center: { lat: 19.6400, lng: 155.9969 }
    }

    let map = new google.maps.Map(document.getElementById('map'), options);
  }

export default Map;