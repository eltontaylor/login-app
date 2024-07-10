const axios = require('axios');

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_MACHINE_TO_MACHINE_CLIENT_ID;
const clientSecret = process.env.REACT_APP_AUTH0_MACHINE_TO_MACHINE_CLIENT_SECRET;



async function getManagementApiToken() {
  const response = await axios.post(`https://${auth0Domain}/oauth/token`, {
    client_id: clientId,
    client_secret: clientSecret,
    audience: `https://${auth0Domain}/api/v2/`,
    grant_type: 'client_credentials',
  });

  return response.data.access_token;
}

async function getUserData(userId) {
  const token = await getManagementApiToken();

  const response = await axios.get(`https://${auth0Domain}/api/v2/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
