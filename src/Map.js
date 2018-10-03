import React from 'react'
import {GoogleApiWrapper} from 'google-maps-react';


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


export default Map;