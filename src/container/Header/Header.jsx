import React from 'react';

import { SubHeading } from '../../components/SubHeading';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <header className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper_info">
      <SubHeading />
    </div>

    <div className="app__wraper_img">

    </div>
  </header>
);

export default Header;
