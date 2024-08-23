import React, { useState } from 'react';
import Navbar from './Navbar';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    vendor: '',
    image: '',
    title: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

      const data = await response.json();
      console.log('Product added:', data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="vendor"
          placeholder="Vendor"
          value={formData.vendor}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default AddProductForm;