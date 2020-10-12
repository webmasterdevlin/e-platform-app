import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';
import { CardPromo } from '../../../../../components/organisms';

type Props = {
  className?: string;
  data?: any[];
};

const PromoNumbers = (props: Props) => {
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
            Our global class is open{' '}
            <span className="text-highlighted__primary">for all</span>
          </span>
        }
        subtitle="The best way to learn is by using skills. That's why every class has a project that lets you practice and get feedback."
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
            <CardPromo
              variant="outlined"
              liftUp
              align={isMd ? 'left' : 'center'}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              fontIconClass={item.icon}
              color={item.color}
              titleColor="primary"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PromoNumbers;

const useStyles = makeStyles(() => ({
  root: {},
}));
