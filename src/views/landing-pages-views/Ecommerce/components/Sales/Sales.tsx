import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';

type Props = {
  className?: string;
  data?: any;
};

const Sales = (props: Props) => {
  const { data, className, ...rest } = props;
  const classes: any = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="The most slod products"
        subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
        subtitleColor="textPrimary"
        subtitleVariant="body1"
        data-aos="fade-up"
        align="left"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} data-aos="fade-up">
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia}>
                <Image
                  {...item.image}
                  alt={item.title}
                  className={classes.image}
                />
              </CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography
                  color="textPrimary"
                  variant="subtitle1"
                  className={classes.fontWeightBold}
                  align="center"
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sales;

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    objectFit: 'contain',
    height: 120,
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  cardMedia: {
    padding: theme.spacing(2, 2, 0, 2),
    display: 'flex',
    justifyContent: 'center',
  },
}));
