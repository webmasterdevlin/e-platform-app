import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  dBlock: {
    display: 'block',
  },
}));

type Props = {
  src?: any,
  srcSet?: any,
  alt?: any,
  lazy?: any,
  lazyProps?: any,
  className?: string,
  rest?: React.ReactNode,
};

const Image = (props: Props) => {
  const { src, srcSet, alt, lazy, lazyProps, className, ...rest } = props;

  const classes = useStyles();
  if (lazy) {
    return (
      <LazyLoadImage
        className={clsx('image', classes.root, classes.dBlock, className)}
        alt={alt}
        src={src}
        srcSet={srcSet}
        effect="opacity"
        {...lazyProps}
        {...rest}
      />
    );
  }

  return (
    <img
      className={clsx('image', classes.root, className)}
      alt={alt}
      src={src}
      srcSet={srcSet}
      {...rest}
    />
  );
};

Image.defaultProps = {
  alt: '...',
  lazy: true,
  lazyProps: {
    width: 'auto',
    height: 'auto',
  },
};

export default Image;
