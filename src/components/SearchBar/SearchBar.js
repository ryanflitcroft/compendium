import React from 'react';

export default function SearchBar({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <label for="search">
        <input
          type="text"
          name="search"
          placeholder="search by artist/title"
          value={search}
          onChange={handleChange}
        />
      </label>
    </>
  );
}
