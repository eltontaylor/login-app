// src/TermsAndConditions.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TermsAndConditions from './TermsAndConditions';

test('renders TermsAndConditions component and clicks accept button', () => {
  render(
    <MemoryRouter>
      <TermsAndConditions />
    </MemoryRouter>
  );

  const acceptButton = screen.getByText(/Accept/i);
  expect(acceptButton).toBeInTheDocument();
  fireEvent.click(acceptButton);
});
