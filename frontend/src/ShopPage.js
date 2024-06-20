import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './shoppage.css';
import image1 from './BoschLogo.png';
import image2 from './PorscheLogo.webp';
import image3 from './PierburgLogo.png';

function ShopPage() {
  const navigate = useNavigate();

  return (
    <div className="full-page dark-theme">
      <Navbar />
      <div className="container-fluid full-height-container">
        <div className="row full-height-row">
          <div className="col-md-4 full-height-col clickable-column" onClick={() => navigate('/shop/BoschPage')}>
            <div className="card full-height-card">
              <img src={image1} className="card-img full-height-image" alt="Unique Page 1" />
              <div className="card-body">
                <h5 className="card-title">Unique Page 1</h5>
                <p className="card-text">Description for Unique Page 1</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 full-height-col clickable-column" onClick={() => navigate('/shop/PorschePage')}>
            <div className="card full-height-card">
              <img src={image2} className="card-img full-height-image" alt="Unique Page 2" />
              <div className="card-body">
                <h5 className="card-title">Unique Page 2</h5>
                <p className="card-text">Description for Unique Page 2</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 full-height-col clickable-column" onClick={() => navigate('/shop/PierburgPage')}>
            <div className="card full-height-card">
              <img src={image3} className="card-img full-height-image" alt="Unique Page 3" />
              <div className="card-body">
                <h5 className="card-title">Unique Page 3</h5>
                <p className="card-text">Description for Unique Page 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
