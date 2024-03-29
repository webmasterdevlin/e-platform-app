import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import type { Theme } from 'themes/dashboard-theme';
import Page from 'components/Page';
import DraftEditor from 'components/DraftEditor';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const DraftEditorView: FC = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Formik Form">
      <Container maxWidth="lg">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/app/extra"
            component={RouterLink}
          >
            Extra
          </Link>
          <Typography variant="body1" color="textPrimary">
            Editors
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          DraftJS
        </Typography>
        <Box mt={3}>
          <Paper>
            <DraftEditor />
          </Paper>
        </Box>
      </Container>
    </Page>
  );
};

export default DraftEditorView;
