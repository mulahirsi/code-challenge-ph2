import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}