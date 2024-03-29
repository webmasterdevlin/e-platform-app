import React, { useCallback, useEffect, useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import axios from 'utils/axios';
import useIsMountedRef from 'hooks/useIsMountedRef';
import Page from 'components/Page';
import type { Order } from 'types/order';
import Header from './Header';
import OrderInfo from './OrderInfo';
import OrderItems from './OrderItems';

const OrderDetailsView = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [order, setOrder] = useState<Order | null>(null);

  const getOrder = useCallback(async () => {
    try {
      const response = await axios.get<{ order: Order }>('/api/orders/1');

      if (isMountedRef.current) {
        setOrder(response.data.order);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  if (!order) {
    return null;
  }

  return (
    <Page className={classes.root} title="Order Details">
      <Container maxWidth={false}>
        <Header />
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item md={4} xl={3} xs={12}>
              <OrderInfo order={order} />
            </Grid>
            <Grid item md={8} xl={9} xs={12}>
              <OrderItems orderItems={order.items} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default OrderDetailsView;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));
