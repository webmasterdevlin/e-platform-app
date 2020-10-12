import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Plans = props => {
  const { data, className, ...rest } = props;
  const classes: any = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Business grade quality for all plans"
        subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
      />
      <Grid container justify="center" spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            item
            container
            direction="column"
            xs={12}
            md={4}
            key={index}
            data-aos="fade-up"
            className={classes.grid}
          >
            <SectionHeader
              title={item.title}
              subtitle={item.subtitle}
              titleProps={{
                variant: 'h6',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              align="left"
              disableGutter
            />
            <div style={{ flexGrow: 1 }} />
            <LearnMoreLink
              title="Learn more"
              variant="subtitle1"
              className={classes.readMoreLink}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Plans.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Plans;
