import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { Section } from '../../../components/organisms';

type Props = {
  className?: string;
  children?: React.ReactNode;
  backgroundImg?: string;
  backgroundColor?: string;
  backgroundPosition?: string;
  contentSectionClassName?: string;
  disableCoverOpacity?: boolean;
};

const HeroBackground = (props: Props) => {
  const {
    children,
    disableCoverOpacity,
    backgroundImg,
    backgroundPosition,
    backgroundColor,
    contentSectionClassName,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  const useCustomStyles = makeStyles(() => ({
    coverBg: {
      backgroundImage: `url(${backgroundImg})`,
    },
    backgroundColor: {
      background: backgroundColor,
    },
    backgroundPosition: {
      backgroundPosition: backgroundPosition,
    },
  }));

  const customClasses = useCustomStyles();

  return (
    <div
      className={clsx(
        'hero-background',
        classes.root,
        backgroundColor ? customClasses.backgroundColor : classes.colorDefault,
        className,
      )}
      {...rest}
    >
      <div className={clsx('hero-background__wrapper', classes.heroWrapper)}>
        <Section
          className={clsx(
            contentSectionClassName ? contentSectionClassName : '',
            'hero-background__section',
          )}
        >
          {children}
        </Section>
      </div>
      <div
        className={clsx(
          'hero-background__cover',
          classes.heroBg,
          classes.heroCover,
          customClasses.coverBg,
          backgroundPosition ? customClasses.backgroundPosition : {},
          disableCoverOpacity ? classes.noCoverOpacity : {},
        )}
      />
    </div>
  );
};

export default HeroBackground;

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  colorDefault: {
    background: colors.indigo[900],
  },
  heroWrapper: {
    zIndex: 2,
  },
  heroCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.2,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  heroBg: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  noCoverOpacity: {
    opacity: 1,
  },
}));
