import React, { FC, useEffect } from 'react';
import { compose, withProps } from 'recompose';
import { withAuthentication } from '@axa-fr/react-oidc-redux-fetch';

export const fetch = status => (url: string, options: any) => {
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

const enhance403 = compose(
  withAuthentication(fetch(403)),
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

const Button403: FC<{
  handleClick: () => void;
}> = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate 403
  </button>
);

export const Button403Enhance = enhance403(Button403);
