import React from 'react';
import {
  Box,
  createStyles,
  Grid,
  Switch,
  SwitchClassKey,
  SwitchProps,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';

type Props = {
  label?: string;
  state: any;
  handleChange: (e: any) => void;
  classes?: Styles;
} & SwitchProps;

const StyledSwitch = ({ label, state, handleChange }: Props) => (
  <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
    {label && <div>{label}</div>}
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Off</Grid>
          <Grid item>
            <AntSwitch
              checked={state.isEnabled}
              onChange={handleChange}
              name="isEnabled"
            />
          </Grid>
          <Grid item>On</Grid>
        </Grid>
      </Typography>
    </Box>
  </Box>
);

export default StyledSwitch;

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {
      display: 'none',
    },
  }),
)(Switch);
