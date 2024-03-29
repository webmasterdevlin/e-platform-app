import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Typography,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import GenericMoreButton from 'components/GenericMoreButton';
import axios from 'utils/axios';
import useIsMountedRef from 'hooks/useIsMountedRef';
import Chart from './Chart';

type Props = {
  className?: string;
};

const EarningsSegmentation = ({ className, ...rest }: Props) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [earnings, setEarnings] = useState<any>(null);

  const getEarnings = useCallback(async () => {
    try {
      const response = await axios.get('/api/reports/earnings');

      if (isMountedRef.current) {
        setEarnings(response.data.earnings);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getEarnings();
  }, [getEarnings]);

  if (!earnings) {
    return null;
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={<GenericMoreButton />}
        title="Earnings Segmentation"
      />
      <Divider />
      <Box p={3} position="relative" minHeight={320}>
        <Chart data={earnings} />
      </Box>
      <Divider />
      <Box display="flex">
        {earnings.labels.map((label: string, i: number) => (
          <div key={label} className={classes.item}>
            <Typography variant="h4" color="textPrimary">
              {earnings.datasets[0].data[i]}%
            </Typography>
            <Typography variant="overline" color="textSecondary">
              {label}
            </Typography>
          </div>
        ))}
      </Box>
    </Card>
  );
};

EarningsSegmentation.propTypes = {
  className: PropTypes.string,
};

export default EarningsSegmentation;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  item: {
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  },
}));
