import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import { HeroShaped } from '../../../../../components/organisms';

type Props = {
  className?: string;
};

const Hero = (props: Props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title={
                <span>
                  <span className="text-highlighted__primary">
                    Learn new skills,
                  </span>{' '}
                  gain more experience
                </span>
              }
              subtitle="Our mission is to spread education that is easy accessible and everyone can learn."
              ctaGroup={[
                <Button variant="contained" color="primary" size="large">
                  Start now
                </Button>,
              ]}
              align="left"
              titleVariant="h3"
            />
          </div>
        }
        rightSide={
          <Image
            src="/images/photos/elearning/elearning.jpg"
            srcSet="/images/photos/elearning/elearning@2x.jpg 2x"
            alt="..."
            className={classes.image}
            lazyProps={{
              width: '100%',
              height: '100%',
            }}
          />
        }
      />
    </div>
  );
};

export default Hero;

const useStyles = makeStyles(() => ({
  root: {},
  image: {
    objectFit: 'cover',
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));
