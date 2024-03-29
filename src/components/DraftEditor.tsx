import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { Editor, EditorProps } from 'react-draft-wysiwyg';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';

interface DraftEditorProps extends EditorProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    '& .rdw-option-wrapper': {
      background: 'transparent',
      border: 'none',
      minWidth: 26,
      padding: 6,
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: theme.palette.action.hover,
      },
    },
    '& .rdw-option-active': {
      boxShadow: 'none',
      backgroundColor: theme.palette.action.selected,
    },
    '& .rdw-dropdown-wrapper': {
      boxShadow: 'none',
      background: 'transparent',
    },
    '& .rdw-dropdown-optionwrapper': {
      overflowY: 'auto',
      boxShadow: theme.shadows[10],
      padding: theme.spacing(1),
    },
  },
  toolbar: {
    marginBottom: 0,
    borderLeft: 'none',
    borderTop: 'none',
    borderRight: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: 'transparent',
  },
  editor: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
}));

const DraftEditor: FC<DraftEditorProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Editor
      wrapperClassName={clsx(classes.root, className)}
      toolbarClassName={classes.toolbar}
      editorClassName={classes.editor}
      {...rest}
    />
  );
};

DraftEditor.propTypes = {
  className: PropTypes.string,
};

export default DraftEditor;
