import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from '../../../components/organisms';
import { Faq, Main, Plans, Support } from './components';

import { pricings, faq, plans } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const Pricing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Main data={pricings} />
      <SectionAlternate>
        <Support />
      </SectionAlternate>
      <Section>
        <Faq data={faq} />
      </Section>
      <SectionAlternate>
        <Plans data={plans} />
      </SectionAlternate>
    </div>
  );
};

export default Pricing;
