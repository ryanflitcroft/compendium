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
      const data = await getCollection('');
      setCollection(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    setCollectionDisplay(collection);
    setIsLoading(false);
  }, [collection]);

  return (
    <>
      <Header />
      <Main
        setCollection={setCollection}
        collectionDisplay={collectionDisplay}
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Footer />
    </>
  );
}
