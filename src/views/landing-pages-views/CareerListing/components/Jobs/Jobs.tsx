import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import { LearnMoreLink } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import { CardJob } from '../../../../../components/organisms';

type Props = {
  className?: string;
  data?: any[];
};

const Jobs = ({ className, data, ...rest }: Props) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Jobs"
        subtitle={
          <>
            Find a job you love.
            <LearnMoreLink title="&nbsp;Set career interests" variant="h6" />
          </>
        }
        align="left"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
          >
            <CardJob
              variant="outlined"
              liftUp
              jobTitle={item.jobTitle}
              badgeColor={item.color}
              badgeTitle={item.title}
              jobLocation={item.location}
              jobType={item.type}
              jobDate={item.date}
              companyName={item.companyName}
              companyLogo={item.companyLogo}
            />
          </Grid>
        ))}
        <Grid item container justify="center" xs={12} data-aos="fade-up">
          <Button variant="contained" color="primary" size="large">
            See all jobs
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Jobs;

const useStyles = makeStyles(() => ({
  root: {},
}));
