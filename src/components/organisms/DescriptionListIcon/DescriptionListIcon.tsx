import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  titleVariant?: any;
  subtitleVariant?: any;
  titleProps?: any;
  subtitleProps?: any;
};

const DescriptionListIcon = (props: Props) => {
  const {
    title,
    subtitle,
    icon,
    align,
    titleVariant,
    subtitleVariant,
    className,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const classes = useStyles();
  let gridJustify: 'center' | 'flex-end' | 'flex-start' | 'right' | 'left';
  gridJustify = 'center';

  if (align === 'left') {
    gridJustify = 'flex-start';
  } else if (align === 'right') {
    gridJustify = 'flex-end';
  }

  return (
    <Grid
      container
      spacing={2}
      {...rest}
      className={clsx('description-list-icon', classes.root, className)}
    >
      <Grid
        item
        container
        justify={gridJustify}
        xs={12}
        className="description-list-icon__icon-wrapper"
      >
        {icon}
      </Grid>
      <Grid item xs={12} className="description-list-icon__title-wrapper">
        <Typography
          variant={titleVariant}
          color="textPrimary"
          align={align}
          className={clsx(classes.title, 'description-list-icon__title')}
          {...titleProps}
        >
          {title}
        </Typography>
      </Grid>
      {subtitle && (
        <Grid item xs={12} className="description-list-icon__subtitle-wrapper">
          <Typography
            variant={subtitleVariant}
            color="textSecondary"
            align={align}
            className="description-list-icon__subtitle"
          >
            {subtitle}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

// DescriptionListIcon.defaultProps = {
//   align: 'center',
//   titleVariant: 'h6',
//   subtitleVariant: 'body1',
//   titleProps: {},
//   subtitleProps: {},
// };

export default DescriptionListIcon;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    fontWeight: 700,
  },
}));
