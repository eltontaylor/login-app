// src/LogoutButton.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LogoutButton from './LogoutButton';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react');

test('renders LogoutButton and clicks logout', () => {
  const mockLogout = jest.fn();
  useAuth0.mockReturnValue({
    logout: mockLogout,
  });

  render(
    <Auth0Provider>
      <LogoutButton />
    </Auth0Provider>
  );

  const logoutButton = screen.getByText(/Log Out/i);
  expect(logoutButton).toBeInTheDocument();
  fireEvent.click(logoutButton);
  expect(mockLogout).toHaveBeenCalled();
});
