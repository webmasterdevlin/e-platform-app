import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';

type Props = {
  data?: any[];
  className?: string;
};

const Info = ({ data, className, ...rest }: Props) => {
  // const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography
            variant="h6"
            align="left"
            className={classes.title}
            gutterBottom
            color="primary"
          >
            What is it about?
          </Typography>
          <Typography variant="subtitle1" align="left" color="textSecondary">
            Fill out our standardized application on our platform. Most
            applicants finish in under an hour.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography
            variant="h6"
            align="left"
            className={classes.title}
            gutterBottom
            color="primary"
          >
            Who is it for?
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="left">
            Fill out our standardized application on our platform. Most
            applicants finish in under an hour.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontWeight: 700,
  },
}));
