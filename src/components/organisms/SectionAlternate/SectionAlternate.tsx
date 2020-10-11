import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  className?: string;
  children?: React.ReactNode;
  innerNarrowed?: boolean;
};

const SectionAlternate = (props: Props) => {
  const { children, innerNarrowed, className, ...rest } = props;

  const classes: any = useStyles();

  return (
    <section
      className={clsx('section-alternate', classes.root, className)}
      {...rest}
    >
      <div
        className={clsx(
          'section-alternate__content',
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {},
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionAlternate;

const useStyles: any = makeStyles((theme: any) => ({
  root: {
    background: theme.palette.alternate,
  },
  inner: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 2),
    },
  },
  innerNarrowed: {
    maxWidth: 800,
  },
}));
