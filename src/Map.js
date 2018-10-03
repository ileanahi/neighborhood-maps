import React from 'react'
import {GoogleApiWrapper} from 'google-maps-react';

const apiKey = 'AIzaSyDGvqIUhorsoAEvjHiF4lGy_MNXIbS9C6A';

class Map extends Component {
    render() {
        return (
            <section aria-labelledby="map-aria-description" role="application">
            <div id="map" ></div>
            <label id="map-aria-description" class="map-aria-description">Google Maps Application</label>
            </section>
        )
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