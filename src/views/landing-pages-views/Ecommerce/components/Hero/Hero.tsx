import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';

type Props = {
  className?: string;
};

const Hero = (props: Props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title="Experience your music like never before."
            subtitle={<span className={classes.price}>$299.95</span>}
            ctaGroup={[
              <Button variant="contained" color="primary" size="large">
                Buy now
              </Button>,
            ]}
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
          <div className={classes.disclaimer} data-aos="fade-up">
            <Typography variant="subtitle1" color="textSecondary">
              $60 Apple Music gift card with purchase of select Beats products.*
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="/images/photos/ecommerce/hero-cover.png"
            srcSet="/images/photos/ecommerce/hero-cover@2x.png 2x"
            alt="Headphones"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;

const useStyles = makeStyles((theme: any) => ({
  root: {},
  price: {
    color: theme.palette.text.primary,
    fontSize: 32,
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: 48,
    },
  },
  disclaimer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1 / 2, 1),
    background: theme.palette.alternate,
    display: 'inline-block',
  },
  image: {
    maxWidth: 600,
  },
}));
