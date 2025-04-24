import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const filteredExpenses = expenses
    .filter((e) =>
      e.description.toLowerCase().includes(search.toLowerCase()) ||
      e.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'description') return a.description.localeCompare(b.description);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <SearchBar value={search} onChange={setSearch} />
      <ExpenseTable
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onSort={setSortBy}
      />
    </div>
  );
}
// src/App.css