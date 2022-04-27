import React from 'react';
import './SearchBar.css';

export default function SearchBar({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <label for="search">
        Search catalogue:
        <input
          type="text"
          name="search"
          placeholder="by artist or title"
          value={search}
          onChange={handleChange}
        />
      </label>
    </>
  );
}
