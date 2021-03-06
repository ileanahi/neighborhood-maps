import React, { Component } from 'react';
import VenueInfo from './VenueInfo';

class SideDrawer extends Component {
  render() {
    return (
      <section id="side-drawer" aria-label="Venue List">
        <input
          aria-label="Filter Venues"
          placeholder="Filter Venues"
          className="filter"
          type="search"
          onChange={e => this.props.searchFilter(e.target.value)}
        />
        <ul id="places">
          {// Maps over venues and gives them a key and passes the venue information
          this.props.filteredVenues &&
            this.props.filteredVenues.map((place, index) => (
              <VenueInfo
                key={index}
                {...place}
                listItemClick={this.props.listItemClick}
              />
            ))}
        </ul>
      </section>
    );
  }
}

export default SideDrawer;

// For venues in list, make li element with relevant text
