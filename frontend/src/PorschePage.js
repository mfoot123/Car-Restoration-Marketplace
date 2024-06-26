import React from 'react';
import Navbar from './Navbar';
import './BoschPage.css';

const PorschePage = ({ addToCart }) => {
  return (
    <>
      <style>
        {`
          body {
            background-color: #343a40; /* Black background */
            color: #fff; /* White text color */
            font-family: Arial, sans-serif; /* Example font stack, adjust as needed */
          }
        `}
      </style>

      <Navbar />

      <main>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Restored to Perfection</h1>
          <h3 className="fw-normal text-muted mb-3">Ready to install parts</h3>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart('Product 1', 199.99)}>Buy Now</button>            <p className="lead mt-2">$199.99</p>
          </div>
        </div>
      </main>

      <footer className="mt-auto text-white-50">
            <p>
              Sparx Werks LLC © 2022
            </p>
          </footer>

      <script src="../assets/js/color-modes.js"></script>
      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default PorschePage;
