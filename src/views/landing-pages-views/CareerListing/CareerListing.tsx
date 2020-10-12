import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import {
  Hero,
  Promo,
  Process,
  Categories,
  Info,
  Jobs,
  Placements,
  Companies,
  Application,
  Faq,
} from './components';

import {
  partners,
  jobCategories,
  jobs,
  companies,
  faq,
  popularNews,
} from './data';
import { Section, SectionAlternate } from 'src/components/organisms';
import Page from '../../../components/Page';
import Footer from '../../../layouts/MainLayout/Footer';
import PopularNews from './components/PopularNews';

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, #ffffff 400px, ${colors.indigo[500]} 0%)`,
  },
}));

const CareerListing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      {/*<SectionAlternate>*/}
      {/*  <Promo data={partners} />*/}
      {/*</SectionAlternate>*/}
      {/*<Section>*/}
      {/*  <Process />*/}
      {/*</Section>*/}
      <Divider />
      <Fade left>
        <Section>
          <Categories data={jobCategories} />
        </Section>
      </Fade>
      <Bounce effect="fadeInUp">
        <Section>
          <PopularNews data={popularNews} />
        </Section>
      </Bounce>

      {/*<SectionAlternate>*/}
      {/*  <Info />*/}
      {/*</SectionAlternate>*/}
      {/*<Section>*/}
      {/*  <Jobs data={jobs} />*/}
      {/*</Section>*/}
      {/*<SectionAlternate>*/}
      {/*  <Placements />*/}
      {/*</SectionAlternate>*/}
      {/*<Section>*/}
      {/*  <Companies data={companies} />*/}
      {/*</Section>*/}
      {/*<SectionAlternate>*/}
      {/*  <Application />*/}
      {/*</SectionAlternate>*/}

      <Fade right>
        <SectionAlternate innerNarrowed className={classes.sectionAlternate}>
          <Faq data={faq} />
        </SectionAlternate>
      </Fade>
    </div>
  );
};

export default CareerListing;
