import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Button, Typography, Grid } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import { CardProduct } from '../../../../../components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  cardProduct: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      flex: '1 1 50%',
    },
    '& .card-product__media': {
      minHeight: 300,
      height: '100%',
      flex: '1 1 50%',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column !important',
      '& .card-product__content': {
        flex: '1 1 100%',
      },
      '& .card-product__media': {
        flex: '1 1 100%',
        width: '100%',
      },
    },
  },
  cardProductReverse: {
    flexDirection: 'row-reverse',
  },
  image: {
    objectFit: 'cover',
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
    alignSelf: 'flex-start',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3),
    },
  },
  blogTitle: {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.primary.main,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0),
    },
  },
}));

const PopularNews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = props => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = props => (
    <div className={classes.blogContent}>
      <div className={classes.tags}>
        {props.tags.map((item, index) => (
          <Typography variant="caption" className={classes.tag} key={index}>
            {item}
          </Typography>
        ))}
      </div>
      <Typography
        variant="h6"
        color="textPrimary"
        className={classes.blogTitle}
      >
        {props.title}
      </Typography>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.author}
      >
        <i>
          {props.author.name} - {props.date}
        </i>
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        {props.subtitle}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className={classes.button}
      >
        Start teaching today
        {/*Read more*/}
      </Button>
    </div>
  );

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Get personal learning recommendations"
        subtitle=""
        subtitleProps={{
          color: 'textPrimary',
        }}
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index} data-aos="fade-up">
            <CardProduct
              className={clsx(
                classes.cardProduct,
                index % 2 === 1 ? classes.cardProductReverse : {},
              )}
              mediaContent={
                <BlogMediaContent {...item.cover} alt={item.title} />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                  date={item.date}
                  tags={item.tags}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

PopularNews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PopularNews;
