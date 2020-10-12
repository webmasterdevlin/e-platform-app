import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { HeroShaped, Map } from '../../../../../components/organisms';
import { SectionHeader } from '../../../../../components/molecules';

type Props = {
  className?: string;
  data?: any[];
};

const Contact: React.FC<Props> = ({ className, data, ...rest }) => {
  // const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title="Contact us"
              subtitle="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions."
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              data-aos="fade-up"
              align="left"
            />
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
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
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
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
              <ListItem disableGutters data-aos="fade-up">
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
        }
        rightSide={
          <Map
            center={[45.464211, 9.011383]}
            pins={data}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

export default Contact;

const useStyles: any = makeStyles(() => ({
  root: {},
  map: {
    zIndex: 9,
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));
