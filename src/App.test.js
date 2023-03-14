import { render, screen } from '@testing-library/react';
import Reg from './Component/Reg';

test('renders learn react link', () => {
  render();
  const linkElement = screen.getByText(/submit/i);
  expect(linkElement).toBeInTheDocument();
});
