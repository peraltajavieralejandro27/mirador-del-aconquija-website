import React from 'react';
import {contactData, socialNetworks} from "../../data/data";

const SocialButtons = () => {
  return (
    <div className="social d-flex justify-content-center mt-3">
      <a
        className="mx-2 whatsapp-bg-color"
        href={contactData.whatsapp.primary.apiUrl}
        target='_blank'
      >
        <i className="fa-brands fa-whatsapp"/>
      </a>

      <a
        className="mx-2 facebook-bg-color"
        href={socialNetworks.facebook}
        target='_blank'
      >
        <i className="fab fa-facebook-f"/>
      </a>

      <a
        className="mx-2 instagram-bg-color"
        href={socialNetworks.instagram}
        target='_blank'
      >
        <i className="fab fa-instagram"/>
      </a>

      <a
        className="mx-2 twitter-bg-color"
        href={socialNetworks.twitter}
        target='_blank'
      >
        <i className="fab fa-twitter"/>
      </a>
    </div>
  );
};

export default SocialButtons;