import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Grid,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton, Pagination } from '@material-ui/lab';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import type { Theme } from 'themes/dashboard-theme';
import type { Project } from 'types/project';
import ProjectCard from 'components/ProjectCard';

type Props = {
  className?: string;
  projects: Project[];
};

const Results = ({ className, projects, ...rest }: Props) => {
  const classes = useStyles();
  const sortRef = useRef<HTMLButtonElement | null>(null);
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>('Most popular');
  const [mode, setMode] = useState<string>('grid');

  const handleSortOpen = (): void => {
    setOpenSort(true);
  };

  const handleSortClose = (): void => {
    setOpenSort(false);
  };

  const handleSortSelect = (value: string): void => {
    setSelectedSort(value);
    setOpenSort(false);
  };

  const handleModeChange = (event: any, value: string): void => {
    setMode(value);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={2}
      >
        <Typography className={classes.title} variant="h5" color="textPrimary">
          Showing {projects.length} projects
        </Typography>
        <Box display="flex" alignItems="center">
          <Button
            className={classes.sortButton}
            onClick={handleSortOpen}
            ref={sortRef}
          >
            {selectedSort}
            <ArrowDropDownIcon />
          </Button>
          <ToggleButtonGroup
            exclusive
            onChange={handleModeChange}
            size="small"
            value={mode}
          >
            <ToggleButton value="grid">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid
            item
            key={project.id}
            md={mode === 'grid' ? 4 : 12}
            sm={mode === 'grid' ? 6 : 12}
            xs={12}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Pagination count={3} />
      </Box>
      <Menu
        anchorEl={sortRef.current}
        onClose={handleSortClose}
        open={openSort}
        elevation={1}
      >
        {['Most recent', 'Popular', 'Price high', 'Price low', 'On sale'].map(
          option => (
            <MenuItem key={option} onClick={() => handleSortSelect(option)}>
              <ListItemText primary={option} />
            </MenuItem>
          ),
        )}
      </Menu>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.array.isRequired,
};

export default Results;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main,
    },
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2),
  },
}));
