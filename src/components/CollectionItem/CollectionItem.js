import React from 'react';

export default function CollectionItem({ item }) {
  return (
    <>
      <figure>
        <img
          src={`https://www.artic.edu/iiif/2/${item.imageId}/full/843,/0/default.jpg`}
          alt={`${item.title} by ${item.artist}`}
        />
        <figcaption>
          `{item.title} by {item.artist}, {item.date}`
        </figcaption>
      </figure>
    </>
  );
}
