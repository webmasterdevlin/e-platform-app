import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../../../components/organisms';
import {
  Categories,
  Courses,
  PromoNumbers,
  Reviews,
  Subscription,
} from './components';

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';

import {
  promoNumbers,
  courseCategories,
  popularCourses,
  reviews,
} from './data';
import { Hero } from '../CareerListing/components';

const Elearning = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Divider />
      <Flip left>
        <Section>
          <PromoNumbers data={promoNumbers} />
        </Section>
      </Flip>
      <Fade right>
        <SectionAlternate>
          <Categories data={courseCategories} />
          <Section>
            <Divider />
          </Section>
          <Courses data={popularCourses} className={classes.coursesSection} />
        </SectionAlternate>
      </Fade>
      <Zoom left>
        <Section className={classes.paddingBottom0}>
          <Reviews data={reviews} />
        </Section>
      </Zoom>
      <Rotate top left>
        <SectionAlternate innerNarrowed className={classes.sectionAlternate}>
          <Subscription />
        </SectionAlternate>
      </Rotate>
    </div>
  );
};

export default Elearning;

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  coursesSection: {
    maxWidth: 800,
    margin: '0 auto',
  },
  paddingBottom0: {
    paddingBottom: 0,
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, #ffffff 40%, ${theme.palette.primary.dark} 0%)`,
  },
}));
