import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Divider, makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import { useDispatch, useSelector } from 'store';
import { getMails } from 'slices/mail';
import Toolbar from './Toolbar';
import MailItem from './MailItem';

const MailList = () => {
  const classes = useStyles();
  const params = useParams<any>();
  const dispatch = useDispatch();
  const { mails } = useSelector(state => state.mail);
  const [selectedMails, setSelectedMails] = useState<string[]>([]);

  const handleSelectAllMails = (): void => {
    setSelectedMails(mails.allIds.map(mailId => mailId));
  };

  const handleDeselectAllMails = (): void => {
    setSelectedMails([]);
  };

  const handleSelectOneMail = (mailId: string): void => {
    setSelectedMails(prevSelectedMails => {
      if (!prevSelectedMails.includes(mailId)) {
        return [...prevSelectedMails, mailId];
      }

      return prevSelectedMails;
    });
  };

  const handleDeselectOneMail = (mailId: string): void => {
    setSelectedMails(prevSelectedMails =>
      prevSelectedMails.filter(id => id !== mailId),
    );
  };

  useEffect(() => {
    dispatch(getMails(params));
  }, [dispatch, params]);

  return (
    <div className={classes.root}>
      <Toolbar
        onDeselectAll={handleDeselectAllMails}
        onSelectAll={handleSelectAllMails}
        selectedMails={selectedMails.length}
        mails={mails.allIds.length}
      />
      <Divider />
      {mails.allIds.map((mailId: string) => (
        <MailItem
          mail={mails.byId[mailId]}
          key={mailId}
          onDeselect={() => handleDeselectOneMail(mailId)}
          onSelect={() => handleSelectOneMail(mailId)}
          selected={selectedMails.includes(mailId)}
        />
      ))}
    </div>
  );
};

export default MailList;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.dark,
  },
}));
