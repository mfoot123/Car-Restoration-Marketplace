import React from 'react';
import Navbar from './Navbar';
import sparkswerksImage from './SparkswerksHomeImage.webp';
import './aboutpage.css';

const AboutPage = () => {
  return (
    <div className="full-page">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <img
              src={sparkswerksImage}
              className="img-fluid rounded"
              alt="About Us"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2>40 years of VW mechanical experience</h2>
              <p>
                I grew up with VW's (Volkswagen) in the 1970's. My father had a
                '68 bug as his daily commuter during the gas crisis. We also had
                a dune buggy. My first car at 16 was a well-worn VW bug. It
                provided ample opportunities to work and learn on. Over the past
                40 years, I've owned countless classic VW's. I currently own
                three. I've found in these decades of working on VW's that no
                parts work as well as the original, restored German made parts.
                My VW's all run their original carbs, distributors and fuel pumps
                that have been restored. This lead me to rebuilding these parts
                for friends. I've been rebuilding and selling these parts on the
                biggest air-cooled Volkswagen forum site The Samba for close to a
                decade now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
