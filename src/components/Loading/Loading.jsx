import React from 'react';

export default function Loading({ isLoading }) {
  return (
    <>
      <p>{isLoading && '...Loading'}</p>
    </>
  );
}
