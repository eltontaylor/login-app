// src/Auth0ProviderWithHistory.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

test('renders Auth0ProviderWithHistory without crashing', () => {
  render(
    <MemoryRouter>
      <Auth0ProviderWithHistory>
        <div>Test</div>
      </Auth0ProviderWithHistory>
    </MemoryRouter>
  );
});
