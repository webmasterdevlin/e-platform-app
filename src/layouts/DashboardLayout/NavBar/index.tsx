/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles,
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import {
  Monitor as MonitorIcon,
  Calendar as CalendarIcon,
  Hexagon as HexagonIcon,
  Folder as FolderIcon,
  Trello as TrelloIcon,
  User as UserIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  PieChart as PieChartIcon,
  Share2 as ShareIcon,
  Users as UsersIcon,
  BookOpen as BookOpenIcon,
} from 'react-feather';

import NavItem from './NavItem';
import Logo from '../../../components/Logo';
import useAuth from '../../../hooks/useAuth';

interface NavBarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

interface Item {
  href?: string;
  icon?: ReactNode;
  info?: ReactNode;
  items?: Item[];
  title: string;
}

interface Section {
  items: Item[];
  subheader: string;
}

const sections: Section[] = [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'Dashboard',
        icon: PieChartIcon,
        href: '/app/reports/dashboard-alternative',
      },
      // {
      //   title: 'Mail',
      //   href: '/app/mail',
      //   icon: MailIcon,
      // },
      // {
      //   title: 'Calendar',
      //   href: '/app/calendar',
      //   icon: CalendarIcon,
      //   info: () => <Chip color="secondary" size="small" label="Updated" />,
      // },
    ],
  },
  // {
  //   subheader: 'Management',
  //   items: [
  //     // {
  //     //   title: 'Customers',
  //     //   icon: UsersIcon,
  //     //   href: '/app/management/customers',
  //     //   items: [
  //     //     {
  //     //       title: 'List Customers',
  //     //       href: '/app/management/customers',
  //     //     },
  //     //     {
  //     //       title: 'View Customer',
  //     //       href: '/app/management/customers/1',
  //     //     },
  //     //     {
  //     //       title: 'Edit Customer',
  //     //       href: '/app/management/customers/1/edit',
  //     //     },
  //     //   ],
  //     // },
  //     {
  //       title: 'Products',
  //       icon: HexagonIcon,
  //       href: '/app/management/products',
  //       items: [
  //         {
  //           title: 'List Products',
  //           href: '/app/management/products',
  //         },
  //         {
  //           title: 'Create Product',
  //           href: '/app/management/products/create',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Orders',
  //       icon: FolderIcon,
  //       href: '/app/management/orders',
  //       items: [
  //         {
  //           title: 'List Orders',
  //           href: '/app/management/orders',
  //         },
  //         {
  //           title: 'View Order',
  //           href: '/app/management/orders/1',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Invoices',
  //       icon: ReceiptIcon,
  //       href: '/app/management/invoices',
  //       items: [
  //         {
  //           title: 'List Invoices',
  //           href: '/app/management/invoices',
  //         },
  //         {
  //           title: 'View Invoice',
  //           href: '/app/management/invoices/1',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   subheader: 'Account',
  //   items: [
  //     {
  //       title: 'Projects Platform',
  //       href: '/app/projects',
  //       icon: MonitorIcon,
  //       items: [
  //         {
  //           title: 'Overview',
  //           href: '/app/projects/overview',
  //         },
  //         {
  //           title: 'Browse Projects',
  //           href: '/app/projects/browse',
  //         },
  //         {
  //           title: 'Create Project',
  //           href: '/app/projects/create',
  //         },
  //         {
  //           title: 'View Project',
  //           href: '/app/projects/1',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Social Platform',
  //       href: '/app/social',
  //       icon: ShareIcon,
  //       items: [
  //         {
  //           title: 'Profile',
  //           href: '/app/social/profile',
  //         },
  //         {
  //           title: 'Feed',
  //           href: '/app/social/feed',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Chat',
  //       href: '/app/chat',
  //       icon: MessageCircleIcon,
  //       info: () => <Chip color="secondary" size="small" label="Updated" />,
  //     },
  //   ],
  // },
  {
    subheader: 'Pages',
    items: [
      {
        title: 'Account',
        href: '/app/account',
        icon: UserIcon,
      },
    ],
  },
];

function renderNavItems({
  items,
  pathname,
  depth = 0,
}: {
  items: Item[];
  pathname: string;
  depth?: number;
}) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        [],
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth,
}: {
  acc: any[];
  pathname: string;
  item: Item;
  depth: number;
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>,
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />,
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));

const NavBar: FC<NavBarProps> = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const { user }: any = useAuth();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <RouterLink to="/app/account">
              <Avatar alt="User" className={classes.avatar} src={user.avatar} />
            </RouterLink>
          </Box>
          <Box mt={2} textAlign="center">
            <Link
              component={RouterLink}
              to="/app/account"
              variant="h5"
              color="textPrimary"
              underline="none"
            >
              {user.name}
            </Link>
            <Typography variant="body2" color="textSecondary">
              Your tier:{' '}
              <Link component={RouterLink} to="/pricing">
                {user.tier}
              </Link>
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {sections.map(section => (
            <List
              key={section.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
        <Divider />
        <Box p={2}>
          <Box p={2} borderRadius="borderRadius" bgcolor="background.dark">
            <Typography variant="h6" color="textPrimary">
              Need Help?
            </Typography>
            <Link
              onClick={() => alert('Contacting Eplatform test')}
              variant="subtitle1"
              color="secondary"
              component={RouterLink}
              to="#"
            >
              Contact Eplatform
            </Link>
          </Box>
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
