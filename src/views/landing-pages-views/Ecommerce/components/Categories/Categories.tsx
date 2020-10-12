import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Grid } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import {
  DescriptionListIcon,
  CardBase,
} from '../../../../../components/organisms';

type Props = {
  className?: string;
  data?: any;
};

const Categories = (props: Props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader title="Categories" align="left" />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={6} md={2} key={index} data-aos="fade-up">
            <CardBase noBorder noShadow liftUp className={classes.cardBase}>
              <DescriptionListIcon
                className={classes.descriptionListIcon}
                icon={
                  <Image
                    {...item.icon}
                    alt={item.title}
                    className={classes.image}
                  />
                }
                title={item.title}
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    width: 60,
    height: 60,
    objectFit: 'contain',
    marginBottom: theme.spacing(5),
  },
  descriptionListIcon: {
    '& .description-list-icon__title': {
      fontWeight: 400,
      fontSize: 16,
    },
  },
  cardBase: {
    borderRadius: theme.spacing(2),
    background: colors.indigo[50],
  },
}));
