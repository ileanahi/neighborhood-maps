import React, { Component } from 'react';

class VenueInfo extends Component {
  render() {
    return <li>{this.props.venue.name}</li>;
  }
}

export default VenueInfo;
