import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Hero, Categories, Faq } from './components';

import { jobCategories, faq, popularNews } from './data';
import { Section, SectionAlternate } from '../../../components/organisms';
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
