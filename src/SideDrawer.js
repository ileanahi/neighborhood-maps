import React from 'react';
import VenueInfo from './VenueInfo';

const SideDrawer = props => {
  return (
    <section id="side-drawer">
      <input
        aria-label="Filter Venues"
        placeholder="Filter Venues"
        className="filter"
      />
      <ul id="places">
        {/*props.places.venue
        .map(place => (
          <li key={place.id} >
            <h2>${place.name}</h2>
          </li>
        )) */}
      </ul>
    </section>
  );
};

export default SideDrawer;

// For venues in list, make li element with relevant text
