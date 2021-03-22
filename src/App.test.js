import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movies list', () => {
  render(<App />);
  const linkElement = screen.getByText(/movies filter/i);
  expect(linkElement).toBeInTheDocument();
});
