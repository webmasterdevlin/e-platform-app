import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';

type Props = {
  data?: any[];
  className?: string;
};

const Promo: React.FC<Props> = ({ className, data, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 0 : 1}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            color="textSecondary"
            align={isMd ? 'left' : 'center'}
            className={classes.title}
          >
            Companies we have helped build:
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'center' : 'space-between'}
          xs={12}
          md={8}
        >
          {data.map((item, index) => (
            <Grid
              item
              container
              justify="center"
              xs={6}
              sm={2}
              className={classes.promoLogo}
              key={index}
            >
              <Image
                src={item.logo}
                alt={item.name}
                className={classes.logoImg}
                lazy={false}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Promo;

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  copy: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 900,
  },
  logoImg: {
    width: '100%',
    maxWidth: 100,
  },
}));
