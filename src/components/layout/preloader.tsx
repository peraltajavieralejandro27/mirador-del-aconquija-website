import React from 'react';
import '../../assets/scss/preloader.scss';
import '../../assets/scss/animations.scss';
import logoImage from '../../assets/img/LOGO.png';
import {siteData} from "../../data/data";

const Preloader = () => {
  return (
    <div className='preloader' id='preloader'>
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>

      <img
        src={logoImage}
        alt={siteData.title}
        className='img-fluid image-white w-25 preloader-logo breathing-image'
      />
    </div>
  );
};

export default Preloader;