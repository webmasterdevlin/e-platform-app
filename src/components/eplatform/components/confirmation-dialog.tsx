import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StyledRadio from './styled-radio';

const options = ['Yes', 'No'];

const ConfirmationDialog: React.FC<any> = (
  props: ConfirmationDialogRawProps,
) => {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) setValue(valueProp);
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) radioGroupRef.current.focus();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">
        Are you sure you want to delete this?
      </DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="confirmation"
          name="confirmation"
          value={value}
          onChange={handleChange}
        >
          {options.map(option => (
            <FormControlLabel
              value={option}
              key={option}
              control={<StyledRadio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;

export interface ConfirmationDialogRawProps {
  classes: Record<'paper', string>;
  id: string;
  keepMounted: boolean;
  value: string;
  open: boolean;
  onClose: (value?: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      width: '80%',
      maxHeight: 435,
    },
  }),
);
