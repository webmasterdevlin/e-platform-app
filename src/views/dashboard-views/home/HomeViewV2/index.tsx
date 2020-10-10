import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { Icon } from '../../../../components/atoms';
import { SectionHeader } from 'src/components/molecules/index';
import { Section } from '../../../../components/organisms/index';
import Footer from './Footer';
import Page from '../../../../components/Page';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    minHeight: 400,
    maxHeight: 600,
    background: `url(/images/photos/rental/hero-bg-image.jpg) no-repeat center ${colors.blueGrey[200]}`,
    backgroundSize: 'cover',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textWhite: {
    color: 'white',
  },
  searchInputContainer: {
    background: 'white',
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  input: {
    background: 'white',
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
}));

const Hero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <div className={clsx(classes.root, className)} {...rest}>
        <Section className={classes.section}>
          <SectionHeader
            title={
              <span className={classes.textWhite}>
                Live as if you were to die tomorrow. Learn as if you were to
                live forever.
              </span>
            }
            subtitle={
              <span className={classes.textWhite}>- Mahatma Gandhi</span>
            }
            align="left"
            titleVariant="h3"
            data-aos="fade-up"
          />
          <div className={classes.searchInputContainer} data-aos="fade-up">
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                className={classes.input}
                // @ts-ignore
                size="large"
                startAdornment={
                  <InputAdornment position="start">
                    <Icon
                      fontIconClass="fas fa-search"
                      fontIconColor={colors.blueGrey[900]}
                    />
                  </InputAdornment>
                }
                placeholder="Search for lessons"
              />
            </FormControl>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.searchButton}
            >
              Search
            </Button>
          </div>
        </Section>
      </div>
      <Footer pages={pages} />
    </Page>
  );
};

export default Hero;

const pages = {
  landings: {
    title: 'Landings',
    id: 'landing-pages',
    children: {
      services: {
        groupTitle: 'Services',
        pages: [
          {
            title: 'Coworking',
            href: '/coworking',
          },
          {
            title: 'Rental',
            href: '/rental',
          },
          {
            title: 'Job Listing',
            href: '/job-listing',
          },
          {
            title: 'E-Learning',
            href: '/e-learning',
          },
          {
            title: 'E-commerce',
            href: '/e-commerce',
          },
          {
            title: 'Expo',
            href: '/expo',
          },
        ],
      },
      apps: {
        groupTitle: 'Apps',
        pages: [
          {
            title: 'Desktop App',
            href: '/desktop-app',
          },
          {
            title: 'Mobile App',
            href: '/mobile-app',
          },
        ],
      },
      web: {
        groupTitle: 'Web',
        pages: [
          {
            title: 'Overview',
            href: '/home',
          },
          {
            title: 'Basic',
            href: '/web-basic',
          },
          {
            title: 'Service',
            href: '/service',
          },
          {
            title: 'Startup',
            href: '/startup',
          },
          {
            title: 'Enterprise',
            href: '/enterprise',
          },
          {
            title: 'Could Hosting',
            href: '/cloud-hosting',
          },
          {
            title: 'Agency',
            href: '/agency',
          },
          {
            title: 'Design Company',
            href: '/design-company',
          },
          {
            title: 'Logistics',
            href: '/logistics',
          },
        ],
      },
    },
  },
  pages: {
    title: 'Pages',
    id: 'supported-pages',
    children: {
      career: {
        groupTitle: 'Career',
        pages: [
          {
            title: 'Lising',
            href: '/career-listing',
          },
          {
            title: 'Lising Minimal',
            href: '/career-listing-minimal',
          },
          {
            title: 'Opening',
            href: '/career-opening',
          },
        ],
      },
      helpCenter: {
        groupTitle: 'Help center',
        pages: [
          {
            title: 'Overview',
            href: '/help-center',
          },
          {
            title: 'Article',
            href: '/help-center-article',
          },
        ],
      },
      company: {
        groupTitle: 'Company',
        pages: [
          {
            title: 'About',
            href: '/about',
          },
          {
            title: 'About (Cover)',
            href: '/about-side-cover',
          },
          {
            title: 'Pricing',
            href: '/pricing',
          },
          {
            title: 'Terms',
            href: '/company-terms',
          },
        ],
      },
      contact: {
        groupTitle: 'Contact',
        pages: [
          {
            title: 'Reach View',
            href: '/contact-page',
          },
          {
            title: 'Sidebar Map',
            href: '/contact-sidebar-map',
          },
          {
            title: 'Cover',
            href: '/contact-page-cover',
          },
        ],
      },
      blog: {
        groupTitle: 'Blog',
        pages: [
          {
            title: 'Newsroom',
            href: '/blog-newsroom',
          },
          {
            title: 'Reach View',
            href: '/blog-reach-view',
          },
          {
            title: 'Search',
            href: '/blog-search',
          },
          {
            title: 'Article',
            href: '/blog-article',
          },
        ],
      },
      portfolio: {
        groupTitle: 'Portfolio',
        pages: [
          {
            title: 'Basic',
            href: '/portfolio-page',
          },
          {
            title: 'Masonry',
            href: '/portfolio-masonry',
          },
          {
            title: 'Grid View',
            href: '/portfolio-grid',
          },
          {
            title: 'Parallax Effect',
            href: '/agency',
          },
        ],
      },
    },
  },
  account: {
    title: 'Account',
    id: 'account',
    children: {
      settings: {
        groupTitle: 'Settings',
        pages: [
          {
            title: 'General',
            href: '/account/general',
          },
          {
            title: 'Security',
            href: '/account/security',
          },
          {
            title: 'Notifications',
            href: '/account/notifications',
          },
          {
            title: 'Billing',
            href: '/account/billing',
          },
        ],
      },
      signup: {
        groupTitle: 'Sign up',
        pages: [
          {
            title: 'Simple',
            href: '/signup-simple',
          },
          {
            title: 'Cover',
            href: '/signup-cover',
          },
        ],
      },
      signin: {
        groupTitle: 'Sign in',
        pages: [
          {
            title: 'Simple',
            href: '/signin-simple',
          },
          {
            title: 'Cover',
            href: '/signin-cover',
          },
        ],
      },
      password: {
        groupTitle: 'Password reset',
        pages: [
          {
            title: 'Simple',
            href: '/password-reset-simple',
          },
          {
            title: 'Cover',
            href: '/password-reset-cover',
          },
        ],
      },
      error: {
        groupTitle: 'Error',
        pages: [
          {
            title: 'Simple',
            href: '/not-found',
          },
          {
            title: 'Cover',
            href: '/not-found-cover',
          },
        ],
      },
    },
  },
};
