import React, { useState } from 'react';
import type { FC, ChangeEvent, KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { Avatar, TextField, makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import { useDispatch } from 'store';
import useAuth from 'hooks/useAuth';
import { addComment } from 'slices/kanban';

type Props = {
  className?: string;
  cardId: string;
};

const CommentAdd = ({ cardId, className, ...rest }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [message, setMessage] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setMessage(event.target.value);
  };

  const handleKeyUp = async (
    event: KeyboardEvent<HTMLInputElement>,
  ): Promise<void> => {
    try {
      event.persist();

      if (event.keyCode === 13 && message) {
        await dispatch(addComment(cardId, message));
        setMessage('');
        enqueueSnackbar('Comment added', {
          variant: 'success',
        });
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      });
    }
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Avatar alt="Person" src={user.avatar} />
      <TextField
        fullWidth
        className={classes.field}
        value={message}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Write a comment..."
        variant="outlined"
      />
    </div>
  );
};

CommentAdd.propTypes = {
  cardId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CommentAdd;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  field: {
    marginLeft: theme.spacing(2),
  },
}));
