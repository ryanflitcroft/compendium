import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CollectionList from '../CollectionList/CollectionList';

export default function Main({
  collectionDisplay,
  search,
  setSearch,
  setCollection,
}) {
  return (
    <>
      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
          setCollection={setCollection}
        />
        <CollectionList collectionDisplay={collectionDisplay} />
      </main>
    </>
  );
}
