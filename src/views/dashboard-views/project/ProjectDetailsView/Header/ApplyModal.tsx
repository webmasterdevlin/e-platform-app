import React, { useState } from 'react';
import type { FC, ChangeEvent } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import getInitials from 'utils/getInitials';
import type { ProjectAuthor } from 'types/project';

type Props = {
  author: ProjectAuthor;
  className?: string;
  onApply?: () => void;
  onClose?: () => void;
  open: boolean;
};

const ApplyModal = ({
  author,
  className,
  onApply,
  onClose,
  open,
  ...rest
}: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setValue(event.target.value);
  };

  const handleApply = (): void => {
    enqueueSnackbar('Request sent', {
      variant: 'success',
    });
    onApply();
  };

  return (
    <Dialog maxWidth="lg" onClose={onClose} open={open}>
      <div className={clsx(classes.root, className)} {...rest}>
        <Typography
          align="center"
          gutterBottom
          variant="h3"
          color="textPrimary"
        >
          The project requires an introduction
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Write down a short note with your application regarding why you think
          you&apos;d be a good fit for this position.
        </Typography>
        <Box mt={3}>
          <TextField
            autoFocus
            FormHelperTextProps={{ classes: { root: classes.helperText } }}
            fullWidth
            helperText={`${200 - value.length} characters left`}
            label="Short Note"
            multiline
            onChange={handleChange}
            placeholder="What excites you about this project?"
            rows={5}
            value={value}
            variant="outlined"
          />
          <Box mt={6} display="flex" alignItems="center">
            <Avatar alt="Author" src={author.avatar}>
              {getInitials(author.name)}
            </Avatar>
            <Box ml={2}>
              <Typography variant="h3" color="textPrimary">
                {author.name}
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                {/* {author.bio} */}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box mt={3} p={3}>
          <Button
            onClick={handleApply}
            variant="contained"
            fullWidth
            color="primary"
          >
            Apply for a role
          </Button>
        </Box>
      </div>
    </Dialog>
  );
};

ApplyModal.propTypes = {
  // @ts-ignore
  author: PropTypes.object.isRequired,
  className: PropTypes.string,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

ApplyModal.defaultProps = {
  onApply: () => {},
  onClose: () => {},
};

export default ApplyModal;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  helperText: {
    textAlign: 'right',
    marginRight: 0,
  },
}));
