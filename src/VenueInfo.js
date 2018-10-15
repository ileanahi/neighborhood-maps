import React, { Component } from 'react';

class VenueInfo extends Component {
  render() {
    this.props && console.log(this.props.venues);
    return null;
  }
}

export default VenueInfo;
