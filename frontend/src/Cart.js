import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 20.00 },
  ]);

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price.toFixed(2)}</p>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
