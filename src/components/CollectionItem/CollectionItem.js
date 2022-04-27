import React from 'react';
import './CollectionItem.css';

export default function CollectionItem({ item }) {
  return (
    <>
      <figure>
        <h2>{item.title}</h2>
        <img
          src={`https://www.artic.edu/iiif/2/${item.imageId}/full/843,/0/default.jpg`}
          alt={`${item.title} by ${item.artist}`}
        />
        <figcaption>
          {item.artist}, {item.dateStart}
          {item.dateStart !== item.dateEnd && ` - ${item.dateEnd}`}
        </figcaption>
      </figure>
    </>
  );
}
