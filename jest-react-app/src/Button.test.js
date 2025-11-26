// Button.test.js

import React from 'react';

import { render } from '@testing-library/react';

import Button from './Button';




test('renders Button correctly', () => {

  const { asFragment } = render(<Button label="Click Me" />);

  expect(asFragment()).toMatchSnapshot();

});