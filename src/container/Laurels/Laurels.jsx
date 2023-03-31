import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import MenuItem from '../../components/MenuItem/MenuItem';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({title, imgUrl, subtitle}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color: '#DCCA87'}}>
        {title}
      </p>

      <p className="p__cormorant">
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <section className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">
        Our Laurels
      </h1>

      <div className="app__laurels_awards">
        {data.awards.map((award, index) => <AwardCard title={award.title} imgUrl={award.imgUrl} subtitle={award.subtitle} key={award.title + index}  />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </section>
);

export default Laurels;
