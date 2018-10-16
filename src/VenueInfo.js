import React, { Component } from 'react';

class VenueInfo extends Component {
  render() {
    // Returns Venue Name
    return (
      <li
        aria-label={`${this.props.venue.name} ${
          this.props.venue.location.formattedAddress
        }`}
        tabIndex="0"
        onClick={() => this.props.listItemClick(this.props)}
        onKeyPress={() => this.props.listItemClick(this.props)}
      >
        {this.props.venue.name}
      </li>
    );
  }
}

export default VenueInfo;
