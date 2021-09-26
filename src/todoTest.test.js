
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText();
  expect(linkElement).toBeInTheDocument();
});

test("render the correct context", ()=>{
  const { getByText } = render(<App />, { baseElement });
  getByText("Greeting"); // queries inside baseElement (which usually means document.body)
  screen.getByText("Greeting"); // queries inside document.body
});