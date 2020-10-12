import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section } from '../../../components/organisms';
import { Form, Contact } from './components';
import { mapData } from './data';

const ContactPageSidebarMap = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form data={mapData} />
      <Section>
        <Contact />
      </Section>
      <Divider />
    </div>
  );
};

export default ContactPageSidebarMap;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));
