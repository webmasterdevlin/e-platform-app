import React, { FC } from 'react';
import { compose, withProps } from 'recompose';
import { withAuthentication } from '@axa-fr/react-oidc-redux-fetch';

const fetch = status => (url: string, options) => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          status,
        }),
      350,
    );
  });
};

const enhance401 = compose(
  withAuthentication(fetch(401)),
  withProps((props: any) => ({
    handleClick: e => {
      e.preventDefault();
      props
        .fetch('http://localhost:3000')
        .then(() => alert('fetch end'))
        .catch(e => alert(e));
    },
  })),
);

const Button401: FC<{
  handleClick: () => void;
}> = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate 401
  </button>
);

const Button401Enhance = enhance401(Button401);
