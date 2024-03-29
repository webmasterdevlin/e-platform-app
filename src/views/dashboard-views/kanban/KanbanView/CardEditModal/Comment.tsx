import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { Avatar, Box, Paper, Typography, makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import { useSelector } from 'store';
import type { RootState } from 'store';
import type { Comment as CommentType, Member } from 'types/kanban';

type Props = {
  className?: string;
  comment: CommentType;
};

const memberSelector = (state: RootState, memberId: string): Member => {
  const { members } = state.kanban;

  return members.byId[memberId];
};

const Comment = ({ comment, className, ...rest }: Props) => {
  const classes = useStyles();
  const member = useSelector(state => memberSelector(state, comment.memberId));

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Avatar alt="Person" src={member.avatar} />
      <Box ml={2} flexGrow={1}>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          {member.name}
        </Typography>
        <Paper className={classes.messageContainer} variant="outlined">
          <Typography variant="body2" color="textPrimary">
            {comment.message}
          </Typography>
        </Paper>
        <Typography variant="caption" color="textSecondary">
          {moment(comment.createdAt).format('MMM DD, YYYY [at] hh:mm a')}
        </Typography>
      </Box>
    </div>
  );
};

Comment.propTypes = {
  // @ts-ignore
  comment: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Comment;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  messageContainer: {
    backgroundColor: theme.palette.background.dark,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));
