import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { Image, Icon } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import {
  Section,
  CardPricingStandard,
} from '../../../../../components/organisms';

const useStyles: any = makeStyles(theme => ({
  root: {},
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  textWhite: {
    color: 'white',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: 'transparent',
  },
  toggleButton: {
    background: 'transparent',
    border: '1px solid white',
    padding: theme.spacing(1, 5),
  },
  toggleButtonActive: {
    backgroundColor: 'white !important',
  },
  toggleTitle: {
    textTransform: 'capitalize',
  },
  toggleTitleActive: {
    color: theme.palette.primary.main,
  },
  pricingContainer: {
    position: 'relative',
  },
  shapeContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    background: theme.palette.primary.main,
    height: 171,
  },
  shapeImage: {
    objectFit: 'cover',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  cardPricing: {
    '& .countup-number__count-wrapper': {
      textAlign: 'left',
      marginBottom: 0,
      fontWeight: 'bold',
    },
  },
}));

const Main = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = React.useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.sectionContainer}>
        <Section narrow className={classes.pagePaddingTop}>
          <SectionHeader
            title="Pricing"
            subtitle="We are founded by a leading academic and researcher in the field of Industrial Systems Engineering. "
            titleProps={{
              className: clsx(classes.textWhite, classes.fontWeightBold),
              variant: 'h2',
            }}
            subtitleProps={{
              className: classes.textWhite,
            }}
            data-aos="fade-up"
          />
          <div className={classes.toggleContainer} data-aos="fade-up">
            <ToggleButtonGroup
              value={pricingOption}
              exclusive
              onChange={handleClick}
              className={classes.toggleButtonGroup}
            >
              <ToggleButton
                value="annual"
                className={clsx(
                  classes.toggleButton,
                  pricingOption === 'annual' ? classes.toggleButtonActive : {},
                )}
              >
                <Typography
                  variant="subtitle1"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    pricingOption === 'annual' ? classes.toggleTitleActive : {},
                  )}
                >
                  Annual
                </Typography>
              </ToggleButton>
              <ToggleButton
                value="monthly"
                className={clsx(
                  classes.toggleButton,
                  pricingOption === 'monthly' ? classes.toggleButtonActive : {},
                )}
              >
                <Typography
                  variant="subtitle1"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    pricingOption === 'monthly'
                      ? classes.toggleTitleActive
                      : {},
                  )}
                >
                  Monthly
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Section>
      </div>
      <div className={classes.pricingContainer}>
        <div className={classes.shapeContainer}>
          <Image
            src="/images/shapes/triangle-shape.svg"
            className={classes.shapeImage}
            lazy={false}
          />
        </div>
        <div className={classes.pricingWrapper}>
          <Section className={classes.sectionNoPaddingTop}>
            <Grid container spacing={isMd ? 4 : 2}>
              {data.map((item, index) => (
                <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
                  <CardPricingStandard
                    variant="outlined"
                    withShadow={item.isHighlighted ? true : false}
                    title={item.title}
                    liftUp
                    subtitle={item.subtitle}
                    priceComponent={
                      <Typography variant="h3" color="textPrimary">
                        $
                        {pricingOption === 'annual'
                          ? item.annual
                          : item.monthly}
                      </Typography>
                    }
                    features={item.features}
                    featureCheckComponent={
                      <Icon
                        fontIconClass="far fa-check-circle"
                        fontIconColor={colors.indigo[500]}
                      />
                    }
                    cta={
                      <Button
                        color="primary"
                        variant={item.isHighlighted ? 'contained' : 'outlined'}
                        fullWidth
                        size="large"
                      >
                        Subscribe now
                      </Button>
                    }
                    disclaimer={item.disclaimer}
                    className={classes.cardPricing}
                  />
                </Grid>
              ))}
            </Grid>
          </Section>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
