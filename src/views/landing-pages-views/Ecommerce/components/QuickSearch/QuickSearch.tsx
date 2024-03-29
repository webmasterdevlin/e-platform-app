import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';

type Props = {
  className?: string;
};

const QuickSearch = (props: Props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="What is your real need?"
        subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
        data-aos="fade-up"
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            className={classes.gridCard}
            data-aos="fade-up"
            spacing={2}
          >
            <Grid
              item
              container
              justify={isMd ? 'flex-start' : 'center'}
              alignItems="center"
              xs={12}
              md={6}
            >
              <Image
                src="/images/illustrations/relax-working.svg"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              alignItems={isMd ? 'flex-start' : 'center'}
              xs={12}
              md={6}
              direction="column"
            >
              <Typography
                variant="h6"
                className={classes.title}
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
              >
                Comfortable devices
              </Typography>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
                className={classes.subtitle}
              >
                Over 20,000 users searching for devices
              </Typography>
              <Button color="primary" variant="contained">
                serach
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            className={classes.gridCard}
            data-aos="fade-up"
            spacing={2}
          >
            <Grid
              item
              container
              justify={isMd ? 'flex-start' : 'center'}
              alignItems="center"
              xs={12}
              md={6}
            >
              <Image
                src="/images/illustrations/relax-working.svg"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              alignItems={isMd ? 'flex-start' : 'center'}
              xs={12}
              md={6}
              direction="column"
            >
              <Typography
                variant="h6"
                className={classes.title}
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
              >
                Delivery Solutions
              </Typography>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
                className={classes.subtitle}
              >
                Over 20,000 users searching for a widget
              </Typography>
              <Button color="primary" variant="contained">
                serach
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuickSearch;

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontWeight: 'bold',
  },
  image: {
    maxWidth: 140,
  },
  gridCard: {
    padding: theme.spacing(2),
    background: '#f5f7ff',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  subtitle: {
    margin: theme.spacing(2, 0),
  },
}));
