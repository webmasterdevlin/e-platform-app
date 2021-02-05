import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import useAuth from 'hooks/useAuth';
import ProfileDetails from './ProfileDetails';
import GeneralSettings from './GeneralSettings';

type Props = {
  className?: string;
};

const General = ({ className, ...rest }: Props) => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <ProfileDetails user={user} />
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <GeneralSettings user={user} />
      </Grid>
    </Grid>
  );
};

General.propTypes = {
  className: PropTypes.string,
};

export default General;

const useStyles = makeStyles(() => ({
  root: {},
}));
