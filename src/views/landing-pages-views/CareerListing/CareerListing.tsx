import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
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
import Footer from '../../dashboard-views/home/HomeViewV2/Footer';
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
    <div>
      <Page className={classes.root} title="Home">
        <div className={classes.root}>
          <Hero />
          {/*<SectionAlternate>*/}
          {/*  <Promo data={partners} />*/}
          {/*</SectionAlternate>*/}
          {/*<Section>*/}
          {/*  <Process />*/}
          {/*</Section>*/}
          <Divider />
          <Section>
            <Categories data={jobCategories} />
          </Section>
          <Section>
            <PopularNews data={popularNews} />
          </Section>
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
          <SectionAlternate innerNarrowed className={classes.sectionAlternate}>
            <Faq data={faq} />
          </SectionAlternate>
        </div>
      </Page>
      <Footer />
    </div>
  );
};

export default CareerListing;
