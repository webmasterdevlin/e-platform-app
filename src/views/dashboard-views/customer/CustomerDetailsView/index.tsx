import React, { useCallback, useState, useEffect } from 'react';
import type { FC, ChangeEvent } from 'react';
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import Page from 'components/Page';
import axios from 'utils/axios';
import useIsMountedRef from 'hooks/useIsMountedRef';
import type { Customer } from 'types/customer';
import Header from './Header';
import Details from './Details';
import Invoices from './Invoices';
import Logs from './Logs';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const CustomerDetailsView: FC = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [currentTab, setCurrentTab] = useState<string>('details');

  const tabs = [
    { value: 'details', label: 'Details' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'logs', label: 'Logs' },
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const getCustomer = useCallback(async () => {
    try {
      const response = await axios.get<{ customer: Customer }>(
        '/api/customers/1',
      );

      if (isMountedRef.current) {
        setCustomer(response.data.customer);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getCustomer();
  }, [getCustomer]);

  if (!customer) {
    return null;
  }

  return (
    <Page className={classes.root} title="Customer Details">
      <Container maxWidth={false}>
        <Header customer={customer} />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            variant="scrollable"
            textColor="secondary"
          >
            {tabs.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === 'details' && <Details customer={customer} />}
          {currentTab === 'invoices' && <Invoices />}
          {currentTab === 'logs' && <Logs />}
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerDetailsView;
