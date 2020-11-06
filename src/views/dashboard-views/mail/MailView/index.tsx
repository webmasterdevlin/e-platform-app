import React, { useEffect, useRef } from 'react';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Page from '../../../../components/Page';
import { useDispatch } from '../../../../store';
import { getLabels } from '../../../../slices/mail';
import Sidebar from './Sidebar';
import MailList from './MailList';
import MailDetails from './MailDetails';
import Compose from './Compose';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
  },
}));

const MailView: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { mailId } = useParams<any>();
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Page className={classes.root} title="Mail" ref={pageRef}>
      <Sidebar containerRef={pageRef} />
      {mailId ? <MailDetails /> : <MailList />}
      <Compose />
    </Page>
  );
};

export default MailView;
