import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/themes/dashboard-theme';

interface CTAProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  browseButton: {
    marginLeft: theme.spacing(2)
  }
}));

const CTA: FC<CTAProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          Ready to start learning?
        </Typography>
        <Typography variant="h1" align="center" color="secondary">
          Download our app today.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          <Button color="secondary" component="a" href="/" variant="contained">
            Create an offer
          </Button>
        </Box>
      </Container>
    </div>
  );
};

CTA.propTypes = {
  className: PropTypes.string
};

export default CTA;
