import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import {
  SectionHeader,
  CountUpNumber,
} from '../../../../../components/molecules';

type Props = {
  data?: any[];
  className?: string;
};

const Placements = ({ className, data, ...rest }: Props) => {
  // const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={1} data-aos="fade-up">
        <Grid item xs={12}>
          <SectionHeader
            label="PLACEMENT RATES"
            title={
              <span>
                <span className="text-highlighted__primary">
                  TheFront is the leading job placement site
                </span>{' '}
                with the highest rate of success of any tech job board.
              </span>
            }
            subtitle="We keep everything as simple as possible by standardizing the application process for all jobs."
            align="left"
            disableGutter
            titleClasses={classes.title}
          />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.placementGrid}>
            <div>
              <CountUpNumber
                end={112}
                suffix="K"
                label="Placement"
                textColor="primary"
              />
            </div>
            <div className={classes.placementGridItemMiddle}>
              <CountUpNumber
                end={120}
                suffix="K"
                label="Positions"
                textColor="primary"
              />
            </div>
            <div>
              <CountUpNumber
                end={168}
                suffix="K"
                label="Partners"
                textColor="primary"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Placements;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    fontWeight: 500,
  },
  placementGrid: {
    display: 'flex',
    marginTop: theme.spacing(3),
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`,
  },
}));
