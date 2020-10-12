import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';
import { HeroShaped, Map } from '../../../../../components/organisms';

type Props = {
  className?: string;
  data?: any[];
  rest?: React.ReactNode;
};

const Form = ({ className, data, ...rest }: Props) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <div className={classes.heroleftSide}>
            <SectionHeader
              title="Contact us for anything"
              subtitle="Our goal is to be as helpful as possible."
              data-aos="fade-up"
              align="left"
            />
            <div className={classes.form}>
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Full name
                  </Typography>
                  <TextField
                    placeholder="Your full name"
                    variant="outlined"
                    size="medium"
                    name="fullname"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    E-mail
                  </Typography>
                  <TextField
                    placeholder="Your e-mail address"
                    variant="outlined"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Message
                  </Typography>
                  <TextField
                    placeholder="Your question about our services"
                    variant="outlined"
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        }
        rightSide={
          <Map
            center={[45.464211, 9.011383]}
            pins={data}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

export default Form;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  map: {
    zIndex: 9,
  },
  form: {
    '& .MuiTextField-root': {
      background: 'white',
    },
    '& .MuiOutlinedInput-input': {
      background: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      border: 'solid 1px rgba(0, 0, 0, 0.2)',
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  heroleftSide: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(6),
    },
  },
}));
