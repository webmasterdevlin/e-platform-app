import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  className?: string;
  fontIconClass?: string;
  size?: 'extraSmall' | 'small' | 'medium' | 'large';
  fontIconColor?: string;
};

const Icon = (props: Props) => {
  const { fontIconClass, size, fontIconColor, className, ...rest } = props;
  const classes = useStyles();

  return (
    <i
      className={clsx(
        'icon',
        classes.root,
        fontIconClass,
        classes[size],
        className,
      )}
      style={{ color: fontIconColor }}
      {...rest}
    />
  );
};

export default Icon;

const useStyles = makeStyles(() => ({
  root: {},
  extraSmall: {
    fontSize: 10,
  },
  small: {
    fontSize: 20,
  },
  medium: {
    fontSize: 30,
  },
  large: {
    fontSize: 40,
  },
}));
