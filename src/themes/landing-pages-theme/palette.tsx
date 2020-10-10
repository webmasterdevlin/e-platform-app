import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  alternate: 'rgb(247, 249, 250)',
  secondary: {
    main: '#F9B934',
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#121037',
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
