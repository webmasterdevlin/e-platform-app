import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import SectionHeader from '../../../../../components/molecules/SectionHeader';

type Props = {
  className?: string;
};

const WhoWeAre = ({ className, ...rest }: Props) => {
  // const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Who are we?"
            subtitle="Our sign up is dead simple. We only require your basic company information and what type of data storage you want. Our sign up is dead simple. We only require your basic company information and what type of data storage you want."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="What’s up with the name?"
            subtitle="We support bulk uploading via SQL, integrations with most data storage products, or you can use our API. Simply select where you'd like to transfer your data and we'll being the process of migrating it instantly."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default WhoWeAre;

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {},
}));
