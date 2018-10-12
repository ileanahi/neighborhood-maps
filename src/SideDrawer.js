import React from 'react';
import VenueInfo from './VenueInfo';

const SideDrawer = props => {
  return (
    <section id="side-drawer">
      <input aria-label="Filter Venues" placeholder="Filter Venues" value />
      <ul id="places">
        <VenueInfo place={props.places} />
      </ul>
    </section>
  );
};

export default SideDrawer;

// For venues in list, make li element with relevant text
