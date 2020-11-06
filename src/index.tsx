import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import 'prismjs/prism';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'nprogress/nprogress.css';
import '../src/__mocks__';
import '../src/assets/css/prism.css';
import '../src/mixins/chartjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Oidc, InMemoryWebStorage } from '@axa-fr/react-oidc-redux';
import { Provider } from 'react-redux';
import { enableES5 } from 'immer';

import * as serviceWorker from '../src/serviceWorker';
import reportWebVitals from './reportWebVitals';
import store from '../src/store';
import { SettingsProvider } from './contexts/SettingsContext';
import App from './App';
import configuration from './auth/configuration';
import ComponentOverride from './auth/component-override';

enableES5();
const origin = document.location.origin;

const isEnabled = configuration.isEnabled;
if (configuration.configurations.length <= 0) {
  throw new Error(`No configuration found`);
}
const authenticationConfig = origin
  ? configuration.configurations.find(m => m.origin === origin)
  : configuration.configurations[0];
if (!authenticationConfig) {
  throw new Error(`Configuration not found for origin ${origin}`);
}

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider>
      <Oidc
        store={store}
        configuration={authenticationConfig.config}
        isEnabled={isEnabled}
        callbackComponentOverride={ComponentOverride}
        UserStore={InMemoryWebStorage}
      >
        <App />
      </Oidc>
    </SettingsProvider>
  </Provider>,
  document.getElementById('root'),
);

// serviceWorker.register();
reportWebVitals();
