import React from 'react';
import '../../assets/scss/preloader.scss';
import '../../assets/scss/animations.scss';
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
        src='https://drive.google.com/uc?id=1NOvynV7YumwauBBCxj7vs_XO6t5FMxcR'
        alt={siteData.title}
        className='img-fluid image-white w-25 preloader-logo breathing-image'
      />
    </div>
  );
};

export default Preloader;