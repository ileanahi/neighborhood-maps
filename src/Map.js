import React, { Component } from 'react';


class Map extends Component {
    render() {
        return (
            <section aria-labelledby="map-aria-description" role="application">
            <div id="map" ></div>
            <label id="map-aria-description" className="map-aria-description">Google Maps Application</label>
            </section>
        )
    }
}


export default Map;