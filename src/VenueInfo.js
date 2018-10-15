import React, { Component } from 'react';

class VenueInfo extends Component {
  render() {
    // Returns Venue Name
    return (
      <li onClick={() => this.props.listItemClick(this.props)}>
        {this.props.venue.name}
      </li>
    );
  }
}

export default VenueInfo;
