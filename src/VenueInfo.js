import React from 'react';

const VenueInfo = props => {
  return (
    <div className="venue-info">
      `<h2>${props.place.venue.name}</h2>`
    </div>
  );
};

export default VenueInfo;
