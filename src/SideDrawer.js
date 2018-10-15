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
          {this.props.venues && console.log(this.props.name)
          /* (props.venues && props.venues
        .map((venue, index) => (
          <li key={index} >
            <h2>${venue.venues.name}</h2>
          </li>
        ))) */
          }
          <li>Hello World.</li>
          {<VenueInfo {...this.props} />}
        </ul>
      </section>
    );
  }
}

export default SideDrawer;

// For venues in list, make li element with relevant text
