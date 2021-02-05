import React, { useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Grid, makeStyles } from '@material-ui/core';
import axios from 'utils/axios';
import useIsMountedRef from 'hooks/useIsMountedRef';
import PostAdd from 'components/PostAdd';
import PostCard from 'components/PostCard';
import type { Profile, Post } from 'types/social';
import About from './About';

type Props = {
  className?: string;
  profile: Profile;
};

const Timeline = ({ className, profile, ...rest }: Props) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get<{ posts: Post[] }>('/api/social/posts');

      if (isMountedRef.current) {
        setPosts(response.data.posts);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getPosts().then();
  }, [getPosts]);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <About profile={profile} />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <PostAdd />
          {posts.map(post => (
            <Box mt={3} key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

Timeline.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  profile: PropTypes.object.isRequired,
};

export default Timeline;

const useStyles = makeStyles(() => ({
  root: {},
}));
