import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, colors } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import {
  SectionHeader,
  IconAlternate,
} from '../../../../../components/molecules';
import { CardReview } from '../../../../../components/organisms';

type Props = {
  className?: string;
  data?: any[];
};

const Reviews = (props: Props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        overline={
          <Image
            src="/images/illustrations/rated-by-our-customer.png"
            alt="rating"
            className={classes.sectionHeadlineStars}
            width="auto"
          />
        }
        title={
          <span>
            <span className="text-highlighted__primary">Rated 5 out of 5</span>{' '}
            stars by our customers!
          </span>
        }
        subtitle="Companies from across the globe have had fantastic experiences using TheFront. Here’s what they have to say."
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((review, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={4}
            data-aos="fade-up"
          >
            <CardReview
              variant="outlined"
              text={review.feedback}
              icon={
                <IconAlternate
                  color={colors.blue}
                  fontIconClass="fas fa-quote-right"
                />
              }
              authorName={review.authorName}
              authorTitle={review.authorOccupation}
              authorPhoto={review.authorPhoto}
            />
          </Grid>
        ))}
        <Grid item container xs={12} justify="center">
          <Button variant="outlined" size="large" color="primary">
            See all reviews
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reviews;

const useStyles = makeStyles(() => ({
  root: {},
  sectionHeadlineStars: {
    maxWidth: 120,
  },
}));
