import React, { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import GenericMoreButton from 'components/GenericMoreButton';
import axios from 'utils/axios';
import useIsMountedRef from 'hooks/useIsMountedRef';
import type { Referral } from 'types/reports';

type Props = {
  className?: string;
};

const TopReferrals = ({ className, ...rest }: Props) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [referrals, setReferrals] = useState<Referral[]>([]);

  const getReferrals = useCallback(async () => {
    try {
      const response = await axios.get<{ referrals: Referral[] }>(
        '/api/reports/top-referrals',
      );

      if (isMountedRef.current) {
        setReferrals(response.data.referrals);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getReferrals();
  }, [getReferrals]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Top Referrals" />
      <Divider />
      <List disablePadding>
        {referrals.map((referral, i) => (
          <ListItem divider={i < referrals.length - 1} key={referral.name}>
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: referral.color }}
              >
                {referral.initials}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={referral.name}
              primaryTypographyProps={{ variant: 'h6' }}
            />
            <Typography variant="body2" color="textSecondary">
              {numeral(referral.value).format('0,0')}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

TopReferrals.propTypes = {
  className: PropTypes.string,
};

export default TopReferrals;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
  },
}));
