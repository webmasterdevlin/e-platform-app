import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Icon } from '../../../components/atoms';
import theme from '../../../themes/landing-pages-theme';

type Props = {
  className?: string;
  fontIconClass?: string;
  color?: string;
  title?: string;
  iconProps?: any;
  typographyProps?: any;
};

const IconText = (props: Props) => {
  const {
    title,
    color,
    fontIconClass,
    className,
    iconProps,
    typographyProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div className={clsx('icon-text', classes.root, className)} {...rest}>
      <Icon
        className="icon-text__icon"
        size="small"
        fontIconClass={fontIconClass}
        fontIconColor={color}
        {...iconProps}
      />
      <Typography
        noWrap
        variant="subtitle1"
        color="textPrimary"
        className={clsx('icon-text__typography', classes.title)}
        {...typographyProps}
      >
        {title}
      </Typography>
    </div>
  );
};

IconText.defaultProps = {
  iconProps: {},
  typographyProps: {},
};

export default IconText;

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginLeft: theme.spacing(1),
  },
}));
