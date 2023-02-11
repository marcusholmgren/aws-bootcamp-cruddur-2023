import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page with menu', () => {
  render(<App />);
  const linkElement = screen.getByText(/Join The Party/i);
  expect(linkElement).toBeInTheDocument();
});
