import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

type SectionHeaderProps = {
  className?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  label?: string;
  overline?: React.ReactNode;
  ctaGroup?: React.ReactNode[];
  fadeUp?: boolean;
  align?: 'right' | 'left' | 'center';
  disableGutter?: boolean;
  titleClasses?: string;
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subtitleVariant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2';
  subtitleColor?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary';
  labelProps?: any;
  titleProps?: any;
  subtitleProps?: any;
};

const SectionHeader = (props: SectionHeaderProps) => {
  const {
    title,
    titleVariant,
    subtitleVariant,
    subtitle,
    subtitleColor,
    label,
    overline,
    fadeUp,
    align,
    ctaGroup,
    disableGutter,
    titleClasses,
    className,
    labelProps,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const classes: any = useStyles();
  let justifyGrid: 'center' | 'left' | 'flex-start' | 'right' | 'flex-end';

  justifyGrid = 'center';
  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return (
    <Grid
      container
      spacing={2}
      data-aos={fadeUp ? 'fade-up' : ''}
      className={clsx(
        'section-header',
        classes.root,
        disableGutter ? classes.disableGutter : {},
        className,
      )}
      {...rest}
    >
      {overline && (
        <Grid
          item
          container
          justify={'flex-start'}
          xs={12}
          className="section-header__overline-wrapper"
        >
          {overline}
        </Grid>
      )}
      {label && (
        <Grid item xs={12} className="section-header__label-wrapper">
          <Typography
            variant="overline"
            color="primary"
            component="p"
            align={align || 'center'}
            {...labelProps}
          >
            {label}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12} className="section-header__title-wrapper">
        <Typography
          variant={titleVariant}
          align={align || 'center'}
          className={clsx(
            'section-header__title',
            classes.title,
            titleClasses ? titleClasses : {},
          )}
          color="textPrimary"
          {...titleProps}
        >
          {title}
        </Typography>
      </Grid>
      {subtitle && (
        <Grid item xs={12} className="section-header__subtitle-wrapper">
          <Typography
            variant={subtitleVariant || 'h6'}
            align={align || 'center'}
            color={subtitleColor || 'textSecondary'}
            className="section-header__subtitle"
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        </Grid>
      )}
      {ctaGroup && ctaGroup.length && (
        <Grid item xs={12} className="section-header__cta-wrapper">
          <Grid
            container
            justify={justifyGrid}
            alignItems="center"
            wrap="nowrap"
            className="section-header__cta-container"
          >
            {ctaGroup.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  'section-header__cta-item-wrapper',
                  classes.cta,
                )}
              >
                {item}
              </div>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

/*
SectionHeader.defaultProps = {
  titleVariant: 'h4',
  labelProps: {},
  titleProps: {},
  subtitleProps: {},
};

SectionHeader.propTypes = {
  /!**
   * External classes
   *!/
  className: PropTypes.string,
  /!**
   * Title of the section header
   *!/
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /!**
   * Subtitle of the section header
   *!/
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /!**
   * Label title of the section header
   *!/
  label: PropTypes.string,
  /!**
   * The overline component in the section header
   *!/
  overline: PropTypes.node,
  /!**
   * Array of the CTAs
   *!/
  ctaGroup: PropTypes.arrayOf(PropTypes.node),
  /!**
   * Whether to fade up on scroll
   *!/
  fadeUp: PropTypes.bool,
  /!**
   * Header content (title, subtitle, CTAs) alignment
   *!/
  align: PropTypes.oneOf(['right', 'left', 'center']),
  /!**
   * Whether to disable bottom margin of the section
   *!/
  disableGutter: PropTypes.bool,
  /!**
   * Styles classes to be attached to the title from the parent component
   *!/
  titleClasses: PropTypes.string,
  /!**
   * Title variant
   *!/
  titleVariant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    .isRequired,
  /!**
   * SubTitle variant
   *!/
  subtitleVariant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
  ]),
  /!**
   * SubTitle color
   *!/
  subtitleColor: PropTypes.oneOf([
    'textPrimary',
    'textSecondary',
    'primary',
    'secondary',
  ]),
  /!**
   * Additional properties to pass to the label Typography component
   *!/
  labelProps: PropTypes.object,
  /!**
   * Additional properties to pass to the title Typography component
   *!/
  titleProps: PropTypes.object,
  /!**
   * Additional properties to pass to the subtitle Typography component
   *!/
  subtitleProps: PropTypes.object,
};
*/

export default SectionHeader;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  disableGutter: {
    marginBottom: 0,
  },
  title: {
    fontWeight: 'bold',
  },
  cta: {
    marginLeft: theme.spacing(1),
    '&:first-child': {
      marginLeft: theme.spacing(0),
    },
  },
}));
