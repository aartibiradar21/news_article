import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid">



      <div className="row justify-content-center footer">
        <div className="col text-center">
          <span>NewsAPI</span>
          <img className="circleimg1" src='/Ellipse 1.png' alt="circleimg1" />
          <span>Org</span>
          <span>is not responsible for the content of external sites</span>
        </div>
      </div>
      <div className="row justify-content-center footer-mobile" style={{ display: 'none' }}>
        <div className="col text-center">
          <span>NewsAPI</span>
          <img className="circleimg1" src='/Ellipse 1.png' alt="circleimg1" />
          <span>Org</span>
          <div className="responsibility-text">
            <span>is not responsible for</span>
          </div>
          <div className="external-sites-text">
            <span>the content of external sites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
