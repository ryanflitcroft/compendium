import { findByRole, render, screen, waitFor } from '@testing-library/react';
import Loading from './Loading';

describe('render component Loading', () => {
  it('should render elements p', async () => {
    render(<Loading isLoading={true} />);

    const loading = await screen.findByText(/...loading/i);
  });
});
