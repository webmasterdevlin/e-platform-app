import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { CardBase } from 'components/organisms';

type Props = {
  className?: string;
  badgeColor?: string;
  badgeTitle?: string;
  jobTitle?: string;
  jobLocation?: string;
  jobType?: string;
  jobDate?: string;
  companyLogo?: string;
  companyName?: string;
  variant?: any;
  liftUp?: any;
};

const CardJob = (props: Props) => {
  const {
    badgeColor,
    badgeTitle,
    jobTitle,
    jobLocation,
    jobType,
    jobDate,
    companyLogo,
    companyName,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <CardBase
      className={clsx('card-job', classes.root, className)}
      align="left"
      {...rest}
    >
      <Grid container spacing={2}>
        <Grid item container alignItems="center" xs={12}>
          <span
            className={clsx(classes.dot, classes.dotBig)}
            style={{ background: badgeColor }}
          />
          <Typography component="span" variant="body2" color="textPrimary">
            {badgeTitle}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.jobTitle}>
            {jobTitle}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item container alignItems="center" xs={12}>
          <Typography
            component="span"
            variant="subtitle1"
            color="textSecondary"
          >
            {jobLocation}
          </Typography>
          <span
            className={clsx(classes.dot, classes.dotSmall, classes.dotMargin)}
          />
          <Typography
            component="span"
            variant="subtitle1"
            color="textSecondary"
          >
            {jobType}
          </Typography>
        </Grid>
      </Grid>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar src={companyLogo} alt={companyName} />
        </ListItemAvatar>
        <ListItemText primary={companyName} secondary={jobDate} />
      </ListItem>
    </CardBase>
  );
};

export default CardJob;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1),
  },
  dotBig: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2),
  },
  jobTitle: {
    fontWeight: 700,
  },
  dotMargin: {
    margin: theme.spacing(0, 1),
  },
}));
