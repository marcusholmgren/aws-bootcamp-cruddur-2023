import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

test('renders landing page with menu', () => {
  render(<App />);
  const linkElement = screen.getByText(/Join The Party/i);
  expect(linkElement).toBeInTheDocument();
});
