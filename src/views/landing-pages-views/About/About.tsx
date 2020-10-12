import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
} from './components';
import { team, companies, mapData, gallery } from './data';
import Section from '../../../components/organisms/Section';
import SectionAlternate from '../../../components/organisms/SectionAlternate';

import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Flip left>
        <Section>
          <Story />
        </Section>
      </Flip>
      <Section className={classes.sectionNoPaddingTop}>
        <WhoWeAre />
      </Section>
      <Rotate top left>
        <Section className={classes.sectionNoPaddingTop}>
          <Team data={team} />
        </Section>
      </Rotate>
      <Roll left>
        <SectionAlternate className={classes.sectionPartners}>
          <Partners data={companies} />
        </SectionAlternate>
      </Roll>
      <Contact data={mapData} />
      <Slide right>
        <SectionAlternate>
          <Gallery data={gallery} />
        </SectionAlternate>
      </Slide>
    </div>
  );
};

export default About;

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    backgroundColor: theme.palette.text.primary,
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));
