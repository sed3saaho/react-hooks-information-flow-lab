import React from "react";

const Filter = ({ onCategoryChange }) => {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="all">All</option>
      <option value="groceries">Groceries</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
    </select>
  );
};

export default Filter;