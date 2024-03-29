import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { Avatar, Box, Link, Typography, makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import type { PostComment } from 'types/social';

interface CommentProps {
  className?: string;
  comment: PostComment;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  bubble: {
    borderRadius: theme.shape.borderRadius,
  },
}));

const Comment: FC<CommentProps> = ({ className, comment, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Avatar
        alt="Person"
        component={RouterLink}
        src={comment.author.avatar}
        to="#"
      />
      <Box
        flexGrow={1}
        p={2}
        ml={2}
        bgcolor="background.dark"
        className={classes.bubble}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <Link color="textPrimary" component={RouterLink} to="#" variant="h6">
            {comment.author.name}
          </Link>
          <Box flexGrow={1} />
          <Typography color="textSecondary" variant="caption">
            {moment(comment.createdAt).fromNow()}
          </Typography>
        </Box>
        <Typography variant="body1" color="textPrimary">
          {comment.message}
        </Typography>
      </Box>
    </div>
  );
};

Comment.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  comment: PropTypes.object.isRequired,
};

export default Comment;
