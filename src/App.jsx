import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default function App() {
  const [collection, setCollection] = useState([]);
  const [collectionDisplay, setCollectionDisplay] = useState([]);
  const [search, setSearch] = useState('');

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
