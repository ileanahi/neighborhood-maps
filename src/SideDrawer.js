import React from 'react';
import VenueInfo from './VenueInfo';

const SideDrawer = props => {
  return (
    <section id="side-drawer">
      <input
        aria-label="Filter Venues"
        placeholder="Filter Venues"
        className="filter"
        type="search"
      />
      <ul id="places">
        {console.log(props.places)
        /* this.props.places.venue
        .map(place => (
          <li key={place.id} >
            <h2>${place.name}</h2>
          </li>
        ))
        <li key={props.places.venue[0].id}>
          <h2>${props.places.venue[0].name}</h2>
        </li>
        */
        }
      </ul>
    </section>
  );
};

export default SideDrawer;

// For venues in list, make li element with relevant text
