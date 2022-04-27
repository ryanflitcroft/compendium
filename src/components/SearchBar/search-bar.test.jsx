import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import SearchBar from './SearchBar';

describe('render component SearchBar', () => {
  it('should render elements form, label, input.', async () => {
    render(<SearchBar />);

    const form = await screen.findByRole('form');
    const label = await screen.findByText(/browse catalogue/i);
    const input = await screen.findByPlaceholderText(/artist, title, keyword/i);
    const button = await screen.findByRole('button');
  });

  it('should update input value on change', async () => {
    render(<App />);
    const input = await screen.findByPlaceholderText(/artist, title, keyword/i);

    userEvent.type(input, 'warhol');
    expect(input).toHaveValue('warhol');
  });

  it('should trigger a function on change', async () => {
    let search = '';
    const setSearch = (val) => {
      search += val;
    };

    render(<SearchBar search={search} setSearch={setSearch} />);
    const input = await screen.findByPlaceholderText(/artist, title, keyword/i);

    userEvent.type(input, 'warhol');
    expect(search).toEqual('warhol');
  });
});
