import React from 'react';
import clsx from 'clsx';
import { jarallax } from 'jarallax';
import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  className?: any;
  children?: React.ReactNode;
  backgroundImage?: string;
};

const Parallax = (props: Props) => {
  const { backgroundImage, children, className, ...rest } = props;

  const classes: any = useStyles();

  React.useEffect(() => {
    const jarallaxElems = document.querySelectorAll('.jarallax');
    if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
      return;
    }

    jarallax(jarallaxElems, { speed: 0.2 });
  });

  return (
    <div
      className={clsx('jarallax', 'parallax', classes.root, className)}
      data-jarallax
      data-speed="0.2"
      {...rest}
    >
      <div
        className={clsx('jarallax-img', 'parallax__image', classes.image)}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        //alt='...'
      />
      {children}
    </div>
  );
};

export default Parallax;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
}));
