import React, { useState } from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Paper,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  colors,
  makeStyles,
  withStyles,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  User as UserIcon,
  Star as StarIcon,
  Briefcase as BriefcaseIcon,
  File as FileIcon,
} from 'react-feather';
import type { Theme } from 'themes/dashboard-theme';
import Page from 'components/Page';
import UserDetails from './UserDetails';
import ProjectDetails from './ProjectDetails';
import ProjectDescription from './ProjectDescription';

const steps = [
  {
    label: 'User Details',
    icon: UserIcon,
  },
  {
    label: 'Project Details',
    icon: BriefcaseIcon,
  },
  {
    label: 'Project Description',
    icon: FileIcon,
  },
];

const CustomStepConnector = withStyles((theme: Theme) => ({
  vertical: {
    marginLeft: 19,
    padding: 0,
  },
  line: {
    borderColor: theme.palette.divider,
  },
}))(StepConnector);

type Props = {
  active?: boolean;
  completed?: boolean;
  icon: number;
};

const CustomStepIcon = ({ active, completed, icon }: Props) => {
  const classes = useCustomStepIconStyles();

  const Icon = steps[icon - 1].icon;

  return (
    <Avatar
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      <Icon size="20" />
    </Avatar>
  );
};

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.number.isRequired,
};

const ProjectCreateView: FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleNext = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleComplete = (): void => {
    setCompleted(true);
  };

  return (
    <Page className={classes.root} title="Project Create">
      <Container maxWidth="lg">
        <Box mb={3}>
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
            <Typography variant="body1" color="textPrimary">
              Projects
            </Typography>
          </Breadcrumbs>
          <Typography variant="h3" color="textPrimary">
            Create Wizard &amp; Process
          </Typography>
        </Box>
        {!completed ? (
          <Paper>
            <Grid container>
              <Grid item xs={12} md={3}>
                <Stepper
                  activeStep={activeStep}
                  className={classes.stepper}
                  connector={<CustomStepConnector />}
                  orientation="vertical"
                >
                  {steps.map(step => (
                    <Step key={step.label}>
                      <StepLabel StepIconComponent={CustomStepIcon}>
                        {step.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
              <Grid item xs={12} md={9}>
                <Box p={3}>
                  {activeStep === 0 && <UserDetails onNext={handleNext} />}
                  {activeStep === 1 && (
                    <ProjectDetails onBack={handleBack} onNext={handleNext} />
                  )}
                  {activeStep === 2 && (
                    <ProjectDescription
                      onBack={handleBack}
                      onComplete={handleComplete}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Card>
            <CardContent>
              <Box maxWidth={450} mx="auto">
                <Box display="flex" justifyContent="center">
                  <Avatar className={classes.avatar}>
                    <StarIcon />
                  </Avatar>
                </Box>
                <Box mt={2}>
                  <Typography variant="h3" color="textPrimary" align="center">
                    You are all done!
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                  >
                    Donec ut augue sed nisi ullamcorper posuere sit amet eu
                    mauris. Ut eget mauris scelerisque.
                  </Typography>
                </Box>
                <Box mt={2} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    component={RouterLink}
                    to="/app/projects/1"
                  >
                    View your project
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}
      </Container>
    </Page>
  );
};

export default ProjectCreateView;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  avatar: {
    backgroundColor: colors.red[600],
  },
  stepper: {
    backgroundColor: 'transparent',
  },
}));

const useCustomStepIconStyles = makeStyles((theme: Theme) => ({
  root: {},
  active: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[10],
    color: theme.palette.secondary.contrastText,
  },
  completed: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));
