import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './BoschPage.css';

const BoschPage = ({ addToCart }) => {
  // State to hold the products
  const [products, setProducts] = useState([]);

  // Fetch the products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products?vendor=Bosch');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };

    fetchProducts();
  }, []);

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
          {products.map(product => (
            <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" key={product.id}>
              <div className="my-3 py-3">
                <h2 className="display-5">{product.title}</h2>
                <p className="lead">{product.description}</p>
              </div>
              <img src={product.image} alt={product.title} style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }} />
              <button className="btn btn-primary btn-custom mt-3" onClick={() => addToCart(product.title, product.price)}>Buy Now</button>
              <p className="lead mt-2">${product.price}</p>
            </div>
          ))}
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

export default BoschPage;