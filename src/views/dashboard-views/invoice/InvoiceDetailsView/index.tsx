import React, { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import { Box, Container, Divider, makeStyles } from '@material-ui/core';
import axios from 'utils/axios';
import useIsMountedRef from 'hooks/useIsMountedRef';
import Page from 'components/Page';
import type { Theme } from 'themes/dashboard-theme';
import type { Invoice } from 'types/invoice';
import Header from './Header';
import InvoicePreview from './InvoicePreview';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const InvoiceDetailsView: FC = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  const getInvoice = useCallback(async () => {
    try {
      const response = await axios.get<{ invoice: Invoice }>('/api/invoices/1');

      if (isMountedRef.current) {
        setInvoice(response.data.invoice);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (!invoice) {
    return null;
  }

  return (
    <Page className={classes.root} title="Invoice Details">
      <Container maxWidth="lg">
        <Header invoice={invoice} />
        <Box my={2}>
          <Divider />
        </Box>
        <InvoicePreview invoice={invoice} />
      </Container>
    </Page>
  );
};

export default InvoiceDetailsView;
