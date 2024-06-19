import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/parts')
      .then(response => {
        console.log("Data fetched successfully:", response.data);
        setParts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the parts!", error);
      });
  }, []);

  return (
    <div className="shop">
      <h2>Products</h2>
      {parts.length > 0 ? (
        parts.map(part => (
          <div key={part.id} className="part card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={part.image} className="card-img" alt={part.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{part.name}</h5>
                  <p className="card-text">{part.description}</p>
                  <p className="card-text"><strong>Price: </strong>${part.price}</p>
                  <p className="card-text"><strong>Quantity: </strong>{part.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Products;
