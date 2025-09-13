import React, { useState } from 'react';

const AddStockForm = ({ onAddStock }) => {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol.trim()) {
      onAddStock(symbol.trim().toUpperCase());
      setSymbol('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-stock-form">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddStockForm;
