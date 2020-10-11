import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

type Props = {
  className?: string;
  prefix?: string;
  suffix?: string;
  end?: number;
  start?: number;
  labelColor?: string;
  textColor?: string;
  label?: string;
  labelProps?: any;
  countNumberProps?: any;
  countWrapperProps?: any;
  wrapperProps?: any;
  visibilitySensorProps?: any;
};
const CountUpNumber: React.FC<Props> = props => {
  const {
    start,
    end,
    suffix,
    prefix,
    label,
    textColor,
    labelColor,
    className,
    visibilitySensorProps,
    wrapperProps,
    countWrapperProps,
    countNumberProps,
    labelProps,
    ...rest
  } = props;

  const classes = useStyles();

  const [viewPortEntered, setViewPortEntered] = React.useState(false);
  const setViewPortVisibility = isVisible => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <div className={clsx('countup-number', classes.root, className)} {...rest}>
      <VisibilitySensor
        onChange={isVisible => setViewPortVisibility(isVisible)}
        delayedCall
        className="countup-number__visibility-sensor"
        {...visibilitySensorProps}
      >
        <div className="countup-number__wrapper" {...wrapperProps}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            color={textColor || 'textPrimary'}
            className="countup-number__count-wrapper"
            {...countWrapperProps}
          >
            <CountUp
              delay={1}
              redraw={false}
              end={viewPortEntered ? end : start}
              start={start}
              suffix={suffix || ''}
              prefix={prefix || ''}
              className="countup-number__count"
              {...countNumberProps}
            />
          </Typography>
          <Typography
            variant="subtitle1"
            color={labelColor || 'textSecondary'}
            align="center"
            className="countup-number__label"
            {...labelProps}
          >
            {label}
          </Typography>
        </div>
      </VisibilitySensor>
    </div>
  );
};

CountUpNumber.defaultProps = {
  start: 0,
  visibilitySensorProps: {},
  wrapperProps: {},
  countWrapperProps: {},
  countNumberProps: {},
  labelProps: {},
};

export default CountUpNumber;
