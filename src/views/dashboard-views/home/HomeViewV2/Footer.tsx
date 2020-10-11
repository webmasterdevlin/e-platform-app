import React, { forwardRef, useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Image from '../../../../components/atoms/Image';
import Box from '@material-ui/core/Box';

const CustomRouterLink = forwardRef((props: any, ref: any) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

type FooterProps = {
  className?: string;
  pages?: any;
  rest?: React.ReactNode;
};

const Footer = ({ className, ...rest }: FooterProps) => {
  const [pages, setPages] = useState<any>(defaultPages);
  const classes = useStyles();

  const landings: any = pages?.landings;
  const supportedPages: any = pages?.pages;
  const account: any = pages?.account;

  type MenuGroupProps = {
    item: any;
  };

  const MenuGroup = (props: MenuGroupProps) => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={CustomRouterLink}
              to={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web }: any = landings.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div>
          <MenuGroup item={web} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio,
    }: any = supportedPages?.children;
    return (
      <div className={classes?.menu}>
        <div>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
        </div>
        <div>
          <MenuGroup item={company} />
          <MenuGroup item={contact} />
        </div>
        <div>
          <MenuGroup item={blog} />
          <MenuGroup item={portfolio} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error }: any = account.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={settings} />
          <MenuGroup item={signup} />
        </div>
        <div>
          <MenuGroup item={signin} />
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <Box color={'#FFF'}>EPlatform</Box>
                  {/*<a href="/" title="E-platform">*/}
                  {/*<Image*/}
                  {/*  className={classes.logoImage}*/}
                  {/*  src="/images/logos/logo-negative.svg"*/}
                  {/*  alt="thefront"*/}
                  {/*  lazy={false}*/}
                  {/*/>*/}
                  {/*</a>*/}
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item className={classes.listItem}>
                <LandingPages />
              </Grid>
              <Grid item className={classes.listItem}>
                <SupportedPages />
              </Grid>
              <Grid item className={classes.listItem}>
                <AccountPages />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: '#1b1642',
  },
  footerContainer: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
}));

const defaultPages = {
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
