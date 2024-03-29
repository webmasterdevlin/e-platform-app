import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  makeStyles,
} from '@material-ui/core';
import GenericMoreButton from 'components/GenericMoreButton';
import Chart from './Chart';

type Props = {
  className?: string;
};

const PerformanceOverTime = ({ className, ...rest }: Props) => {
  const classes = useStyles();
  const performance = {
    thisWeek: {
      data: [],
      labels: [],
    },
    thisMonth: {
      data: [],
      labels: [],
    },
    thisYear: {
      data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5],
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Earnings Over Time" />
      <Divider />
      <CardContent>
        <PerfectScrollbar>
          <Box height={375} minWidth={500}>
            <Chart
              className={classes.chart}
              data={performance.thisYear.data}
              labels={performance.thisYear.labels}
            />
          </Box>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

PerformanceOverTime.propTypes = {
  className: PropTypes.string,
};

export default PerformanceOverTime;

const useStyles = makeStyles(() => ({
  root: {},
  chart: {
    height: '100%',
  },
}));
