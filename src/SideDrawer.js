import React, { Component } from 'react';
import VenueInfo from './VenueInfo';

class SideDrawer extends Component {
  render() {
    return (
      <section id="side-drawer">
        <input
          aria-label="Filter Venues"
          placeholder="Filter Venues"
          className="filter"
          type="search"
        />
        <ul id="places">
          {this.props.venues &&
            this.props.venues.map((venue, index) => (
              <VenueInfo key={index} {...venue} />
            ))}
          <li>Hello World.</li>
        </ul>
      </section>
    );
  }
}

export default SideDrawer;

// For venues in list, make li element with relevant text
