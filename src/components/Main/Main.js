import React from 'react';

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
