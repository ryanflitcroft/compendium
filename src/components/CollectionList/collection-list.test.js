import { findByRole, render, screen, waitFor } from '@testing-library/react';
import CollectionList from './CollectionList';

describe('render component CollectionList', () => {
  const collectionDisplay = [
    {
      title: 'Four Mona Lisas',
      artist: 'Andy Warhol',
      date: 1978,
      imageId: '867641a6-6b70-ae7d-f3f8-e8210e56694e',
    },
    {
      title: 'Flowers',
      artist: 'Andy Warhol',
      date: 1964,
      imageId: '9a9737e3-c296-a2b5-4d76-d88f50a61ff8',
    },
  ];

  it('should render elements section, and a component CollectionItem for each item in collectionDisplay', async () => {
    render(<CollectionList collectionDisplay={collectionDisplay} />);

    const section = await screen.findByRole('region');
    expect(section.childElementCount).toBe(2);
  });
});
