import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles,
} from '@material-ui/core';
import { APP_VERSION } from '../../constants';
import Logo from 'components/Logo';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ProfileModel } from 'auth/auth.model';

interface TopBarProps {
  className?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 64,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const TopBar: FC<TopBarProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { user, isLoadingUser } = useSelector((state: RootState) => state.oidc);
  const [name, setName] = useState('');

  useEffect(() => {
    const profile: ProfileModel = user?.profile;
    setName(profile?.given_name);
  });

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <Hidden mdDown>
          <Typography variant="caption" color="textSecondary">
            Version {APP_VERSION}
          </Typography>
        </Hidden>
        <Box flexGrow={1} />
        <Box className={classes.link} color="textSecondary">
          {name && `Welcome back, ${name}!`}
        </Box>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/login"
          underline="none"
          variant="body2"
        >
          Dashboard
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/about"
          underline="none"
          variant="body2"
        >
          About
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/contact"
          underline="none"
          variant="body2"
        >
          Contact
        </Link>
        <Divider className={classes.divider} />
        <Button
          color="secondary"
          component="a"
          href="/app/projects/create"
          variant="contained"
          size="small"
        >
          Create an offering
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
