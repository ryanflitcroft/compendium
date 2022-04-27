import { render, screen, waitFor } from '@testing-library/react';
import Main from './Main';

describe('render component Main', () => {
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
  it('should render elements main', async () => {
    render(<Main collectionDisplay={collectionDisplay} />);

    const main = await screen.findByRole('main');
    expect(main.childElementCount).toBe(2);
    expect(main.lastChild.childElementCount).toEqual(collectionDisplay.length);
  });
});
