//Input.test.js

import React from 'react';

import { render } from '@testing-library/react';

import { axe, toHaveNoViolations } from 'jest-axe';


import Input from './Input.jsx';


// Add a Jest matcher to check for accessibility violations

expect.extend(toHaveNoViolations);


test('Input component should have no accessibility violations', async () => {

  const { container } = render(<Input label="Test input" />);

  const results = await axe(container);


  // Assert that there are no accessibility violations

  expect(results).toHaveNoViolations();

});