import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@material-ui/core';
import { Icon } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import { Section } from '../../../../../components/organisms';

type Props = {
  className?: string;
  data?: any;
};

const Newsletter = (props: Props) => {
  const { data, className, ...rest } = props;
  const classes: any = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <SectionHeader
          title={
            <span className={classes.textWhite}>
              Subscribe To Our Newsletter
            </span>
          }
          subtitle={
            <span className={classes.textWhite}>
              Don't lose a chance to be among the firsts to know about our
              upcoming news and updates.
            </span>
          }
          fadeUp
        />
        <div className={classes.inputContainer}>
          <FormControl
            fullWidth
            variant="outlined"
            data-aos="fade-up"
            className={classes.formControl}
            size="medium"
          >
            <OutlinedInput
              className={classes.input}
              endAdornment={
                <InputAdornment position="end">
                  <Icon
                    fontIconClass="fas fa-paper-plane"
                    fontIconColor={colors.indigo[900]}
                  />
                </InputAdornment>
              }
              placeholder="Enter your email"
            />
          </FormControl>
        </div>
      </Section>
    </div>
  );
};

export default Newsletter;

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url(/images/illustrations/circled-background.svg) no-repeat',
    backgroundSize: 'cover',
    borderRadius: theme.spacing(2),
  },
  textWhite: {
    color: 'white',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    maxWidth: 400,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInputAdornment-root i': {
      color: 'white !important',
    },
  },
}));
