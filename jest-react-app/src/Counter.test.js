// Counter.test.js

import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Counter from './Counter';




test('increments counter on click', () => {

  const { getByText, getByTestId } = render(<Counter />);

  fireEvent.click(getByText('Increment'));

  expect(getByTestId('count-value').textContent).toBe('1');

});