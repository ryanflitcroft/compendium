import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { getCollection } from './services/fetch-utils';

export default function App() {
  const [collection, setCollection] = useState([]);
  const [collectionDisplay, setCollectionDisplay] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      await getCollection();
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <Main
        collectionDisplay={collectionDisplay}
        search={search}
        setSearch={setSearch}
      />
      <Footer />
    </>
  );
}
