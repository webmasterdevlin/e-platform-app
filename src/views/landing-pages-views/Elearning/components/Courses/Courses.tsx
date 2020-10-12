import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  colors,
  Avatar,
} from '@material-ui/core';
import { Image, LearnMoreLink } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import { CardProduct } from '../../../../../components/organisms';

type Props = {
  className?: string;
  data?: any;
};

const Courses = (props: Props) => {
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
            Browse our <span className="text-highlighted">popular courses</span>
          </span>
        }
        subtitle="Here are our popular course you might want to learn from your tutor."
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} data-aos="fade-up">
            <CardProduct
              className={classes.cardProduct}
              withShadow
              liftUp
              mediaContent={
                <>
                  <Image
                    {...item.image}
                    alt={item.title}
                    lazyProps={{ width: '100%', height: '100%' }}
                  />
                  <div className={classes.courseCardPrice}>
                    <Typography
                      variant="body1"
                      color="primary"
                      className={classes.fontWeight700}
                    >
                      {item.price}
                    </Typography>
                  </div>
                </>
              }
              cardContent={
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      align="left"
                      className={classes.fontWeight700}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      align="left"
                    >
                      {item.address}
                    </Typography>
                  </Grid>
                  <Grid item container justify="space-between" xs={12}>
                    <Grid item container xs={6} wrap="nowrap">
                      {item.reviews.map((review, index) => (
                        <Avatar
                          key={index}
                          className={classes.courseCardReviewAvatar}
                          alt={review.authorName}
                          {...review.authorPhoto}
                        />
                      ))}
                    </Grid>
                    <Grid
                      item
                      container
                      alignItems="center"
                      justify="flex-end"
                      xs={6}
                    >
                      <i
                        className={clsx(
                          'fas fa-star',
                          classes.courseCardReviewStar,
                        )}
                      />
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.fontWeight700}
                      >
                        {item.score}
                      </Typography>
                      <Typography
                        noWrap
                        component="span"
                        variant="body2"
                        color="textSecondary"
                        className={classes.reviewCount}
                      >
                        ({item.reviewCount} reviews)
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <LearnMoreLink
                      title="Learn more"
                      variant="body1"
                      color="primary"
                    />
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Courses;

const useStyles = makeStyles(theme => ({
  root: {},
  cardProduct: {
    borderRadius: theme.spacing(3),
  },
  courseCardPrice: {
    padding: theme.spacing(1),
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    background: 'white',
    borderRadius: theme.spacing(1),
  },
  courseCardReviewAvatar: {
    marginLeft: theme.spacing(-2),
    border: '3px solid white',
    '&:first-child': {
      marginLeft: 0,
    },
  },
  courseCardReviewStar: {
    color: colors.yellow[800],
    marginRight: theme.spacing(1 / 2),
  },
  reviewCount: {
    marginLeft: theme.spacing(1),
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));
