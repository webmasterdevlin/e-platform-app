import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import palette from './palette';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    typography: {
      fontFamily: 'Lato',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: 'white',
        },
      },
    },
  }),
);

export default theme;
