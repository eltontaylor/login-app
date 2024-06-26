import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Routes ,Route } from 'react-router-dom';


const Auth0ProviderWithHistory = ({ children }) => {
  // const history = useNavigate();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  // const onRedirectCallback = (appState) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };
  const navigate = useNavigate();

  // For success page
  // const onRedirectCallback = (appState) => {
  //   navigate(appState?.returnTo || '/success');
  // };

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || '/terms-and-conditions');
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
