import React from 'react';
import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders the whole App', () => {
  const { asFragment } = render(withRouter(<App />));
  expect(asFragment()).toMatchSnapshot();
});
