import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { IconAlternate } from 'components/molecules';
import { CardBase } from 'components/organisms';

type Props = {
  className?: string;
  variant?: any;
  liftUp?: any;
  title: string;
  subtitle?: string;
  href: string;
  fontIconClass?: string;
  color?:
    | 'red'
    | 'pink'
    | 'purple'
    | 'deepPurple'
    | 'indigo'
    | 'blue'
    | 'lightBlue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'lightGreen'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'deepOrange'
    | 'brown'
    | 'grey'
    | 'blueGrey';
  align?: 'left' | 'right' | 'center';
  iconAlternateProps?: any;
  titleProps?: any;
  subtitleProps?: any;
};

const CardCategoryLink = (props: Props) => {
  const {
    fontIconClass,
    color,
    title,
    subtitle,
    href,
    align,
    className,
    iconAlternateProps,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const classes = useStyles();
  let justifyGrid: 'flex-start' | 'center' | 'right' | 'flex-end';
  justifyGrid = 'flex-start';

  if (align === 'center') {
    justifyGrid = 'center';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }
  return (
    <CardBase
      className={clsx('card-category-link', classes.root, className)}
      {...rest}
    >
      <Grid container spacing={2} className="card-category-link__wrapper">
        <Grid item container justify={justifyGrid} xs={12}>
          <IconAlternate
            fontIconClass={fontIconClass}
            color={color}
            size="medium"
            {...iconAlternateProps}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            align={align}
            className={classes.fontWeight700}
            {...titleProps}
          >
            {title}
          </Typography>
        </Grid>
        {subtitle && (
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              align={align}
              color="textSecondary"
              {...subtitleProps}
            >
              {subtitle}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Link
        to={href}
        className={clsx('card-category-link__item', classes.categoryIconButton)}
      >
        <IconButton className="card-category-link__icon-button">
          <ArrowRightAltIcon
            className="card-category-link__icon"
            style={{ color: color[500] }}
          />
        </IconButton>
      </Link>
    </CardBase>
  );
};

CardCategoryLink.defaultProps = {
  align: 'left',
  href: '#',
  iconAlternateProps: {},
  titleProps: {},
  subtitleProps: {},
};

export default CardCategoryLink;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  fontWeight700: {
    fontWeight: 700,
  },
  categoryIconButton: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
  },
}));
