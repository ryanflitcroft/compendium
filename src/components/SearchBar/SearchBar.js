import React from 'react';
import { getCollection } from '../../services/fetch-utils';
import './SearchBar.css';

export default function SearchBar({ search, setSearch, setCollection }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const results = await getCollection(search);
    setCollection(results);
  }

  return (
    <>
      <form
        aria-label="search artist, title, or keyword"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search">
          Browse catalogue:
          <input
            type="text"
            name="search"
            placeholder="artist, title, keyword"
            value={search}
            onChange={handleChange}
          />
          <button>Search</button>
        </label>
      </form>
    </>
  );
}
