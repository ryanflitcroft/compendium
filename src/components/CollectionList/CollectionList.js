import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

export default function CollectionList({ collectionDisplay }) {
  return (
    <>
      <section>
        {collectionDisplay.map((item) => (
          <CollectionItem item={item} />
        ))}
      </section>
    </>
  );
}
