import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
  Typography,
} from '@material-ui/core';

const CreateOfferingsDialog = () => {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <a onClick={handleClickOpen} className="button with-icon">
        Create Offerings <i className="fa fa-hand-grab-o" />
      </a>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Choose an offering
        </DialogTitle>
        <DialogContent>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
            <Card
              className={classes.rootCard}
              onClick={() => {
                history.push('lesson-ads');
                handleClose();
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="auto"
                  width={'100%'}
                  image="https://picsum.photos/300/360"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.card}>
                  <Box color={'crimson'} fontSize={'large'} fontWeight={'bold'}>
                    LESSON ADS
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              className={classes.rootCard}
              onClick={() => {
                history.push('classroom');
                handleClose();
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="auto"
                  width={'100%'}
                  image="https://picsum.photos/300/360"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.card}>
                  <Box color={'crimson'} fontSize={'large'} fontWeight={'bold'}>
                    CREATE A CLASSROOM
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateOfferingsDialog;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootCard: {
      width: 420,
      margin: '2rem',
      padding: '2rem',
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  }),
);

const styles = (theme: Theme) =>
  createStyles({
    rootDialog: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    rootCard: {
      maxWidth: 450,
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.rootDialog} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
