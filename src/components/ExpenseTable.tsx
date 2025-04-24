import React from 'react';

export default function ExpenseTable({ expenses, onDelete, onSort }) {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort('description')}>Description</th>
          <th onClick={() => onSort('category')}>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}