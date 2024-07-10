// src/LoginButton.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginButton from './LoginButton';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react');

test('renders LoginButton and clicks login', () => {
  const mockLoginWithRedirect = jest.fn();
  useAuth0.mockReturnValue({
    loginWithRedirect: mockLoginWithRedirect,
  });

  render(
    <Auth0Provider>
      <LoginButton />
    </Auth0Provider>
  );

  const loginButton = screen.getByText(/Log In/i);
  expect(loginButton).toBeInTheDocument();
  fireEvent.click(loginButton);
  expect(mockLoginWithRedirect).toHaveBeenCalled();
});
