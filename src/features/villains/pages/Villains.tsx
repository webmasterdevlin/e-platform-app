import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  getVillainsAction,
  deleteVillainByIdAction,
  removeVillainByIdTemporaryAction,
} from '../villain-actions';
import VillainForm from '../components/VillainForm';
import { RootState } from '../../../store';
import TitleBar from '../../anti-heroes/shared/title-bar';
import UpdateUiLabel from '../../anti-heroes/shared/update-ui-label';
import { Box, Button } from '@material-ui/core';

type Props = {};

const Villains = ({}: Props) => {
  const dispatch: Dispatch = useDispatch();
  const { villains, loading } = useSelector(
    (state: RootState) => state.villain,
  );
  const [counter, setCounter] = useState('0');

  useEffect(() => {
    dispatch(getVillainsAction());
  }, []);

  return (
    <div>
      <TitleBar title={'Super Villains - Redux Thunk'} />
      <VillainForm />
      <UpdateUiLabel />
      <div>
        {loading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          villains.map(v => (
            <Box
              key={v.id}
              mb={2}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
            >
              <Box>
                <span>{`${v.firstName} ${v.lastName} is ${v.knownAs}`}</span>
                {counter === v.id && <span> - marked</span>}
              </Box>
              <Box>
                <Button
                  onClick={() => setCounter(v.id)}
                  color={'default'}
                  variant={'contained'}
                >
                  Mark
                </Button>{' '}
                <Button
                  onClick={() =>
                    dispatch(removeVillainByIdTemporaryAction(v.id))
                  }
                  variant={'contained'}
                  color={'primary'}
                >
                  Remove
                </Button>{' '}
                <Button
                  onClick={() => dispatch(deleteVillainByIdAction(v.id))}
                  variant={'outlined'}
                  color={'primary'}
                >
                  DELETE in DB
                </Button>
              </Box>
            </Box>
          ))
        )}
      </div>
      {villains.length === 0 && !loading && (
        <Button
          variant={'outlined'}
          color={'primary'}
          onClick={() => dispatch(getVillainsAction())}
        >
          Re-fetch
        </Button>
      )}
    </div>
  );
};

export default Villains;
