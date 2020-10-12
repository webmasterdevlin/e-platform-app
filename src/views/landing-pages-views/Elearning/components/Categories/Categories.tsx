import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';
import { CardCategoryLink } from '../../../../../components/organisms';

type Props = {
  className?: string;
  data?: any;
};

const Categories = (props: Props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <span>
            Choose your course by{' '}
            <span className="text-highlighted">categories</span>
          </span>
        }
        subtitle="Browse the available course categories, choose your favourite one and start learning."
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <CardCategoryLink
              variant="outlined"
              align={isMd ? 'left' : 'center'}
              liftUp
              title={item.title}
              subtitle={item.subtitle}
              href="#"
              fontIconClass={item.icon}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;

const useStyles = makeStyles(() => ({
  root: {},
}));
