import React from 'react';
import ('./Navigation.css');

export const Navigation = () => {
  return(
    <nav>
      <span>tweeter</span>
      <div className="nav-cta">
        <div><strong>Write</strong> a new tweet</div>
        <i className="fas fa-angle-double-down nav-icon"></i>
      </div>
    </nav>
  )
}