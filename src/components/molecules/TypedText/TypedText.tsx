import React from 'react';
import clsx from 'clsx';
import Typed from 'react-typed';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

type Props = {
  className: string;
  typedProps?: any;

  component?: any;
  variant?: any;
  color?: any;

  rest?: React.ReactNode;
};

const TypedText = (props: Props) => {
  const { className, typedProps, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography
      className={clsx('typed-text', classes.root, className)}
      {...rest}
    >
      <Typed className="typed-text__item" {...typedProps} />
    </Typography>
  );
};

export default TypedText;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));
