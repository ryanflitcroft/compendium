import { render, screen, waitFor } from '@testing-library/react';
import Footer from './Footer';

describe('render component Footer', () => {
  it('should render elements footer', async () => {
    render(<Footer />);

    const footer = await screen.findByRole('contentinfo');
  });
});
