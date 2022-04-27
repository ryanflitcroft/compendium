import { findByRole, render, screen, waitFor } from '@testing-library/react';
import Header from './Header';

describe('render component Header', () => {
  it('should render elements header', async () => {
    render(<Header />);

    const header = await screen.findByRole('banner');
    const h1 = await screen.findByRole('heading');
  });
});
