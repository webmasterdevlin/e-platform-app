import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  primaryCta?: any;
  secondaryCta?: any;
  align?: 'left' | 'right' | 'center';
  wrapperProps?: any;
  titleProps?: any;
  subtitleProps?: any;
  buttonGroupProps?: any;
  primaryButtonWrapperProps?: any;
  secondaryButtonWrapperProps?: any;
};

const DescriptionCta = (props: Props) => {
  const {
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    align,
    className,
    wrapperProps,
    titleProps,
    subtitleProps,
    buttonGroupProps,
    primaryButtonWrapperProps,
    secondaryButtonWrapperProps,
    ...rest
  } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  let justifyGrid = 'center';
  if (align === 'left') {
    justifyGrid = isSm ? 'flex-end' : 'flex-start';
  } else if (align === 'right') {
    justifyGrid = isSm ? 'flex-start' : 'felx-end';
  }

  return (
    <Grid
      container
      spacing={2}
      justify="space-between"
      alignItems="center"
      className={clsx('description-cta', classes.root, className)}
      {...rest}
    >
      <Grid item className="description-cta__wrapper" {...wrapperProps}>
        <Typography
          variant="h5"
          align={align}
          gutterBottom
          className="description-cta__title"
          {...titleProps}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="subtitle1"
            align={align}
            color="textSecondary"
            className="description-cta__subtitle"
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        )}
      </Grid>
      <Grid item>
        <Grid
          container
          justify={justifyGrid}
          spacing={1}
          className="description-cta__button-group"
          {...buttonGroupProps}
        >
          <Grid
            item
            className="description-cta__primary-button-wrapper"
            {...primaryButtonWrapperProps}
          >
            {primaryCta}
          </Grid>
          {secondaryCta && (
            <Grid
              item
              className={clsx('description-cta__secondary-button-wrapper')}
              {...secondaryButtonWrapperProps}
            >
              {secondaryCta}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

DescriptionCta.defaultProps = {
  align: 'center',
  wrapperProps: {},
  titleProps: {},
  subtitleProps: {},
  buttonGroupProps: {},
  primaryButtonWrapperProps: {},
  secondaryButtonWrapperProps: {},
};

export default DescriptionCta;
