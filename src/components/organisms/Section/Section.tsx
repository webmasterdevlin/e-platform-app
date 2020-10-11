import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

type Props = {
  className?: string;
  children?: React.ReactNode;
  narrow?: boolean;
  fullWidth?: boolean;
  disablePadding?: boolean;
  alternate?: any;
};

const Section = (props: Props) => {
  const {
    children,
    fullWidth,
    narrow,
    disablePadding,
    alternate,
    className,
    ...rest
  } = props;

  const classes: any = useStyles();

  return (
    <section
      className={clsx(
        'section',
        classes.root,
        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        alternate ? classes.alternate : {},
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 2),
    },
  },
  fullWidth: {
    maxWidth: '100%',
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));
