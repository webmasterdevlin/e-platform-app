import React, { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import axios from 'utils/axios';
import useIsMountedRef from 'hooks/useIsMountedRef';
import Page from 'components/Page';
import PostAdd from 'components/PostAdd';
import PostCard from 'components/PostCard';
import type { Post } from 'types/social';
import Header from './Header';

const SocialFeedView: FC = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get<{ posts: Post[] }>('/api/social/feed');

      if (isMountedRef.current) {
        setPosts(response.data.posts);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Page className={classes.root} title="Social Feed">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <PostAdd />
        </Box>
        {posts.map(post => (
          <Box mt={3} key={post.id}>
            <PostCard post={post} />
          </Box>
        ))}
      </Container>
    </Page>
  );
};

export default SocialFeedView;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));
