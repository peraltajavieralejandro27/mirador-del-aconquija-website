import React from 'react';
import '../../assets/scss/scroll_animation.scss';

const ScrollAnimation = () => {
  return (
    <div className="mouse_scroll" id='mouse-scroll'>
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </div>
    </div>
  );
};

export default ScrollAnimation;