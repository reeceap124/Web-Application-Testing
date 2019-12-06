import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('Both Balls and Strikes render', ()=> {
  const container = render(<App/>);

  const ballsScore = container.getByText(/balls/i)
  const strikeScore = container.getByText(/strikes/i)
})

test('The buttons render', () => {
  const container = render(<App/>);

  const ballBtn = container.getByTestId(/ballBtn/i)
  const strikeBtn = container.getByTestId(/strikeBtn/i)
  const foulBtn = container.getByText(/foul/i)
  const hitBtn = container.getByText(/hit/i)
})
