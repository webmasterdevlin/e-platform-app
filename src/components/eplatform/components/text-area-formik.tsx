import React from 'react';
import { Box, makeStyles, Paper, TextareaAutosize } from '@material-ui/core';
import { Theme } from '../../../themes/dashboard-theme';
import { useFormikContext } from 'formik';
import Typography from '@material-ui/core/Typography';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
};

const TextAreaFormik: React.FC<Props> = ({ name, label, placeholder }) => {
  const classes = useStyles();

  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <Box mb={2}>
      <Typography variant={'h6'}>{label}</Typography>
      <Paper className={classes.textareaContainer} variant="outlined">
        <TextareaAutosize
          className={classes.textarea}
          onChange={({ target }) => setFieldValue(name, target.value)}
          placeholder={placeholder}
          rows={3}
          value={values[name]}
        />
      </Paper>
    </Box>
  );
};

export default TextAreaFormik;

const useStyles = makeStyles((theme: Theme) => ({
  textareaContainer: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  textarea: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    border: 'none',
    outline: 'none',
    resize: 'none',
    width: '100%',
  },
}));
