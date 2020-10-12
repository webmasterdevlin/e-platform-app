import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';

type Props = {
  className?: string;
  rest?: React.ReactNode;
};

const Contact = ({ className, ...rest }: Props) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Contact details"
        subtitle="Our contact details. We carefully read and answer to all your questions."
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
      />
      <List disablePadding className={classes.list}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar
              src="/images/illustrations/contact-icon-phone.png"
              srcSet="/images/illustrations/contact-icon-phone@2x.png 2x"
              className={classes.icon}
            />
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Phone"
            secondary="+39 659-657-0133"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar
              src="/images/illustrations/contact-icon-mail.png"
              srcSet="/images/illustrations/contact-icon-mail@2x.png 2x"
              className={classes.icon}
            />
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Email"
            secondary="hi@maccarianagency.com"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemAvatar className={classes.listItemAvatar}>
            <Avatar
              src="/images/illustrations/contact-icon-pin.png"
              srcSet="/images/illustrations/contact-icon-pin@2x.png 2x"
              className={classes.icon}
            />
          </ListItemAvatar>
          <ListItemText
            className={classes.listItemText}
            primary="Head Office"
            secondary="Via E. Golla 4"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Contact;

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {},
  list: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
  },
  listItem: {
    justifyContent: 'flex-start',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));
