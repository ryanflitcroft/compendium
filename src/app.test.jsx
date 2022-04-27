import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('render component App', () => {
  it('should render elements figure, img, figcaption', async () => {
    render(<App />);

    const header = await screen.findByRole('banner');
    const main = await screen.findByRole('main');
    const footer = await screen.findByRole('contentinfo');

    expect(header.nodeName).toBe('HEADER');
    expect(header.firstChild.nodeName).toBe('H1');
    expect(main.nodeName).toBe('MAIN');
    expect(main.childElementCount).toBe(3);
    expect(footer.nodeName).toBe('FOOTER');
  });
});
