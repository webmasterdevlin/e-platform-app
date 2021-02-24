import React from 'react';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
import { Box, IconButton, SvgIcon, Tooltip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const Lesson = () => {
  const history = useHistory();

  return (
    <Box
      style={{
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderRadius: '5rem',
        padding: '0.01rem 0.5rem 0.01rem 1rem',
        marginRight: '0.5rem',
        cursor: 'pointer',
      }}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      onClick={() => history.push('/app/lesson-ad')}
    >
      <Typography variant={'h6'}>Add Lesson</Typography>
      <Tooltip title="Add Lesson">
        <IconButton color="inherit">
          <SvgIcon fontSize="small">
            <PlusCircleIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Lesson;
