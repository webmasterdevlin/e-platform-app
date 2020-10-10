const configuration = {
  isEnabled: true,
  configurations: [
    {
      origin: 'http://localhost:3000',
      config: {
        client_id: '624f26ca-38be-4cb5-a373-98accb6582e3',
        redirect_uri: 'http://localhost:3000/authentication/callback',
        response_type: 'token id_token',
        post_logout_redirect_uri: 'http://localhost:3000/',
        scope:
          'openid profile https://elearntest.onmicrosoft.com/elearn-api/user_impersonation',
        authority:
          'https://elearntest.b2clogin.com/elearntest.onmicrosoft.com/b2c_1_test_signup_signin/v2.0',
        silent_redirect_uri:
          'http://localhost:3000/authentication/silent_callback',
        automaticSilentRenew: true,
        loadUserInfo: false,
        checkSessionInterval: 60,
      },
    },
    {
      origin: 'http://127.0.0.1:3000',
      config: {
        client_id: '624f26ca-38be-4cb5-a373-98accb6582e3',
        redirect_uri: 'http://localhost:3000/authentication/callback',
        response_type: 'token id_token',
        post_logout_redirect_uri: 'http://localhost:3000/',
        scope:
          'openid profile https://elearntest.onmicrosoft.com/elearn-api/user_impersonation',
        authority:
          'https://elearntest.b2clogin.com/elearntest.onmicrosoft.com/b2c_1_test_signup_signin/v2.0',
        silent_redirect_uri:
          'http://localhost:3000/authentication/silent_callback',
        automaticSilentRenew: true,
        loadUserInfo: false,
      },
    },
  ],
};

export default configuration;
