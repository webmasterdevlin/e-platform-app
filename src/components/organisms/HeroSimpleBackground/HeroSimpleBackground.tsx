import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';

type Props = {
  className?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  children?: any;
};

const HeroSimpleBackground = (props: Props) => {
  const {
    children,
    backgroundSize,
    backgroundImage,
    backgroundPosition,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  const useBackground = makeStyles(() => ({
    backgroundImage: {
      backgroundImage: `url(${backgroundImage})`,
    },
    backgroundSize: {
      backgroundSize: backgroundSize,
    },
    backgroundPosition: {
      backgroundPosition: backgroundPosition,
    },
  }));
  const backgroundClasses = useBackground();

  return (
    <div
      className={clsx(
        'hero-simple-background',
        classes.root,
        className,
        backgroundClasses.backgroundImage,
        backgroundClasses.backgroundSize,
        backgroundClasses.backgroundPosition,
      )}
      {...rest}
    >
      <Section className="hero-simple-background__section">{children}</Section>
    </div>
  );
};

// HeroSimpleBackground.defaultProps = {
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// };

export default HeroSimpleBackground;

const useStyles = makeStyles(() => ({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
