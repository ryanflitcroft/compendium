import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';
import CollectionList from '../CollectionList/CollectionList';

export default function Main({
  collectionDisplay,
  search,
  setSearch,
  setCollection,
  isLoading,
  setIsLoading,
}) {
  return (
    <>
      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
          setCollection={setCollection}
          setIsLoading={setIsLoading}
        />
        <Loading isLoading={isLoading} />
        <CollectionList collectionDisplay={collectionDisplay} />
      </main>
    </>
  );
}
