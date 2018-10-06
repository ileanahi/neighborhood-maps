import React from 'react';

const Map = props => {
  return (
    <section aria-labelledby="map-aria-description" role="application">
      <div id="map" />
      <label id="map-aria-description" className="map-aria-description">
        Google Maps Application
      </label>
    </section>
  );
};

export default Map;
