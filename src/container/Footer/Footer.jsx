import React from 'react';
import  { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import Newsletter from '../../components/Footer/Newsletter';
import FooterOverlay from '../../components/Footer/FooterOverlay';
import './Footer.css';

const Footer = () => (
  <footer className='app__bg app__footer section__padding'>
    {/* <FooterOverlay /> */}
    <Newsletter />
  </footer>
);

export default Footer;
