import React from 'react';

import './MenuItem.css';

const MenuItem = ({tags, title, price}) => (
  <div className='app__menuItem'>
    <div className="app__menuItem-head">
      <div className="app__menuItem-name">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>
          {title}
        </p>
      </div>

      <span className='app__menuItem-decoration'></span>

      <div className="app__menuItem-price">
        <p className="p__cormorant">
          {price}
        </p>
      </div>
    </div>

    <div className="app__menuItem-sub">
      <p className="p__opensans" style={{color: '#888'}}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
