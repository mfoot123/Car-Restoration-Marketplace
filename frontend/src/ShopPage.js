import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './shoppage.css'; // Import your CSS file

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4000/api/parts'); // Adjust URL as per your backend setup
      if (!response.ok) {
        throw new Error('Failed to fetch parts');
      }
      const data = await response.json();
      setProducts(data); // Store fetched parts in state
    } catch (error) {
      console.error('Error fetching parts:', error);
      // Handle error if needed
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="full-page">
      <Navbar />
      <div className="container mt-5">
        <h2>Our Products</h2>
        {isLoading && <p>Loading products...</p>}
        <div className="row">
          {products.map((part) => (
            <div key={part.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={part.image} className="card-img-top" alt={part.name} />
                <div className="card-body">
                  <h5 className="card-title">{part.name}</h5>
                  <p className="card-text">{part.description}</p>
                  <p className="card-text">${part.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
