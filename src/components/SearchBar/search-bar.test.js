import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

describe('render component SearchBar', () => {
  it('should render elements label, input', async () => {
    render(<SearchBar />);

    const label = await screen.findByText(/search catalogue/i);
    const input = await screen.findByPlaceholderText(/by artist or title/i);
  });
});
