import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CollectionList from '../CollectionList/CollectionList';

export default function Main({ collectionDisplay, search, setSearch }) {
  return (
    <>
      <main>
        <SearchBar search={search} setSearch={setSearch} />
        <CollectionList collectionDisplay={collectionDisplay} />
      </main>
    </>
  );
}
