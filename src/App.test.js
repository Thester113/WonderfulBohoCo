import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WonderfulBohoCo coming soon link', () => {
  render(<App />);
  const linkElement = screen.getByText(/WonderfulBohoCo coming soon!/i);
  expect(linkElement).toBeInTheDocument();
});
