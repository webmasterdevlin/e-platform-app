import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import type { ProjectReview } from 'types/project';
import OverallReviews from './OverallReviews';
import ReviewCard from './ReviewCard';

type Props = {
  className?: string;
  reviews: ProjectReview[];
};

const Reviews = ({ className, reviews, ...rest }: Props) => {
  const classes = useStyles();
  let rating =
    reviews.reduce((acc, review) => acc + review.value, 0) / reviews.length;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <OverallReviews rating={rating} reviewsCount={reviews.length} />
      {reviews.map(review => (
        <ReviewCard
          className={classes.review}
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
  reviews: PropTypes.array,
};

export default Reviews;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  review: {
    marginTop: theme.spacing(2),
  },
}));
