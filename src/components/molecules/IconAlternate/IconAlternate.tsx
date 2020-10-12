import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, colors } from '@material-ui/core';
import { Icon } from '../../../components/atoms';

type IconAlternateProps = {
  iconProps?: any;
  fontIconClass?: string;
  size?: 'extraSmall' | 'small' | 'medium' | 'large';
  color?: any;
  shape?: any;
  className?: string;
  onClick?: any;
  rest?: React.ReactNode;
};

const IconAlternate = (props: IconAlternateProps) => {
  const {
    iconProps,
    fontIconClass,
    size,
    color,
    shape,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const useBackgroundStyles = makeStyles(() => ({
    background: {
      background: color[50],
    },
  }));
  const backgroundClasses = useBackgroundStyles();

  return (
    <Avatar
      className={clsx(
        'icon-alternate',
        classes.root,
        classes[size],
        classes[shape],
        backgroundClasses.background,
        className,
      )}
      {...rest}
    >
      <Icon
        size={size}
        fontIconClass={fontIconClass}
        fontIconColor={color[500]}
        className="icon-alternate__icon"
        {...iconProps}
      />
    </Avatar>
  );
};

IconAlternate.defaultProps = {
  size: 'medium',
  shape: 'square',
  iconProps: {},
};

PropTypes.oneOf([
  colors.red,
  colors.pink,
  colors.purple,
  colors.deepPurple,
  colors.indigo,
  colors.blue,
  colors.lightBlue,
  colors.cyan,
  colors.teal,
  colors.green,
  colors.lightGreen,
  colors.lime,
  colors.yellow,
  colors.amber,
  colors.orange,
  colors.deepOrange,
  colors.brown,
  colors.grey,
  colors.blueGrey,
]);

export default IconAlternate;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  extraSmall: {
    width: 20,
    height: 20,
  },
  small: {
    width: 50,
    height: 50,
  },
  medium: {
    width: 70,
    height: 70,
  },
  large: {
    width: 90,
    height: 90,
  },
  circle: {
    borderRadius: '100%',
  },
  square: {
    borderRadius: theme.spacing(2),
  },
}));
