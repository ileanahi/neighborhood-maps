import React from 'react';

const SideDrawer = props => {
  return (
    <section>
      <input aria-label="Filter Venues" placeholder="Filter Venues" value />
      <ul id="places" />
    </section>
  );
};

export default SideDrawer;
