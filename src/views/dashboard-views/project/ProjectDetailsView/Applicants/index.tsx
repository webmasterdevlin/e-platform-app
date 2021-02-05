import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, makeStyles } from '@material-ui/core';
import ApplicantCard from './ApplicantCard';

type Props = {
  className?: string;
  applicants: any[];
};

const Applicants = ({ className, applicants, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      {applicants.map(applicant => (
        <Grid item key={applicant.id} lg={4} xs={12}>
          <ApplicantCard applicant={applicant} />
        </Grid>
      ))}
    </Grid>
  );
};

Applicants.propTypes = {
  className: PropTypes.string,
  applicants: PropTypes.array.isRequired,
};

export default Applicants;

const useStyles = makeStyles(() => ({
  root: {},
}));
