import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import MenuItem from '../../components/MenuItem/MenuItem';

import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <section className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you Palette" />
      <h1 className="headtext__cormorant">
        Today's Special
      </h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>
          Wine & Beer
        </p>

        <div className="app__specialMenu_menu_items">
          
          {data.wines.map((wine, index) => (
            <MenuItem key= {wine.title + index} tags={wine.tags} title={wine.title} price={wine.price} />
          ))}
          
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="cocktail shaker" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>
          Cocktails
        </p>

        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} tags={cocktail.tags} price={cocktail.price} title={cocktail.title}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
      <button type="button" className='custom__button'>
        View More
      </button>
    </div>
  </section>
);

export default SpecialMenu;
