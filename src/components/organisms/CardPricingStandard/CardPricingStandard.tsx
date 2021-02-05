import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ListItem, Divider, List, Grid } from '@material-ui/core';
import { CardBase } from 'components/organisms';

type Props = {
  className?: string;
  title: string;
  subtitle?: string;
  priceComponent?: any;
  featureCheckComponent?: any;
  features?: any;
  cta?: any;
  disclaimer?: string;
  titleProps?: any;
  subtitleProps?: any;
  disclaimerProps?: any;
  featureTitleProps?: any;
  variant?: any;
  withShadow?: boolean;
  liftUp?: any;
};

const CardPricingStandard = (props: Props) => {
  const {
    title,
    subtitle,
    priceComponent,
    featureCheckComponent,
    features,
    cta,
    disclaimer,
    className,
    titleProps,
    subtitleProps,
    disclaimerProps,
    featureTitleProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <CardBase
      className={clsx('card-pricing-standard', classes.root, className)}
      align="left"
      {...rest}
    >
      <Grid container spacing={2} className="card-pricing-standard__wrapper">
        <Grid item xs={12} className="card-pricing-standard__headline">
          <Typography
            variant="h5"
            gutterBottom
            className="card-pricing-standard__title"
            {...titleProps}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className="card-pricing-standard__subtitle"
              {...subtitleProps}
            >
              {subtitle}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} className="card-pricing-standard__divider-container">
          <Divider className="card-pricing-standard__divider" />
        </Grid>
        <Grid item xs={12} className="card-pricing-standard__content">
          {priceComponent}
        </Grid>
        {features && (
          <Grid item xs={12} className="card-pricing-standard__feature-wrapper">
            <List className="card-pricing-standard__feature-list">
              {features?.map((item, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  className="card-pricing-standard__feature-list-item"
                >
                  {featureCheckComponent && (
                    <div
                      className={clsx(
                        'card-pricing-standard__feature-check',
                        classes.featureCheck,
                      )}
                    >
                      {featureCheckComponent}
                    </div>
                  )}
                  <Typography
                    variant="h6"
                    noWrap
                    className="card-pricing-standard__feature-title"
                    {...featureTitleProps}
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        )}
        <Grid item xs={12} className="card-pricing-standard__cta-wrapper">
          {cta}
        </Grid>
        {disclaimer && (
          <Grid
            item
            xs={12}
            className="card-pricing-standard__disclaimer-wrapper"
          >
            <Typography
              variant="caption"
              component="p"
              align="center"
              className="card-pricing-standard__disclaimer-title"
              {...disclaimerProps}
            >
              {disclaimer}
            </Typography>
          </Grid>
        )}
      </Grid>
    </CardBase>
  );
};

// CardPricingStandard.defaultProps = {
//   titleProps: {},
//   subtitleProps: {},
//   disclaimerProps: {},
//   featureTitleProps: {},
// };

export default CardPricingStandard;

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  featureCheck: {
    marginRight: theme.spacing(1),
  },
}));
