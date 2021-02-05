import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CardBase, DescriptionListIcon } from 'components/organisms';

type Props = {
  align?: 'center' | 'left' | 'right';
  className?: string;
  title?: string;
  icon?: any;
  variant?: any;
  liftUp?: any;
};

const CardCategory = (props: Props) => {
  const { align, className, title, icon, ...rest } = props;

  const classes = useStyles();

  return (
    <CardBase className={clsx(classes.root, className)} {...rest}>
      <DescriptionListIcon icon={icon} title={title} align={align} />
    </CardBase>
  );
};

export default CardCategory;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));
