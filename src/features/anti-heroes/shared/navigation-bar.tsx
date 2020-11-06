import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export default function NavigationBar() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            onClick={() => history.push('/redux-demo/toolkit')}
            className={classes.menu}
            color="default"
          >
            Toolkit
          </Button>

          <Button
            onClick={() => history.push('/redux-demo/thunk')}
            className={classes.menu}
          >
            Thunk
          </Button>

          <Button
            onClick={() => history.push('/redux-demo/saga')}
            className={classes.menu}
            color="default"
          >
            Saga
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '4rem',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menu: {
      color: '#FFF',
      textDecoration: 'none',
      padding: '0.5rem',
      margin: '0.5rem',
    },
  }),
);
