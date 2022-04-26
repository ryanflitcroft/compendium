import { render, screen, waitFor } from '@testing-library/react';
import CollectionItem from './CollectionItem';

describe('render component CollectionItem', () => {
  const item = {
    title: 'Four Mona Lisas',
    artist: 'Andy Warhol',
    date: 1978,
    imageId: '867641a6-6b70-ae7d-f3f8-e8210e56694e',
  };

  it('should render elements figure, img, figcaption', async () => {
    render(<CollectionItem item={item} />);

    const figure = await screen.findByRole('figure');
    const image = await screen.findByAltText(/Four Mona Lisas/i);
    const caption = await screen.findByText(
      /four mona lisas by andy warhol, 1978/i
    );
  });
});
