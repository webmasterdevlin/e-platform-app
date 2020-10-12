import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import Swiper from 'swiper';

type Props = {
  className?: string;
  items?: any;
  numberProps?: any;
  labelProps?: any;
  navigationButtonStyle?: any;
};

const SwiperNumber = (props: Props) => {
  const {
    items,
    navigationButtonStyle,
    className,
    numberProps,
    labelProps,
    ...rest
  } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  React.useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: isMd ? 4 : 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
    });
  });

  return (
    <div
      className={clsx(
        'swiper-number',
        'swiper-container',
        classes.root,
        className,
      )}
      {...rest}
    >
      <div className="swiper-number__wrapper swiper-wrapper">
        {items.map((item, index) => (
          <div
            className={clsx(
              'swiper-number__item',
              classes.swiperSlide,
              'swiper-slide',
            )}
            key={index}
            style={{ width: 'auto' }}
          >
            <Grid
              container
              spacing={1}
              className="swiper-number__item-container"
            >
              <Grid item xs={12} className="swiper-number__number-wrapper">
                <Typography
                  variant="h3"
                  align="center"
                  className={clsx('swiper-number__number', classes.number)}
                  {...numberProps}
                >
                  {item.number}
                </Typography>
              </Grid>
              <Grid item xs={12} className="swiper-number__label-wrapper">
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  align="center"
                  className="swiper-number__label"
                  {...labelProps}
                >
                  {item.title}
                </Typography>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
      <div className="swiper-number__pagination swiper-pagination" />
    </div>
  );
};

// SwiperNumber.defaultProps = {
//   numberProps: {},
//   labelProps: {},
// };

export default SwiperNumber;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  swiperSlide: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(6),
    },
  },
  number: {
    fontWeight: 900,
  },
}));
