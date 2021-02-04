import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  SectionHeader,
  OverlapedImages,
} from '../../../../../components/molecules';

type Props = {
  className?: string;
  data?: any[];
};

const Process = ({ className, data, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <SectionHeader
            label="process"
            title={
              <span>
                <span className="text-highlighted__primary">Our process</span>{' '}
                to find you a new job is fast and you can do it from home.
              </span>
            }
            subtitle="We keep everything as simple as possible by standardizing the application process for all jobs."
            align="left"
            disableGutter
          />
        </Grid>
        <Grid
          item
          container
          alignContent="center"
          xs={12}
          sm={6}
          data-aos="fade-up"
        >
          <OverlapedImages
            image1={{
              src: '/images/photos/expo-gallery/gallery1.jpg',
              srcSet: '/images/photos/expo-gallery/gallery1@2x.jpg 2x',
              alt: '...',
            }}
            image2={{
              src: '/images/photos/expo-gallery/gallery2.jpg',
              srcSet: '/images/photos/expo-gallery/gallery2@2x.jpg 2x',
              alt: '...',
            }}
            image3={{
              src: '/images/photos/expo-gallery/gallery3.jpg',
              srcSet: '/images/photos/expo-gallery/gallery3@2x.jpg 2x',
              alt: '...',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Process;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));
