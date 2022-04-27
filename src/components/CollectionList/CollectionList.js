import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

export default function CollectionList({ collectionDisplay }) {
  return (
    <>
      <section>
        {collectionDisplay.map((item, i) => (
          <CollectionItem key={`${item.title} - ${i}`} item={item} />
        ))}
      </section>
    </>
  );
}
