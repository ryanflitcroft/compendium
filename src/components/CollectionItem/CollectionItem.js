import React from 'react';

export default function CollectionItem({ item }) {
  return (
    <>
      <figure>
        <img
          src={item.primaryImage}
          alt={`${item.title} by ${item.artistDisplayName}`}
        />
        <figcaption>
          `{item.title} by {item.artistDisplayName}, {item.objectDate}`
        </figcaption>
      </figure>
    </>
  );
}
