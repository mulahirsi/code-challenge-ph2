import React, { useState } from 'react';

export default function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="description" type="text" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input name="category" type="text" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
}
